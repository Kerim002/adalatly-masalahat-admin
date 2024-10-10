import { useMutation } from "@tanstack/react-query";
import { mediaService } from "./media.service";
import { queryClient } from "@/shared/api/query-client";
import { toast } from "sonner";

export const useMediaUpdateMutation = () =>
  useMutation({
    mutationFn: (media: FormData) => mediaService.updateMedia(media),
    onSuccess: () => {
      toast.success("Media updated successfully");
      queryClient.invalidateQueries({ queryKey: ["media"] });
    },
    onError: (error) => toast.error(error.message),
  });
