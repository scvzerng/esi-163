import type { IndustryFacility } from "./model";
import type { HttpClient } from "../../client";

export class IndustryApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * 获取工业设施
   */
  facilities() {
    return this.client.get<IndustryFacility[]>(`/industry/facilities`);
  }
}
