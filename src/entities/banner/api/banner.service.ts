import { toast } from "sonner";
import { axiosWithAuth } from "../../../shared/api/interceptor";

class BannerService {
  private PATH = "/banners";
  async getBanners(params: MediaListRequest) {
    const res = await axiosWithAuth.get<BannerResponse>(`${this.PATH}`, {
      params,
    });
    return res.data;
  }
  async getBannerById(id: number) {
    const res = await axiosWithAuth.get<BannerSchema>(`${this.PATH}/${id}`);
    return res.data;
  }

  async createBanner(body: FormData) {
    const res = await axiosWithAuth.post(`${this.PATH}`, body, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  }

  async updateBanner(id: number, body: FormData) {
    const res = await axiosWithAuth.put<BannerSchema>(
      `${this.PATH}/${id}`,
      body,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return res.data;
  }
  async deleteBanner(id: number) {
    const res = await axiosWithAuth.delete(`${this.PATH}/${id}`);
    toast.promise(res.data);
    return res.data;
  }
}

export const bannerService = new BannerService();
