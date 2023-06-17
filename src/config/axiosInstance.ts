// axios
import axios from "axios";
import type { AxiosInstance, } from "axios";

// interfaces
import { IAxiosConfig } from "./IAxios";

// tokens
// import { injectAzureToken, injectToken } from "../../utils/auth/token";

export const createAxiosInstance = ({
  serviceBaseUrl,
  prefix,
  headers,
  isTokenRequired = true,
  isLogin = false
}: IAxiosConfig): AxiosInstance => {
  const axiosInstance = axios.create({ baseURL: serviceBaseUrl + prefix });
  axios.interceptors.request.use((config) => {
    config.timeout = 5000
    return config;
  }); 
  return axiosInstance;
};
