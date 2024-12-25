import { useQuery } from "@tanstack/react-query";
import { newsService } from "./news.service";

export const useNewsQueryById = (id: number) =>
  useQuery<NewsItemSchema, Error>({
    queryKey: ["news", id],
    queryFn: () => newsService.getNewsById(id),
    enabled: !!id,
  });
