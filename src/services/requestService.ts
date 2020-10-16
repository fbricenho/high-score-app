import axios, { AxiosPromise } from "axios";
import config from "config";

const mockUrl = config.API_MOCK_URL || "";

export const axiosInstance = axios.create({});

export function getRequest(path: string): AxiosPromise<any> {
  return axiosInstance.get(mockUrl.concat(path));
}

export function postRequest(path: string, params: {}): AxiosPromise<any> {
  return axiosInstance.post(mockUrl.concat(path), params);
}
