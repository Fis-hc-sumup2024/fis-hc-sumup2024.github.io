import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { wait } from "./common";

declare module "axios" {
  interface AxiosRequestConfig {
    requestIds?: string[];
    showLoading?: boolean;
    token?: string;
  }
}

export const loadingHandler = () => {
  const addRequestId = async (
    config: InternalAxiosRequestConfig<AxiosRequestConfig>
  ) => {
    await wait(1000);
    const requestId = config.url || "";
    config.requestIds = config.requestIds || [];
    config.requestIds.push(requestId);

    const source = axios.CancelToken.source();
    config.cancelToken = source.token;

    return config;
  };

  return { addRequestId };
};

const axiosInstance = axios.create({
  baseURL: "https://api.sheetbest.com/sheets",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  loadingHandler().addRequestId,
  undefined
);

const CancelToken = axios.CancelToken;

export default axiosInstance;
export type { AxiosResponse };
export { CancelToken };
