import axios, { type CreateAxiosDefaults } from "axios";
import { getAccessToken } from "../services/auth-token.service";
import { API_URL } from "../config";
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
    throw error;
  }
);

export { axiosClassic, axiosWithAuth };
