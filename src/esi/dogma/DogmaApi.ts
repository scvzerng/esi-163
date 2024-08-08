import type { DogmaAttribute, DogmaEffect } from "./model";
import type { HttpClient } from "../../client";

export class DogmaApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * 获取属性条目ID
   */
  attributes() {
    return this.client.get<number[]>("/dogma/attributes");
  }

  /**
   * 获取属性详情
   * @param id
   */
  attribute(id: number) {
    return this.client.get<DogmaAttribute>(`/dogma/attributes/${id}`);
  }

  /**
   * 获取效果ID
   */
  effects() {
    return this.client.get<number[]>(" dogma/effects/");
  }

  /**
   * 获取效果信息
   * @param id
   */
  effect(id: number) {
    return this.client.get<DogmaEffect>(`/dogma/effects/${id}`);
  }
}
