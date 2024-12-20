import type {
  UniverseCategory,
  UniverseConstellation,
  UniverseGroup,
  UniversePlanet,
  UniverseRegion,
  UniverseStation,
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
    return this.client.get<UniverseConstellation>(
      `/universe/constellations/${id}`
    );
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
    const allGroupIds: number[] = [];
    for (let page = 1; page <= 100; page++) {
      const groups = await this.client.get<number[]>("/universe/groups", {
        page,
      });
      if (!groups) {
        break;
      }
      if (groups) {
        allGroupIds.push(...groups);
        if (groups.length < 1000) {
          break;
        }
      }
    }
    return allGroupIds;
  }

  /**
   * 获取分组信息
   * @param id
   */
  async group(id: number) {
    return this.client.get<UniverseGroup>(`/universe/groups/${id}`);
  }

  /**
   * 获取空间站信息
   * @param id
   */
  async station(id: number) {
    return this.client.get<UniverseStation>(`/universe/stations/${id}`);
  }

  /**
   * 根据指定类型获取结构 ID 列表。
   *
   * @param {（“市场” |“manufacturing basic”）} type - 要为其获取 ID 的结构类型。
   * @return {Promise<number[]>} 解析为结构 ID 数组的 Promise。
   */
  async structures(type: "market" | "manufacturing basic") {
    return this.client.get<number[]>(`/universe/structures`, {
      filter: type,
    });
  }

  /**
   * 获取给定结构 ID 的结构详细信息。
   *
   * @param {number} id - 要获取其详细信息的结构的 ID。
   * @param {string} token - 用于 API 调用的身份验证令牌。
   * @return {Promise<number[]>} 一个 Promise，它解析为表示结构细节的数字数组。
   */
  async structure(id: number, token: string) {
    return this.client.get<number[]>(`/universe/structures/${id}`, {
      token,
    });
  }

  /**
   * 获取行星详情
   * @param id
   */
  async planet(id: number) {
    return this.client.get<UniversePlanet>(`/universe/planets/${id}/`);
  }
}
