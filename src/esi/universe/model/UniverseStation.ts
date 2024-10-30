// 定义 Services 枚举类型
import type { UniversePosition } from "./UniversePosition";

/**
 * 服务枚举类型
 */
enum Services {
  /**
   * 悬赏任务
   */
  BOUNTY_MISSIONS = "bounty-missions",

  /**
   * 暗杀任务
   */
  ASSASINATION_MISSIONS = "assasination-missions",

  /**
   * 快递任务
   */
  COURIER_MISSIONS = "courier-missions",

  /**
   * 星际快递
   */
  INTERBUS = "interbus",

  /**
   * 再加工厂
   */
  REPROCESSING_PLANT = "reprocessing-plant",

  /**
   * 精炼厂
   */
  REFINERY = "refinery",

  /**
   * 市场
   */
  MARKET = "market",

  /**
   * 黑市
   */
  BLACK_MARKET = "black-market",

  /**
   * 证券交易所
   */
  STOCK_EXCHANGE = "stock-exchange",

  /**
   * 克隆
   */
  CLONING = "cloning",

  /**
   * 手术
   */
  SURGERY = "surgery",

  /**
   * 基因治疗
   */
  DNA_THERAPY = "dna-therapy",

  /**
   * 修理设施
   */
  REPAIR_FACILITIES = "repair-facilities",

  /**
   * 工厂
   */
  FACTORY = "factory",

  /**
   * 实验室
   */
  LABRATORY = "labratory",

  /**
   * 赌博
   */
  GAMBLING = "gambling",

  /**
   * 安装设施
   */
  FITTING = "fitting",

  /**
   * 油漆店
   */
  PAINTSHOP = "paintshop",

  /**
   * 新闻
   */
  NEWS = "news",

  /**
   * 仓储
   */
  STORAGE = "storage",

  /**
   * 保险
   */
  INSURANCE = "insurance",

  /**
   * 停靠
   */
  DOCKING = "docking",

  /**
   * 办公室租赁
   */
  OFFICE_RENTAL = "office-rental",

  /**
   * 跳跃克隆设施
   */
  JUMP_CLONE_FACILITY = "jump-clone-facility",

  /**
   * 忠诚点商店
   */
  LOYALTY_POINT_STORE = "loyalty-point-store",

  /**
   * 海军办公室
   */
  NAVY_OFFICES = "navy-offices",

  /**
   * 安全办公室
   */
  SECURITY_OFFICES = "security-offices",
}

export interface UniverseStation {
  /**
   * 最大可停靠船只体积
   */
  max_dockable_ship_volume: number;

  /**
   * 站点名称
   */
  name: string;

  /**
   * 办公室租金成本
   */
  office_rental_cost: number;

  /**
   * 控制该站的公司ID
   */
  owner: number;

  position: UniversePosition;

  /**
   * 种族ID
   */
  race_id: number;

  /**
   * 再加工效率
   */
  reprocessing_efficiency: number;

  /**
   * 再加工站收费
   */
  reprocessing_stations_take: number;

  /**
   * @maxItems 30
   * 服务列表
   */
  services: Services[];

  /**
   * 空间站ID
   */
  station_id: number;

  /**
   * 该站所在的太阳系
   */
  system_id: number;

  /**
   * 类型ID
   */
  type_id: number;
}
