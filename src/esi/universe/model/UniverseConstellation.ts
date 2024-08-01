import type { UniversePosition } from "./UniversePosition.ts";

export type UniverseConstellation = {
  // 星座ID
  constellation_id: number;

  // 名称
  name: string;

  // 位置
  position: UniversePosition;

  // 此星座所在的区域
  region_id: number;

  // 星系
  systems: number[];
};
