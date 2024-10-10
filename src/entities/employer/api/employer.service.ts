import { axiosWithAuth } from "@/shared/api/interceptor";

class EmployerService {
  private PATH = "employer";

  async getEmployers() {
    const res = await axiosWithAuth.get<EmployerResponse>(this.PATH);
    return res.data;
  }

  async addEmployer(data: FormData) {
    await axiosWithAuth.post(this.PATH, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

export const employerService = new EmployerService();
