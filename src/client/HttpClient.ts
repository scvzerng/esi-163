import axios, { AxiosError } from "axios";
import { ESIError } from "./error";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

export class HttpClient {
  private host: string;

  constructor(host: string) {
    this.host = host;
  }

  async post<RS>(
    url: string,
    data?: Record<string, any | undefined>,
    params?: Record<string, any | undefined>,
    headers?: Record<string, any | undefined>
  ) {
    return this.request<Record<string, any | undefined>, RS>({
      method: "POST",
      url,
      params,
      data,
      headers,
    });
  }

  async get<RS>(
    url: string,
    params?: Record<string, string | number>,
    headers?: Record<string, never>
  ) {
    return this.request<never, RS>({
      method: "GET",
      url,
      params,
      headers,
    });
  }

  private async request<T, R>(config: AxiosRequestConfig<T>) {
    try {
      const appendHeaders: Record<string, string | undefined> = {};

      const response = await axios.request<T, AxiosResponse<R>>({
        url: config.url?.startsWith("http")
          ? config.url
          : `${this.host}${config.url}`,
        method: config.method,
        params: { ...(config.params ?? {}), language: "zh" },
        data: config.data,
        headers: {
          "Content-Type": "application/json",
          ...appendHeaders,
          ...(config.headers ?? {}),
        },
      });
      return response.data;
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 404) {
          return null;
        }
        throw new ESIError(e.response?.data.error, e.code);
      }
    }
  }
}
