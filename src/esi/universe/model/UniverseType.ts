interface DogmaAttribute {
  // 属性 ID 整数
  attribute_id: number;

  // 值数
  value: number;
}

interface DogmaEffect {
  // 效应 ID 整数
  effect_id: number;

  // 是否默认布尔值
  is_default: boolean;
}

export type UniverseType = {
  // 容量数字，表示浮点数
  capacity: number;

  // 描述字符串
  description: string;

  // Dogma 属性数组，可以包含最多 1000 个元素
  dogma_attributes: DogmaAttribute[];

  // Dogma 效应数组，可以包含最多 1000 个元素
  dogma_effects: DogmaEffect[];

  // 图形 ID 整数
  graphic_id: number;

  // 组 ID 整数
  group_id: number;

  // 图标 ID 整数
  icon_id: number;

  // 市场组 ID 整数，仅对可以放在市场的类型存在
  market_group_id: number;

  // 质量数字，表示浮点数
  mass: number;

  // 名称字符串
  name: string;

  // 包装体积数字，表示浮点数
  packaged_volume: number;

  // 部分大小整数
  portion_size: number;

  // 是否发布布尔值
  published: boolean;

  // 半径数字，表示浮点数
  radius: number;

  // 类型 ID 整数
  type_id: number;

  // 体积数字，表示浮点数
  volume: number;
};
