import type { PlanetLayout } from "./model/PlanetLayout";
import type { PlanetInfo } from "./model";
import type { HttpClient } from "../../client";

export class PlantApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * 行星列表
   * @param playerId
   * @param token
   */
  list(playerId: number, token: string) {
    return this.client.get<PlanetInfo[]>(`/characters/${playerId}/planets/`, {
      token,
      datasource: "serenity",
    });
  }

  /**
   * 行星布局
   * @param playerId
   * @param planetId
   * @param token
   */
  layout(playerId: number, planetId: number, token: string) {
    return this.client.get<PlanetLayout>(
      `/characters/${playerId}/planets/${planetId}/`,
      { token }
    );
  }
}
