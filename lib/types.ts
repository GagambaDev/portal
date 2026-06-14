export const GOOD_STANDING = "Good Standing";
export const NEEDS_ATTENTION = "Needs Attention";
export const ACTION_REQUIRED = "Action Required";

export const PORTFOLIO_PROPERTY_STATUSES = [
  GOOD_STANDING,
  NEEDS_ATTENTION,
  ACTION_REQUIRED,
] as const;

export const PORTFOLIO_STATUS_THRESHOLDS = {
  actionRequiredGoodPanelRatio: 0.75,
  needsAttentionGoodPanelRatio: 0.85,
} as const;

export type PortfolioPropertyStatus =
  | typeof GOOD_STANDING
  | typeof NEEDS_ATTENTION
  | typeof ACTION_REQUIRED;

export interface PortfolioProperty {
  id: string;
  name: string;
  building: string;
  facade: string;
  lastFlightDate: string;
  panelCount: number;
  criticalPanelCount: number;
  dirtyPanelCount: number;
}

export interface PortfolioCardProps {
  property: PortfolioProperty;
}

export interface PortfolioCardGridProps {
  properties: PortfolioProperty[];
}
