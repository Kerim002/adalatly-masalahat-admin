import { useQuery } from "@tanstack/react-query";
import { bannerService } from "./banner.service";

export const useBannersQuery = () =>
  useQuery<BannerSchema[], Error>({
    queryKey: ["banners"],
    queryFn: () => bannerService.getBanners(),
  });
