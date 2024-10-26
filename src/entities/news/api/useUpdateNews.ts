import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/query-client";
import { toast } from "sonner";
import { newsService } from "./news.service";

interface NewsUpdateVariables {
  id?: number;
  media: FormData;
}

export const useNewsUpdateMutation = (
  option?: UseMutationOptions<void, Error, NewsUpdateVariables>
) =>
  useMutation<void, Error, NewsUpdateVariables>({
    mutationFn: ({ id, media }: NewsUpdateVariables) =>
      newsService.updateNews(media, id),
    onSuccess: () => {
      toast.success("News updated successfully");
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
    onError: (error) => toast.error(error.message),
    ...option,
  });
