import { axiosWithAuth } from "../../../shared/api/interceptor";

class BannerService {
  private PATH = "/banner";
  async getBanners() {
    const res = await axiosWithAuth.get<BannerSchema[]>(`${this.PATH}`);
    return res.data;
  }
  async getBannerById(id: number) {
    const res = await axiosWithAuth.get<BannerSchema>(`${this.PATH}/${id}`);
    return res.data;
  }
  async updateBanner(body: BannerSchema) {
    const res = await axiosWithAuth.put<BannerSchema>(
      `${this.PATH}/${body.id}`,
      body
    );
    return res.data;
  }
  async deleteBanner(id: number) {
    const res = await axiosWithAuth.delete(`${this.PATH}/${id}`);
    return res.data;
  }
}

export const bannerService = new BannerService();
