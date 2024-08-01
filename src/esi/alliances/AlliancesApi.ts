import type { Alliance } from "./model/AllianceInfo.ts";
import type { HttpClient } from "../../client";

export class AlliancesApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * 联盟id列表
   * @param datasource
   */
  list(datasource = "serenity") {
    return this.client.get<number[]>("/alliances", { datasource });
  }

  /**
   * 联盟信息
   * @param id
   */
  info(id: number) {
    return this.client.get<Alliance>(`/alliances/${id}`);
  }

  /**
   * 联盟所有成员公司ID
   * @param id
   */
  members(id: number) {
    return this.client.get<number[]>(`/alliances/${id}/corporations`);
  }
}
