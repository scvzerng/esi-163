import type { UniversePosition } from "./UniversePosition";

export type UniversePlanet = {
  name: string;
  planet_id: number;
  position: UniversePosition;
  system_id: number;
  type_id: number;
};
