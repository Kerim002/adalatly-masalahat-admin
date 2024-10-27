import { axiosWithAuth } from "@/shared/api/interceptor";

class AuthService {
  async login(params: LoginRequest) {
    const res = await axiosWithAuth.post(`/login`, params);
    return res.data;
  }
  async logout() {
    const res = await axiosWithAuth.post(`/logout`);
    return res.data;
  }
}

export const authService = new AuthService();
