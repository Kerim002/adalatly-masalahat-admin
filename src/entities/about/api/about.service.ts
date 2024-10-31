import { axiosWithAuth } from "@/shared/api/interceptor";

class AboutService {
  private url = "/about";

  async getAboutPage() {
    const res = await axiosWithAuth.get<AboutSchema>(`${this.url}`);
    return res.data;
  }
  async updateAboutPage(body: AboutSchema) {
    const res = await axiosWithAuth.put(`${this.url}`, body);
    return res.data;
  }
}

export const aboutService = new AboutService();
