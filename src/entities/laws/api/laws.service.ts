import { axiosWithAuth } from "@/shared/api/interceptor";

class LawService {
  private url = "/laws";

  async lawGetAll() {
    const res = await axiosWithAuth.get<LawsResponse>(`${this.url}`);
    return res.data;
  }
  async createLaw(body: Omit<LawItemSchema, "id">) {
    const res = await axiosWithAuth.post(`${this.url}`, body);
    return res.data;
  }
  async lawById(id: string) {
    const res = await axiosWithAuth.get<LawItemSchema>(`${this.url}/${id}`);
    return res.data;
  }
  async updateLaw(body: LawItemSchema) {
    const res = await axiosWithAuth.put(`${this.url}/${body.id}`, body);
    return res.data;
  }
  async deleteLaw(id: number) {
    await axiosWithAuth.delete(`${this.url}/${id}`);
  }
}

export const lawService = new LawService();
