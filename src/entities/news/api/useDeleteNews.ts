import { useMutation } from "@tanstack/react-query";
import { newsService } from "./news.service";
import { toast } from "sonner";
import { queryClient } from "@/shared/api/query-client";

export const useDeleteNews = () =>
  useMutation({
    mutationFn: (id: string) => newsService.deleteNews(id),
    onSuccess: (_, __) => {
      toast.success(`News delete success`);
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: (error) => toast.error(error.message),
  });
