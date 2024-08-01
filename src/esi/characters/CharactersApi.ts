import type { Character } from "./model";
import type { HttpClient } from "../../client";

/**
 * 个人角色
 */
export class CharactersApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * 获取角色信息
   * @param id
   */
  info(id: number) {
    return this.client.get<Character>(`/characters/${id}`);
  }
}
