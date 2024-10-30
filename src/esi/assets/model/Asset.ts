import type { UniversePosition } from "../../universe/model/UniversePosition";
import type { UniverseType } from "../../universe/model";

export interface Asset {
  // 是否为蓝图副本
  is_blueprint_copy: boolean;

  // 是否为单例
  is_singleton: boolean;

  // 物品ID
  item_id: number;

  // 位置标志
  location_flag: string; // Example values: Array [ 85 ]

  // 位置ID
  location_id: number;

  position?: UniversePosition;

  // 位置类型
  location_type: "station" | "solar_system" | "item" | "other";

  // 数量
  quantity: number;

  // 类型ID
  type_id: number;

  type: UniverseType;

  parent?: Asset;
  children?: Asset[];
}
