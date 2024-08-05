/**
 * RefreshToken
 */
export type Token = {
  access_token: string; //访问令牌
  expires_in: number; //过期时间（秒）
  token_type: "Bearer"; //令牌类型
  refresh_token: string; //续期令牌
};
/**
 * 通过token解码的用户信息
 */

const CHARACTER_SLOT = 2;
export class AuthUser {
  /**
   * 玩家名称
   */
  name: string;
  /**
   * 玩家ID
   */
  id: number;
  /**
   * 过期时间
   */
  exp: number;

  constructor(name: string, sub: string, exp: number) {
    this.name = name;
    this.exp = exp;
    this.id = Number(sub.split(":")[CHARACTER_SLOT]);
  }
}
