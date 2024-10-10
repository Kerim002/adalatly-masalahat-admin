import { useQuery } from "@tanstack/react-query";
import { mediaService } from "./media.service";

export const useMediaIdQuery = (id: number) =>
  useQuery<MediaItemSchema, Error>({
    queryKey: ["media", id],
    queryFn: () => mediaService.getMediaById(id),
  });
