type MediaItemSchema = {
  id: number;
  video: string;
  tm_title: string;
  en_title: string;
  ru_title: string;
  date: string;
  view: number;
  cover: string;
};

type MediaListRequest = {
  page?: number;
  pageSize?: number;
};
type MediaResponse = ResponseWithPagination<MediaItemSchema>;
