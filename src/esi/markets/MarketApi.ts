import type { MarketOrder, ProductPrice, ProductPriceHistory } from "./model";
import type { UniverseGroup } from "../universe";
import type { HttpClient } from "../../client";

export class MarketApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * 获取商品价格历史
   * @param regionId
   * @param typeId
   */
  history(regionId: number, typeId: number) {
    return this.client.get<ProductPriceHistory[]>(
      `/markets/${regionId}/history`,
      {
        type_id: typeId,
      }
    );
  }

  /**
   * 获取所有商品价格
   */
  prices() {
    return this.client.get<ProductPrice[]>(`/markets/prices`);
  }

  /**
   * 获取市场商品类目ID
   */
  groups() {
    return this.client.get<number[]>(`/markets/groups`);
  }

  /**
   * 获取商品类目信息
   * @param id
   */
  group(id: number) {
    return this.client.get<UniverseGroup>(`/markets/groups/${id}`);
  }

  /**
   * 获取指定星域市场的商品ID
   * @param regionId
   */
  types(regionId: number) {
    return this.client.get<number[]>(`/markets/${regionId}/types`);
  }

  /**
   * 获取指定星域市场的当前订单
   * @param regionId
   */
  async orders(regionId: number) {
    const allOrders: MarketOrder[] = [];
    let page = 1;
    while (true) {
      const orders = await this.client.get<MarketOrder[]>(
        `/markets/${regionId}/orders`,
        { page }
      );
      allOrders.push(...(orders ?? []));
      if ((orders?.length ?? 0) < 1000) {
        break;
      }
      page = page + 1;
    }
    return allOrders;
  }
}
