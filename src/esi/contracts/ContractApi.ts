import type { Contract, ContractItem } from "./model";
import type { HttpClient } from "../../client";
import type { Token } from "../auth/model";

export class ContractApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * 获取个人合同
   * @param accessToken 访问令牌
   * @param playerId 玩家ID
   * @param page 页数
   */
  personalContracts(accessToken: Token, playerId: number, page = 1) {
    return this.client.get<Contract[]>(`/characters/${playerId}/contracts/`, {
      page,
      token: accessToken.access_token,
    });
  }

  /**
   * 获取合同信息
   * @param accessToken
   * @param playerId
   * @param contractId
   */
  contract(accessToken: Token, playerId: number, contractId: number) {
    return this.client.get<ContractItem[]>(
      `/characters/${playerId}/contracts/${contractId}/items`,
      { token: accessToken.access_token }
    );
  }
}
