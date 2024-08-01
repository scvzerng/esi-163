export type Corporation = {
  // 联盟的 ID，如果公司是联盟的成员的话，32位整数
  alliance_id?: number;

  // CEO 的 ID，32位整数
  ceo_id: number;

  // 创建者的 ID，32位整数
  creator_id: number;

  // 成立日期，日期时间字符串
  date_founded: string;

  // 公司描述，字符串
  description: string;

  // 派系 ID，32位整数
  faction_id?: number;

  // 总部站点的 ID，32位整数
  home_station_id?: number;

  // 成员数量，32位整数
  member_count: number;

  // 公司的全名，字符串
  name: string;

  // 公司的股份，64位整数
  shares?: number;

  // 税率，浮点数，范围在 0 到 1 之间
  tax_rate: number;

  // 公司的缩写名，字符串
  ticker: string;

  // 公司网站的 URL，字符串
  url?: string;

  // 是否有资格发动战争，布尔值
  war_eligible?: boolean;
};
