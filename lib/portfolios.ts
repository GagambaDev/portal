import type { PortfolioProperty } from "@/lib/types";
import { createFacadeGrid } from "@/lib/facade";

// We only care about the dirty or critical panels. Everything else can be
// defaulted to "good". This works well for square/rectangular window set ups,
// but could struggle with none square/rectangular set ups like a triangle or
// something. 
export const portfolios: PortfolioProperty[] = [
  {
    building_id: 1,
    company_id: "MGM Resorts International",
    property_id: "MGM Grand",
    name: "MGM Grand Las Vegas",
    building: "North Tower",
    facade: "North Facade",
    lastFlightDate: "2026-04-12",
    facadeGrid: createFacadeGrid({
      rows: 10,
      columns: 16,
      dirtyPanels: [[1, 8], [3, 4], [5, 12]],
    }),
  },
  {
    building_id: 2,
    company_id: "MGM Resorts International",
    property_id: "The Cosmopolitan",
    name: "The Cosmopolitan",
    building: "West Residences",
    facade: "West Facade",
    lastFlightDate: "2026-04-09",
    facadeGrid: createFacadeGrid({
      rows: 13,
      columns: 18,
      // Store the coordinates of the dirty windows
      dirtyPanels: [
        [0, 4], [0, 11],
        [1, 2], [1, 13],
        [2, 6], [2, 15],
        [3, 10],
        [4, 4], [4, 13],
        [5, 1], [5, 10],
        [6, 6],
        [7, 2], [7, 13],
        [8, 8], [8, 15],
        [9, 4], [9, 11],
        [11, 10],
        [12, 2], [12, 15],
      ],
      // Store the coordinates of the critical windows
      criticalPanels: [[4, 8], [6, 15]],
    }),
  },
  {
    building_id: 3,
    company_id: "MGM Resorts International",
    property_id: "ARIA",
    name: "ARIA Resort & Casino",
    building: "Sky Suites",
    facade: "East Facade",
    lastFlightDate: "2026-04-14",
    facadeGrid: createFacadeGrid({
      rows: 15,
      columns: 20,
      dirtyPanels: [
        [0, 2], [0, 11],
        [1, 7], [1, 16],
        [2, 4], [2, 9], [2, 14],
        [3, 1], [3, 18],
        [4, 7], [4, 16],
        [5, 4], [5, 13],
        [6, 10],
        [7, 2], [7, 9],
        [8, 12],
        [9, 4], [9, 16],
        [10, 8], [10, 17],
        [12, 2], [12, 7], [12, 12],
        [13, 9], [13, 18],
        [14, 4], [14, 13],
      ],
      criticalPanels: [
        [0, 6], [0, 15],
        [1, 2], [1, 11],
        [3, 5], [3, 13],
        [4, 8],
        [5, 3], [5, 8], [5, 17],
        [7, 6], [7, 15],
        [8, 1], [8, 18],
        [9, 8],
        [10, 12],
        [11, 3], [11, 15],
        [13, 2], [13, 15],
        [14, 8],
      ],
    }),
  },
  {
    building_id: 4,
    company_id: "Caesars Entertainment",
    property_id: "Caesars Palace",
    name: "Caesars",
    building: "North Tower",
    facade: "North Facade",
    lastFlightDate: "2026-04-12",
    facadeGrid: createFacadeGrid({
      rows: 10,
      columns: 16,
      dirtyPanels: [[1, 8], [3, 4], [5, 12]],
    }),
  },
];

export async function getPortfolios() {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return portfolios;
}

export async function getPortfolioById(id: number) {
  return portfolios.find((portfolio) => portfolio.building_id === id) ?? null;
}
