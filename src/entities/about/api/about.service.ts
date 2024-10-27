import { axiosWithAuth } from "@/shared/api/interceptor";

class AboutService {
  private url = "/about";

  async getAboutPage() {
    const res = await axiosWithAuth.get<any>(`${this.url}`);
    return res.data;
  }
}

export const aboutService = new AboutService();
