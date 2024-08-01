import type { UniversePosition } from "./UniversePosition.ts";

type Planet = {
  // 小行星带数组，可以包含最多 100 个元素
  asteroid_belts: number[];

  // 月亮数组，可以包含最多 1000 个元素
  moons: number[];

  // 行星 ID 整数
  planet_id: number;
};
export type UniverseSystem = {
  // 所在星座的ID
  constellation_id: number;

  // 名称字符串
  name: string;

  // 行星数组，可以包含最多 1000 个元素
  planets: Planet[];

  // 位置
  position: UniversePosition;

  // 安全等级字符串
  security_class: string;

  // 安全状态数字
  security_status: number;

  // 星星的ID
  star_id: number;

  // 星门数组，可以包含最多 25 个元素
  stargates: number[];

  // 空间站数组，可以包含最多 25 个元素
  stations: number[];

  // 系统ID整数
  system_id: number;
};
