import { axiosWithAuth } from "@/shared/api/interceptor";

class AuthService {
  // private url = "/auth";
  async login(body: LoginRequest) {
    const res = await axiosWithAuth.post(`/login`, body);
    return res.data;
  }
}
export const authService = new AuthService();
