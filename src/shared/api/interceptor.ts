import axios, { type CreateAxiosDefaults } from "axios";

import { API_URL } from "../config";
import { redirectTo } from "./navigate";
const options: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401) {
      originalRequest._isRetry = false;
      redirectTo("/login");
    } else if (!error) {
      try {
        return axiosWithAuth.request(originalRequest);
      } catch (error) {}
    }

    throw error;
  }
);

export { axiosWithAuth };
