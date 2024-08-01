export type DogmaEffect = {
  // 效果的描述
  description?: string;

  // 是否不允许自动重复
  disallow_auto_repeat?: boolean;

  // 放电的属性 ID
  discharge_attribute_id?: number;

  // 效果的显示名称
  display_name?: string;

  // 持续时间的属性 ID
  duration_attribute_id?: number;

  // 效果类别
  effect_category?: number;

  // 效果 ID
  effect_id: number;

  // 电子机会
  electronic_chance?: boolean;

  // 衰落的属性 ID
  falloff_attribute_id?: number;

  // 图标 ID
  icon_id?: number;

  // 是否为援助
  is_assistance?: boolean;

  // 是否为攻击
  is_offensive?: boolean;

  // 是否在 wrap 安全
  is_warp_safe?: boolean;

  // 修饰符数组
  modifiers?: DogmaEffectModifier[];

  // 名称
  name?: string;

  // 后放表达式
  post_expression?: number;

  // 预放表达式
  pre_expression?: number;

  // 是否发布
  published?: boolean;

  // 范围的属性 ID
  range_attribute_id?: number;

  // 范围机会
  range_chance?: boolean;

  // 追踪速度的属性 ID
  tracking_speed_attribute_id?: number;
};

export type DogmaEffectModifier = {
  // 区域
  domain: string;

  // 效果 ID
  effect_id: number;

  // 函数
  func: string;

  // 修改的属性 ID
  modified_attribute_id: number;

  // 修改的属性 ID
  modifying_attribute_id: number;

  // 运算符
  operator: number;
};
