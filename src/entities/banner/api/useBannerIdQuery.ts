import { useQuery } from "@tanstack/react-query";
import { bannerService } from "./banner.service";

export const useBannerIdQuery = (id: number) =>
  useQuery<BannerSchema, Error>({
    queryKey: ["banner", id],
    queryFn: () => bannerService.getBannerById(id),
  });
