import { useMutation } from "@tanstack/react-query";
import { mediaService } from "./media.service";
import { queryClient } from "@/shared/api/query-client";
import { toast } from "sonner";

export const useMediaAddMutation = () =>
  useMutation({
    mutationFn: (data: FormData) => mediaService.addMedia(data),
    onSuccess: (_, __) => {
      toast.success(`Video add success`);
      queryClient.invalidateQueries({ queryKey: ["media"] });
    },
    onError: (error) => toast.error(error.message),
  });
