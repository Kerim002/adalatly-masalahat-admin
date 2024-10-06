import axios, { type CreateAxiosDefaults } from "axios";
import {
  getAccessToken,
  removeTokenFromStorage,
} from "../services/auth-token.service";
import { API_URL } from "../config";
import { errorCatch } from "./error";
const options: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosClassic = axios.create(options);

const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (config?.headers && accessToken) {
    config.headers.Authorization = `${accessToken}`;
  }
  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      error?.response?.status === 401 ||
      errorCatch(error) === "jwt expired" ||
      (errorCatch(error) === "jwt must be provided" &&
        error.config &&
        !error.config._isRetry)
    ) {
      originalRequest._isRetry = true;
      try {
        // await authService.getNewToken();
        return axiosWithAuth.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === "jwt expired") removeTokenFromStorage();
      }
    }

    throw error;
  }
);

export { axiosClassic, axiosWithAuth };
