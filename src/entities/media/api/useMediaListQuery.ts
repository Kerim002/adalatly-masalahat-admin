import { useQuery } from "@tanstack/react-query";
import { mediaService } from "./media.service";

export const useMediaListQuery = (params: MediaListRequest) =>
  useQuery<MediaResponse, Error>({
    queryKey: ["media", params],
    queryFn: () => mediaService.getMediaList(params),
  });
