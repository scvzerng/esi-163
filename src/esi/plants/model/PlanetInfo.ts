// 行星相关信息
export interface PlanetInfo {
    /**
     * 最后更新时间
     * 类型: string ($date-time)
     */
    last_update: string;

    /**
     * 行星上的针脚数
     * 类型: integer ($int32)
     * 最小值: 1
     */
    num_pins: number;

    /**
     * 所有者ID
     * 类型: integer ($int32)
     */
    owner_id: number;

    /**
     * 行星ID
     * 类型: integer ($int32)
     */
    planet_id: number;

    /**
     * 行星类型
     * 类型: string
     * 枚举: ["类型1", "类型2", ..., "类型8"]
     */
    planet_type: string;

    /**
     * 所属的太阳系ID
     * 类型: integer ($int32)
     */
    solar_system_id: number;

    /**
     * 升级等级
     * 类型: integer ($int32)
     * 最小值: 0
     * 最大值: 5
     */
    upgrade_level: number;
}