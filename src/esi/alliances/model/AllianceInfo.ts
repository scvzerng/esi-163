export type Alliance = {
  // 创建联盟的公司 ID
  creator_corporation_id: number;

  // 创建联盟的角色 ID
  creator_id: number;

  // 联盟创建的日期
  date_founded: string; // 使用 Date 类型如果需要处理日期时间

  // 执行公司 ID，如果联盟未关闭此项存在
  executor_corporation_id?: number;

  // 此联盟代表的派系 ID，如果联盟已加入派系战争此项存在
  faction_id?: number;

  // 联盟的全名
  name: string;

  // 联盟的简称
  ticker: string;
};
