import { axiosWithAuth } from "@/shared/api/interceptor";

class NewsService {
  private PATH = "/news";

  async getNews(page: PaginationReq) {
    const res = await axiosWithAuth.get<NewsResponse>(this.PATH, {
      params: {
        page: page.page,
        limit: page.limit,
      },
    });
    return res.data;
  }

  async getNewsById(id: number) {
    const res = await axiosWithAuth.get<NewsItemSchema>(`${this.PATH}/${id}`);
    return res.data;
  }

  async addNews(data: FormData) {
    await axiosWithAuth.post(`${this.PATH}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  async updateNews(data: FormData, id?: number) {
    await axiosWithAuth.put(`${this.PATH}/${id}`, data, {
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
