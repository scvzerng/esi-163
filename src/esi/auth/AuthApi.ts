import { decode } from "js-base64";
import { AuthUser } from "./model";
import type { Token } from "./model";
import type { HttpClient } from "../../client";
const AUTH_URL = `https://login.evepc.163.com/v2/oauth/authorize`;

export class AuthApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * 获取授权地址
   * @param grants
   */
  async authUrl(grants: string[]): Promise<string> {
    const params = new URLSearchParams();
    params.append("response_type", "code");
    params.append(
      "redirect_uri",
      "https://ali-esi.evepc.163.com/ui/oauth2-redirect.html"
    );
    params.append("client_id", "bc90aa496a404724a93f41b4f4e97761");
    params.append("scope", grants.join(" "));
    params.append("device_id", "eims");
    params.append("state", "hilltec");
    const queryParams = params.toString();
    return `${AUTH_URL}?${queryParams}`;
  }

  /**
   * 根据esi获取令牌
   * @param esiCode
   */
  async getTokenFromESICode(esiCode: string) {
    return this.client.post<Token>(
      "https://login.evepc.163.com/v2/oauth/token",
      {
        grant_type: "authorization_code",
        code: esiCode,
        client_id: "bc90aa496a404724a93f41b4f4e97761",
      },
      {},
      { "Content-Type": "application/x-www-form-urlencoded" }
    );
  }

  /**
   * 根据refreshToken获取令牌
   * @param refreshToken
   */
  async getTokenFromRefreshToken(refreshToken: string) {
    return this.client.post<Token>(
      "https://login.evepc.163.com/v2/oauth/token",
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: "bc90aa496a404724a93f41b4f4e97761",
      },
      {},
      { "Content-Type": "application/x-www-form-urlencoded" }
    );
  }

  /**
   * 获取token中包含的用户信息
   * @param token
   */
  getTokenInfo(token: Token) {
    const payloadJSON: { name: string; exp: number; sub: string } = JSON.parse(
      decode(token.access_token.split(".")[1])
    );

    return new AuthUser(payloadJSON.name, payloadJSON.sub, payloadJSON.exp);
  }
}
