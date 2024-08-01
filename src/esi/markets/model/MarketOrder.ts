export type MarketOrder = {
  // 持续时间
  duration: number;

  // 是否为买入订单
  is_buy_order: boolean;

  // 下单时间
  issued: string;

  // 位置 ID
  location_id: number;

  // 最小交易量
  min_volume: number;

  // 订单 ID
  order_id: number;

  // 价格
  price: number;

  // 订单范围
  range: string;

  // 下单的太阳系
  system_id: number;

  // 类型 ID
  type_id: number;

  // 剩余交易量
  volume_remain: number;

  // 订单总交易量
  volume_total: number;
};
