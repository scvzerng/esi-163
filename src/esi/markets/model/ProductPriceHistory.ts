export type ProductPriceHistory = {
  // 平均数字
  average: number;

  //日期
  date: string;

  // 最高数字
  highest: number;

  // 最低数字
  lowest: number;

  // 当天发生的订单总数
  order_count: number;

  // 总数
  volume: number;
};
