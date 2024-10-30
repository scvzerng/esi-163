import type { UniversePosition } from "./UniversePosition";

export interface UniverseStructure {
  /**
   * 结构的完整名称
   */
  name: string;

  /**
   * 拥有该结构的公司的ID
   */
  owner_id: number;

  position: UniversePosition;

  /**
   * 所在的星系ID
   */
  solar_system_id: number;

  /**
   * 类型ID
   */
  type_id?: number;
}
