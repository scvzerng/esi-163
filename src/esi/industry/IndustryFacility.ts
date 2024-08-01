export type IndustryFacility = {
  // 设施的 ID，64位整数
  facility_id: number;

  // 设施的所有者，32位整数
  owner_id: number;

  // 设施所在的区域 ID，32位整数
  region_id: number;

  // 设施所在的太阳能系统 ID，32位整数
  solar_system_id: number;

  // 设施征收的税款，浮点数
  tax: number;

  // 设施的类型 ID，32位整数
  type_id: number;
};
