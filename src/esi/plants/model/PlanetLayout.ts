// 行星链接信息
interface PlanetLink {
  /**
   * 目标针脚 ID
   * 类型: integer ($int64)
   */
  destination_pin_id: number;

  /**
   * 链接等级
   * 类型: integer ($int32)
   * 最大值: 10
   * 最小值: 0
   */
  link_level: number;

  /**
   * 来源针脚 ID
   * 类型: integer ($int64)
   */
  source_pin_id: number;
}
// 头部信息
export interface Head {
  /**
   * 头部 ID
   * 类型: integer ($int32)
   * 最大值: 9
   * 最小值: 0
   */
  head_id: number;

  /**
   * 纬度
   * 类型: number ($float)
   */
  latitude: number;

  /**
   * 经度
   * 类型: number ($float)
   */
  longitude: number;
}
// 针脚内容信息
export interface PinContent {
  /**
   * 数量
   * 类型: integer ($int64)
   */
  amount: number;

  /**
   * 类型 ID
   * 类型: integer ($int32)
   */
  type_id: number;
}

// 提取器细节
export interface ExtractorDetails {
  /**
   * 周期时间（秒）
   * 类型: integer ($int32)
   */
  cycle_time: number;

  /**
   * 头部半径
   * 类型: number ($float)
   */
  head_radius: number;

  /**
   * 头部信息数组
   * 最大项数: 10
   */
  heads: Head[];

  /**
   * 产品类型 ID
   * 类型: integer ($int32)
   */
  product_type_id: number;

  /**
   * 每周期数量
   * 类型: integer ($int32)
   */
  qty_per_cycle: number;
}
// 工厂细节
export interface FactoryDetails {
  /**
   * 方案 ID
   * 类型: integer ($int32)
   */
  schematic_id: number;
}
// 行星针脚信息
export interface PlanetPin {
  /**
   * 针脚内容信息数组
   * 最大项数: 90
   */
  contents?: PinContent[];

  /**
   * 过期时间
   * 类型: string ($date-time)
   */
  expiry_time?: string;

  /**
   * 提取器细节
   */
  extractor_details?: ExtractorDetails;

  /**
   * 工厂细节
   */
  factory_details?: FactoryDetails;

  /**
   * 安装时间
   * 类型: string ($date-time)
   */
  install_time?: string;

  /**
   * 最后一个周期开始时间
   * 类型: string ($date-time)
   */
  last_cycle_start?: string;

  /**
   * 纬度
   * 类型: number ($float)
   */
  latitude: number;

  /**
   * 经度
   * 类型: number ($float)
   */
  longitude: number;

  /**
   * 针脚 ID
   * 类型: integer ($int64)
   */
  pin_id: number;

  /**
   * 模式 ID
   * 类型: integer ($int32)
   */
  schematic_id?: number;

  /**
   * 类型 ID
   * 类型: integer ($int32)
   */
  type_id: number;
}
// 行星路线信息
export interface PlanetRoute {
  /**
   * 内容类型 ID
   * 类型: integer ($int32)
   */
  content_type_id: number;

  /**
   * 目标针脚 ID
   * 类型: integer ($int64)
   */
  destination_pin_id: number;

  /**
   * 数量
   * 类型: number ($float)
   */
  quantity: number;

  /**
   * 路线 ID
   * 类型: integer ($int64)
   */
  route_id: number;

  /**
   * 来源针脚 ID
   * 类型: integer ($int64)
   */
  source_pin_id: number;

  /**
   * 路径点（针脚 ID）数组
   * 最大项数: 5
   */
  waypoints?: number[];
}
export class PlanetLayout {
  /**
   * 行星的链接信息数组
   * 最大项数: 500
   */
  links!: PlanetLink[];

  /**
   * 行星上的针脚信息数组
   * 最大项数: 100
   */
  pins!: PlanetPin[];

  /**
   * 行星上的路线信息数组
   * 最大项数: 1000
   */
  routes!: PlanetRoute[];
}
