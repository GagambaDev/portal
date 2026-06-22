import type { Building } from "./types";
import { BUILDINGS } from "./consts";

export function getBuilding(id: string): Building | null {
    return BUILDINGS[id] ?? null;
}
