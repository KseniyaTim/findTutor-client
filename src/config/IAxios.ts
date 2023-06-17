import type { AxiosRequestHeaders } from "axios";

export interface IAxiosConfig {
  serviceBaseUrl: string;
  prefix: string;
  headers?: AxiosRequestHeaders;
  isTokenRequired?: boolean;
  isLogin?: boolean
}
