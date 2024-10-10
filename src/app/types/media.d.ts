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
interface MediaResponse {
  media: MediaItemSchema[];
  page: number;
  pageSize: number;
  total: number;
}
