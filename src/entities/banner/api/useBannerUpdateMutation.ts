import { useMutation } from "@tanstack/react-query";
import { bannerService } from "./banner.service";
import { toast } from "sonner";
import { queryClient } from "@/shared/api/query-client";

export const useBannerUpdateMutation = () =>
  useMutation({
    mutationFn: ({ id, body }: { id: number; body: FormData }) =>
      bannerService.updateBanner(id, body),
    onSuccess: () => {
      toast.success(`banner  success created`);
      queryClient.invalidateQueries({ queryKey: ["banner"] });
    },
    onError: () => toast.error("unsuccess"),
  });
