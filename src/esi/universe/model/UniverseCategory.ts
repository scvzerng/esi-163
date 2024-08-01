export type UniverseCategory = {
  // 类别 ID 整数
  category_id: number;

  // 组数组，可包含最多 1000 个整数
  groups: number[];

  // 名称字符串
  name: string;

  // 是否已发布布尔值
  published: boolean;
};
