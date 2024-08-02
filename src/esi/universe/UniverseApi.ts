import { timeoutSystems } from "./model/TimeoutSystems";
import type {
  UniverseCategory,
  UniverseConstellation,
  UniverseGroup,
  UniverseRegion,
  UniverseSystem,
  UniverseType,
} from "./model";
import type { HttpClient } from "../../client";

export class UniverseApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * 获取所有星域ID
   */
  regions() {
    return this.client.get<number[]>("/universe/regions");
  }

  /**
   * 获取星域信息
   * @param id
   */
  region(id: number) {
    return this.client.get<UniverseRegion>(`/universe/regions/${id}`);
  }

  /**
   * 获取所有星座ID
   */
  constellations() {
    return this.client.get<number[]>(`/universe/constellations`);
  }

  /**
   * 获取星座信息
   *
   * @param id
   */
  async constellation(id: number) {
    const constellation = await this.client.get<UniverseConstellation>(
      `/universe/constellations/${id}`
    );
    if (constellation) {
      constellation.systems = constellation.systems.filter(
        (s) => !timeoutSystems.has(s)
      );
    }
    return constellation;
  }

  /**
   * 星系星系
   * @param id
   */
  system(id: number) {
    return this.client.get<UniverseSystem>(`/universe/systems/${id}/`);
  }

  /**
   * 获取所有物品的ID
   */
  async types() {
    const allTypeIds: number[] = [];
    for (let page = 1; page <= 100; page++) {
      const types = await this.client.get<number[]>("/universe/types", {
        page,
      });
      if (!types) {
        break;
      }
      if (types) {
        allTypeIds.push(...types);
        if (types.length < 1000) {
          break;
        }
      }
    }
    return allTypeIds;
  }

  /**
   * 物品信息
   * @param id
   */
  async type(id: number) {
    return this.client.get<UniverseType>(`/universe/types/${id}`);
  }

  /**
   * 获取所有类目
   */
  async categories() {
    return this.client.get<number[]>(`/universe/categories`);
  }

  /**
   * 获取所有类目
   * @param id
   */
  async category(id: number) {
    return this.client.get<UniverseCategory>(`/universe/categories/${id}`);
  }

  /**
   * 获取所有分组ID
   */
  async groups() {
    return this.client.get<number[]>(`/universe/groups`);
  }

  /**
   * 获取分组信息
   * @param id
   */
  async group(id: number) {
    return this.client.get<UniverseGroup>(`/universe/groups/${id}`);
  }
}
