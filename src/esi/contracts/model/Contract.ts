export type ContractAvailability =
  | "public"
  | "personal"
  | "corporation"
  | "alliance";

export type ContractStatus =
  | "outstanding"
  | "in_progress"
  | "finished_issuer"
  | "finished_contractor"
  | "finished"
  | "cancelled"
  | "rejected"
  | "failed"
  | "deleted"
  | "reversed";

export type ContractType =
  | "unknown"
  | "item_exchange"
  | "auction"
  | "courier"
  | "loan";

export type Contract = {
  // 接受合同的人
  acceptor_id: number;
  // 分配合同的ID，可以是联盟，公司或角色ID
  assignee_id: number;
  // 合同的可用性
  availability: ContractAvailability;
  // 买断价（仅限拍卖）
  buyout?: number;
  // 抵押价格（仅限快递）
  collateral?: number;
  // 合同ID
  contract_id: number;
  // 合同确认日期
  date_accepted?: string;
  // 合同完成日期
  date_completed?: string;
  // 合同的到期日期
  date_expired: string;
  // 合同的创立日期
  date_issued: string;
  // 完成合同需要的天数
  days_to_complete?: number;
  // 结束地点ID（仅限快递合同）
  end_location_id?: number;
  // 如果合同是以发行人的公司名义发出的，则为true
  for_corporation: boolean;
  // 发行人的公司ID
  issuer_corporation_id: number;
  // 发行人的角色ID
  issuer_id: number;
  // 合同价格（用于物品交换和拍卖）
  price?: number;
  // 合同报酬（仅限快递）
  reward?: number;
  // 开始地点ID（仅限快递合同）
  start_location_id?: number;
  // 合同的状态
  status: ContractStatus;
  // 合同的标题
  title?: string;
  // 合同类型
  type: ContractType;
  // 合同中物品的体积
  volume?: number;
};
/**
 * 合同物品
 */
export type ContractItem = {
  // 如果合同的发起人已经提交了这个物品，那么为true；如果发起人在合同中要求这个物品，那么为false
  is_included: boolean;
  // 是否为单例对象
  is_singleton: boolean;
  // 物品堆叠的数量
  quantity: number;
  // "-1"表示该物品为单例（即不可堆叠）。如果物品恰好是一个蓝图，那么"-1"代表原始蓝图，"-2"表示蓝图复制品
  raw_quantity?: number;
  // 物品的唯一ID
  record_id: number;
  // 物品的类型ID
  type_id: number;
};
