export type UniverseGroup = {
  // 类别 ID 整数
  category_id: number;

  // 组 ID 整数
  group_id: number;

  // 名称字符串
  name: string;

  // 是否已发布的布尔值
  published: boolean;

  // 类型数组，可包含最多 10000 个整数
  types: number[];
};
