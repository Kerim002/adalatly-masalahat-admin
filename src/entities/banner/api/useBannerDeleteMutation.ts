import { queryClient } from "@/shared/api/query-client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { bannerService } from "./banner.service";

export const useBannerDeleteMutation = () =>
  useMutation({
    mutationFn: (id: number) => bannerService.deleteBanner(id),
    onSuccess: (_, __, id) => {
      toast.success(`banner ${id} success deleted`);
      queryClient.invalidateQueries({ queryKey: ["banners"] });
    },
    onError: (error) => toast.error(error.message),
  });
