import { useQuery } from "@tanstack/react-query";
import { newsService } from "./news.service";

export const useNews = (params: PaginationReq) =>
  useQuery<NewsResponse, Error>({
    queryKey: ["news"],
    queryFn: () => newsService.getNews(params),
  });
