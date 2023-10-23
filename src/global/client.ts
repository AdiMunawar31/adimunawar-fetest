import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const clientState = {
  requesting: false,
};

interface RequestAPIOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  data?: any;
  headers?: Record<string, string>;
  isLogin?: boolean;
}

const requestAPI = async ({
  method = "GET",
  endpoint,
  data,
}: RequestAPIOptions) => {
  const TIMEOUT_DEFAULT = 10000;
  let result: any = {};
  const host = "https://contact.herokuapp.com";
  const url = `${host}${endpoint}`;
  const timeout = TIMEOUT_DEFAULT;

  const reqConfig: AxiosRequestConfig = { url, method, timeout, data };
  if (!endpoint) throw new Error("Parameter url diperlukan");

  clientState.requesting = true;

  try {
    const apiResponse: AxiosResponse = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const error: any = new Error("Request Timeout");
        error.code = "E_REQUEST_TIMEOUT";
        error.message = `Request timed out for ${timeout} ms`;

        reject(error);
      }, timeout);
      try {
        const res = axios.request(reqConfig);
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
    result = { ...apiResponse.data, isError: false };

    clientState.requesting = false;

    return result;
  } catch (error: any) {
    clientState.requesting = false;
    result = {
      status: error.response.status,
      error: error.response.data,
      isError: true,
    };
    return result;
  }
};

export default {
  requestAPI,
};
