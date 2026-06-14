import type { PortfolioProperty } from "@/lib/types";

export const portfolios: PortfolioProperty[] = [
  {
    id: "mgm-grand-las-vegas",
    name: "MGM Grand Las Vegas",
    building: "North Tower",
    facade: "North Facade",
    lastFlightDate: "2026-04-12",
    panelCount: 428,
    criticalPanelCount: 2,
    dirtyPanelCount: 37,
  },
  {
    id: "the-cosmopolitan",
    name: "The Cosmopolitan",
    building: "West Residences",
    facade: "West Facade",
    lastFlightDate: "2026-04-09",
    panelCount: 612,
    criticalPanelCount: 10,
    dirtyPanelCount: 100,
  },
  {
    id: "aria-resort-casino",
    name: "ARIA Resort & Casino",
    building: "Sky Suites",
    facade: "East Facade",
    lastFlightDate: "2026-04-14",
    panelCount: 507,
    criticalPanelCount: 10,
    dirtyPanelCount: 120,
  },
];

export async function getPortfolios() {
  return portfolios;
}

export async function getPortfolioById(id: string) {
  return portfolios.find((portfolio) => portfolio.id === id) ?? null;
}
