import { useQuery } from "@tanstack/react-query";
import { bannerService } from "./banner.service";

export const useBannersQuery = (params: MediaListRequest) =>
  useQuery<BannerResponse, Error>({
    queryKey: ["banner", params],
    queryFn: () => bannerService.getBanners(params),
  });
