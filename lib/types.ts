export const GOOD_STANDING = "Good Standing";
export const NEEDS_ATTENTION = "Needs Attention";
export const ACTION_REQUIRED = "Action Required";

export const PORTFOLIO_PROPERTY_STATUSES = [
  GOOD_STANDING,
  NEEDS_ATTENTION,
  ACTION_REQUIRED,
] as const;

export const PORTFOLIO_STATUS_THRESHOLDS = {
  actionRequiredGoodPanelRatio: 0.75, // If less than 75% of panels clean set status to ACTION_REQUIRED
  needsAttentionGoodPanelRatio: 0.85, // If less than 85% of panels clean set status to NEEDS_ATTENTION
} as const;

export type PortfolioPropertyStatus =
  | typeof GOOD_STANDING
  | typeof NEEDS_ATTENTION
  | typeof ACTION_REQUIRED;

export const PANEL_STATUS_GOOD = "good";
export const PANEL_STATUS_DIRTY = "dirty";
export const PANEL_STATUS_CRITICAL = "critical";

export const PANEL_COLOR_GOOD = "bg-emerald-400";
export const PANEL_COLOR_DIRTY = "bg-amber-300";
export const PANEL_COLOR_CRITICAL = "bg-red-500";

export type FacadePanelStatus =
  | typeof PANEL_STATUS_GOOD
  | typeof PANEL_STATUS_DIRTY
  | typeof PANEL_STATUS_CRITICAL;

export interface PortfolioPanelStats {
  panelCount: number;
  dirtyPanelCount: number;
  criticalPanelCount: number;
}

export type FacadePanelCoordinate = [number, number];

export interface FacadeGrid {
  rows: number;
  columns: number;
  dirtyPanels: FacadePanelCoordinate[];
  criticalPanels: FacadePanelCoordinate[];
}

export interface PortfolioProperty { 
  building_id: string;
  company_id: string;
  property_id: string;
  name: string;
  building: string;
  facade: string;
  lastFlightDate: string;
  facadeGrid: FacadeGrid;
}

export interface PortfolioCardProps {
  property: PortfolioProperty;
}

export interface PortfolioCardGridProps {
  properties: PortfolioProperty[];
}
