export type DogmaAttribute = {
  // 属性ID，32位整数
  attribute_id: number;

  // 默认值，浮点数
  default_value?: number;

  // 描述，字符串
  description?: string;

  // 显示名称，字符串
  display_name?: string;

  // 高是否好，布尔值
  high_is_good?: boolean;

  // 图标ID，32位整数
  icon_id?: number;

  // 名称，字符串
  name?: string;

  // 是否已发布，布尔值
  published?: boolean;

  // 是否可堆叠，布尔值
  stackable?: boolean;

  // 单位ID，32位整数
  unit_id?: number;
};
