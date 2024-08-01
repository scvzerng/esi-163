export type Character = {
  // 角色的联盟 ID，32位整数
  alliance_id?: number;

  // 角色的创建日期，日期时间字符串
  birthday: string;

  // 角色的血脉 ID，32位整数
  bloodline_id: number;

  // 角色的公司 ID，32位整数
  corporation_id: number;

  // 角色描述，字符串
  description?: string;

  // 角色为之战斗的派系的 ID，如果角色被征召参加派系战争，32位整数
  faction_id?: number;

  // 角色性别，字符串
  gender: string;

  // 角色名称，字符串
  name: string;

  // 角色种族 ID，32位整数
  race_id: number;

  // 安全状态，浮点数，范围在 -10 到 10 之间
  security_status?: number;

  // 角色的个人头衔，字符串
  title?: string;
};
