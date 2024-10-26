interface PaginationReq {
  page?: number;
  limit?: number;
}
interface ResponseWithPagination<T> {
  data: T[];
  limit: number;
  page: number;
  total: number;
}
