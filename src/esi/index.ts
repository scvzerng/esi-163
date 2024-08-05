import { HttpClient } from "../client";
import { AlliancesApi } from "./alliances";
import { UniverseApi } from "./universe";
import { MarketApi } from "./markets";
import { IndustryApi } from "./industry";
import { CorporationApi } from "./corporations";
import { CharactersApi } from "./characters";
import { DogmaApi } from "./dogma";
import { AuthApi } from "./auth";
import { ContractApi } from "./contracts";

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
    auth: new AuthApi(client),
    contracts: new ContractApi(client),
  };
};
