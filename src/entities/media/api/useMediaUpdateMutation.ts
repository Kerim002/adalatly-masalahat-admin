import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { mediaService } from "./media.service";
import { queryClient } from "@/shared/api/query-client";
import { toast } from "sonner";

interface MediaUpdateVariables {
  id?: number;
  media: FormData;
}

export const useMediaUpdateMutation = (
  option?: UseMutationOptions<void, Error, MediaUpdateVariables>
) =>
  useMutation<void, Error, MediaUpdateVariables>({
    mutationFn: ({ id, media }: MediaUpdateVariables) =>
      mediaService.updateMedia(media, id),
    onSuccess: () => {
      toast.success("Media updated successfully");
      queryClient.invalidateQueries({ queryKey: ["media"] });
    },
    onError: (error) => toast.error(error.message),
    ...option,
  });
