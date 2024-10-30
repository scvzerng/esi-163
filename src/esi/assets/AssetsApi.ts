import type { Asset } from "./model/Asset";
import type { HttpClient } from "../../client";

/**
 * 个人资产接口
 */
export class AssetsApi {
  private readonly client: HttpClient;

  constructor(httpClient: HttpClient) {
    this.client = httpClient;
  }

  /**
   * 获取个人资产列表
   * @param characterId 角色ID
   * @param page 第几页
   * @param token 访问令牌
   * @param datasource 服务器
   */
  list(
    characterId: number,
    page: number,
    token: string,
    datasource = "serenity"
  ) {
    return this.client.get<Asset[]>(`/characters/${characterId}/assets/`, {
      datasource,
      page,
      token,
    });
  }

  /**
   * 获取资产的项目名称
   * @param characterId
   * @param itemIds
   * @param datasource
   * @param token
   */
  async assertNames(
    characterId: number,
    itemIds: number[],
    token: string,
    datasource = "serenity"
  ) {
    const items = await this.client.post<{ item_id: number; name: string }[]>(
      `/characters/${characterId}/assets/names/`,
      itemIds,
      {
        datasource,
        token,
      }
    );
    return (items ?? []).reduce((map, item) => {
      map.set(item.item_id, item.name);
      return map;
    }, new Map<number, string>());
  }

  /**
   * 获取资产位置
   * @param characterId
   * @param itemIds
   * @param token
   * @param datasource
   */
  async assertLocations(
    characterId: number,
    itemIds: number[],
    token: string,
    datasource = "serenity"
  ) {
    const items = await this.client.post<{ item_id: number; name: string }[]>(
      `/characters/${characterId}/assets/locations/`,
      itemIds,
      {
        datasource,
        token,
      }
    );
    return (items ?? []).reduce((map, item) => {
      map.set(item.item_id, item);
      return map;
    }, new Map<number, any>());
  }
}
