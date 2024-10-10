import { useMutation } from "@tanstack/react-query";
import { mediaService } from "./media.service";
import { toast } from "sonner";
import { queryClient } from "@/shared/api/query-client";

export const useMediaDeleteMutation = () =>
  useMutation({
    mutationFn: (id: number) => mediaService.deleteMediaById(id),
    onSuccess: (_, __, id) => {
      toast.success(`banner ${id} success deleted`);
      queryClient.invalidateQueries({ queryKey: ["media"] });
    },
    onError: (error) => toast.error(error.message),
  });
