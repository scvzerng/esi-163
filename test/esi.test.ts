import console from "node:console";
import { assert, describe, expect, test } from "vitest";
import { createEsiSdk } from "./esi";
import { Units } from "./esi/dogma/model";

const longTime = {
  timeout: 60 * 1000 * 60,
};

describe("esi", () => {
  const {
    alliances,
    universe,
    markets,
    industry,
    corporation,
    character,
    dogma,
  } = createEsiSdk("https://ali-esi.evepc.163.com/latest");

  const getFirstAlliance = async () => {
    const result = await alliances.list();
    return result![0];
  };
  describe("联盟", () => {
    test("ID列表", async () => {
      const result = await alliances.list();
      expect(result?.length).greaterThan(0);
    });

    test("联盟信息", async () => {
      const info = await alliances.info(await getFirstAlliance());
      assert(info != null);
    });

    test("联盟成员公司", async () => {
      const result = await alliances.members(await getFirstAlliance());
      expect(result?.length).greaterThan(0);
    });
  });

  describe("宇宙", () => {
    test("星域", async () => {
      const list = await universe.regions();
      expect(list?.length).greaterThan(0);
    });
    test(
      "星域信息",
      async () => {
        const list = await universe.regions();
        for (const regionID of list!) {
          const region = await universe.region(regionID);
          assert(region != null);
          console.log(
            `${region.name}(${region.region_id})-${region.constellations.length}星座`
          );
        }
        console.log(`总星域 ${list!.length}个`);
      },
      longTime
    );
    test("星座", async () => {
      const list = await universe.constellations();
      expect(list?.length).greaterThan(0);
    });

    test(
      "星座信息",
      async () => {
        const list = await universe.constellations();
        const errorSystemIds = [];
        for (const constellationID of list!) {
          const constellation = await universe.constellation(constellationID);
          assert(constellation != null);
          console.log(
            `${constellation.name}(${constellation.constellation_id})-${constellation.systems.length}星系`
          );
          for (const systemId of constellation!.systems) {
            try {
              const system = await universe.system(systemId);
              console.log(
                `\t${system!.name}(${system!.security_status})-${
                  system!.stargates.length
                }星门-${system!.stations?.length ?? 0}空间站-${
                  system!.planets.length
                }行星`
              );
            } catch {
              errorSystemIds.push(systemId);
            }
          }
        }

        console.log(`总星座 ${list!.length}个`);
        console.log(errorSystemIds);
      },
      longTime
    );

    test(
      "物品",
      async () => {
        const types = await universe.types();
        expect(types?.length).greaterThan(0);
      },
      longTime
    );

    test(
      "物品信息",
      async () => {
        const types = await universe.types();
        for (const typeId of types) {
          const type = await universe.type(typeId);
          console.log(`${type!.name}(${typeId})`);
          for (const attr of type?.dogma_attributes ?? []) {
            const attrType = await dogma.attribute(attr.attribute_id);
            if (attrType?.published) {
              const unit = Units[`${attrType.unit_id}`]?.displayName;
              console.log(
                `\t${attrType?.display_name} \t ${
                  attr?.value ?? attrType.default_value
                } ${unit}`
              );
            }
          }
          for (const effect of type?.dogma_effects ?? []) {
            const effectType = await dogma.effect(effect.effect_id);
            if (effectType?.published) {
              console.log(`\t${effectType?.display_name}`);
            }
          }
        }
        expect(types.length).toBeGreaterThan(0);
      },
      longTime
    );

    test("物品目录", async () => {
      const categoryIds = await universe.categories();
      expect(categoryIds?.length).toBeGreaterThan(0);
    });

    test("物品分组", async () => {
      const groupIds = await universe.groups();
      expect(groupIds?.length).toBeGreaterThan(0);
    });

    test(
      "物品分组信息",
      async () => {
        const groupIds = await universe.groups();
        for (const groupId of groupIds!) {
          const group = await universe.group(groupId);
          assert(group !== null);
          console.log(`\t${group!.name}`);
        }
      },
      longTime
    );

    test(
      "物品目录信息",
      async () => {
        const categoryIds = await universe.categories();
        for (const categoryId of categoryIds!) {
          const category = await universe.category(categoryId);
          assert(category !== null);
          console.log(category!.name);
          for (const groupId of category!.groups) {
            const group = await universe.group(groupId);
            console.log(`\t${group!.name}`);
            for (const typeId of group!.types) {
              const type = await universe.type(typeId);
              console.log(`\t\t${type!.name}`);
            }
          }
        }
      },
      longTime
    );
  });

  describe("市场", () => {
    test("市场物品历史每日统计", async () => {
      const marketHistory = await markets.history(10000002, 20);
      expect(marketHistory?.length).toBeGreaterThan(0);
    });
    test(
      "市场当前订单",
      async () => {
        const orders = await markets.orders(10000002);
        for (const order of orders!) {
          const type = await universe.type(order.type_id);
          console.log(
            `${type!.name}(${order.is_buy_order ? "买" : "卖"})-${
              order.price
            }(${order.volume_remain}/${order.volume_total})`
          );
        }
      },
      longTime
    );
    test(
      "市场当前拥有商品(伏尔戈)",
      async () => {
        const typeIds = await markets.types(10000002);
        for (const typeId of typeIds!) {
          const type = await universe.type(typeId);
          assert(type !== null);
          console.log(type!.name);
        }
      },
      longTime
    );
    test(
      "市场当前品类",
      async () => {
        const groupIds = await markets.groups();
        for (const groupId of groupIds!) {
          const group = await markets.group(groupId);
          console.log(group!.name);
        }
      },
      longTime
    );
    test(
      "市场当前价格",
      async () => {
        const prices = await markets.prices();
        for (const price of prices!) {
          const type = await universe.type(price.type_id);
          console.log(
            `${type!.name}-平均${price.average_price ?? "无"}-价格${
              price.adjusted_price
            }`
          );
        }
        expect(prices?.length).toBeGreaterThan(0);
      },
      longTime
    );
  });

  describe(
    "工业",
    () => {
      test("设施", async () => {
        const facilities = await industry.facilities();
        for (const facilitie of facilities!) {
          const type = await universe.type(facilitie.type_id);
          const corp = await corporation.info(facilitie.owner_id);
          let role;
          if (corp) {
            role = await character.info(corp!.ceo_id);
          }
          assert(type !== null);
          console.log(`${type!.name}-${corp?.name}-${role?.name}`);
        }
        expect(facilities?.length).toBeGreaterThan(0);
      });
    },
    longTime
  );
});
