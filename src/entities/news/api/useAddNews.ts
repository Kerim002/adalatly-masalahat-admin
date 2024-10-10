import { useMutation } from "@tanstack/react-query";
import { newsService } from "./news.service";
import { toast } from "sonner";
import { queryClient } from "@/shared/api/query-client";

export const useAddNews = () =>
  useMutation({
    mutationFn: (data: FormData) => newsService.addNews(data),
    onSuccess: (_, __) => {
      toast.success(`News add success`);
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: (error) => toast.error(error.message),
  });
