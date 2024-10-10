import { axiosWithAuth } from "@/shared/api/interceptor";

class EmployerService {
  private PATH = "employer";

  async getEmployers() {
    const res = await axiosWithAuth.get<EmployerResponse>(this.PATH);
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

  async deleteEmployer(id: string) {
    const res = await axiosWithAuth.delete(this.PATH, { params: { id } });
    return res.data;
  }
}

export const employerService = new EmployerService();
