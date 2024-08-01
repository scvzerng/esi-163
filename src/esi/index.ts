import { HttpClient } from "../client";
import { AlliancesApi } from "./alliances/AlliancesApi.ts";
import { UniverseApi } from "./universe/UniverseApi.ts";
import { MarketApi } from "./markets";
import { IndustryApi } from "./industry";
import { CorporationApi } from "./corporations";
import { CharactersApi } from "./characters";
import { DogmaApi } from "./dogma";

export const createEsiSdk = (host: string) => {
  const client = new HttpClient(host);
  return {
    alliances: new AlliancesApi(client),
    universe: new UniverseApi(client),
    markets: new MarketApi(client),
    industry: new IndustryApi(client),
    corporation: new CorporationApi(client),
    character: new CharactersApi(client),
    dogma: new DogmaApi(client),
  };
};
