import { axiosWithAuth } from "@/shared/api/interceptor";

class EmployerService {
  private PATH = "employers";

  async getEmployers(params: MediaListRequest) {
    const res = await axiosWithAuth.get<EmployerResponse>(this.PATH, {
      params,
    });
    return res.data;
  }

  async addEmployer(data: FormData) {
    const res = await axiosWithAuth.post(this.PATH, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  }

  async updateEmployer(id: number, data: FormData) {
    const res = await axiosWithAuth.put(`${this.PATH}/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  }

  async deleteEmployer(id: string) {
    const res = await axiosWithAuth.delete(`${this.PATH}/${id}`);
    return res.data;
  }
  async getEmployerById(id: number) {
    const res = await axiosWithAuth.get<EmployerItemSchema>(
      `${this.PATH}/${id}`
    );
    return res.data;
  }
}

export const employerService = new EmployerService();
