import type { Corporation } from "./model";
import type { HttpClient } from "../../client";

const errorIds = new Set([1000127]);

/**
 * 公司接口
 */
export class CorporationApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * 获取公司信息
   * @param id
   */
  info(id: number) {
    if (errorIds.has(id)) return null;
    return this.client.get<Corporation>(`/corporations/${id}`);
  }
}
