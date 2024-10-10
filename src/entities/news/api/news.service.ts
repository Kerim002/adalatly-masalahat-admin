import { axiosWithAuth } from "@/shared/api/interceptor";

class NewsService {
  private PATH = "/news";

  async getNews(page: PaginationReq) {
    const res = await axiosWithAuth.get<NewsResponse>(this.PATH, {
      params: page,
    });
    return res.data;
  }

  async addNews(data: FormData) {
    await axiosWithAuth.post(`/admin/${this.PATH}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async deleteNews(id: string) {
    await axiosWithAuth.delete(`${this.PATH}/${id}`, {});
  }
}

export const newsService = new NewsService();
