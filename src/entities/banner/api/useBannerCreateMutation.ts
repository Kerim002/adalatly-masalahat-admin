import { useMutation } from "@tanstack/react-query";
import { bannerService } from "./banner.service";
import { toast } from "sonner";
import { queryClient } from "@/shared/api/query-client";

export const useBannerCreateMutation = () =>
  useMutation({
    mutationFn: (body: FormData) => bannerService.createBanner(body),
    onSuccess: () => {
      toast.success(`banner  success created`);
      queryClient.invalidateQueries({ queryKey: ["banners"] });
    },
    onError: () => toast.error("unsuccess"),
  });
