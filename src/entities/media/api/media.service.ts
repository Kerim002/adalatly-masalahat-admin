import { axiosWithAuth } from "@/shared/api/interceptor";

class MediaService {
  private url = "/media";
  async getMediaList(params: MediaListRequest) {
    const res = await axiosWithAuth.get<MediaResponse>(`${this.url}`, {
      params,
    });
    return res.data;
  }
  async getMediaById(id: number) {
    const res = await axiosWithAuth.get<MediaItemSchema>(`${this.url}/${id}`);
    return res.data;
  }
  async deleteMediaById(id: number) {
    const res = await axiosWithAuth.delete(`${this.url}/${id}`);
    return res.data;
  }
  async addMedia(formdata: FormData) {
    await axiosWithAuth.post(`${this.url}`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  async updateMedia(formdata: FormData, id?: number) {
    await axiosWithAuth.put(`${this.url}/${id}`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export const mediaService = new MediaService();
