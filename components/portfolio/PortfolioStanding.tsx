/**
 * This calculates the percentage of dirty and critical panels to the total
 * number of panels to assign it a standing and percentage of good panels.
 * It returns a goodPanelPercentage that is not used at the moment, but 
 * could be used for issue A1 in the future if needed.
 */

import {
  ACTION_REQUIRED,
  GOOD_STANDING,
  NEEDS_ATTENTION,
  PORTFOLIO_STATUS_THRESHOLDS,
  type PortfolioProperty,
} from "@/lib/types"
import { getFacadePanelStats } from "@/lib/facade"

interface PortfolioStandingProps {
  property: PortfolioProperty
}

// This function will return 3 options: ACTION_REQUIRED, NEEDS_ATTENTION, or
// GOOD_STANDING. It will use the portfolio thresholds to determine it.
function getStanding(property: PortfolioProperty) {
  const { panelCount, criticalPanelCount, dirtyPanelCount } =
    getFacadePanelStats(property.facadeGrid)

  if (panelCount <= 0) {
    return {
      standing: ACTION_REQUIRED,
      goodPanelPercentage: 0,
    }
  }

  const badPanels = criticalPanelCount + dirtyPanelCount;
  const goodPanelRatio = (panelCount - badPanels) / panelCount;
  const goodPanelPercentage = Math.round(goodPanelRatio * 100);

  // If the ratio is less than the acceptable limit return ACTION_REQUIRED
  if (goodPanelRatio < PORTFOLIO_STATUS_THRESHOLDS.actionRequiredGoodPanelRatio) {
    return {
      standing: ACTION_REQUIRED,
      goodPanelPercentage,
    }
  }

  // If the ratio is less than the needs attention limit return NEEDS_ATTENTION
  if (goodPanelRatio < PORTFOLIO_STATUS_THRESHOLDS.needsAttentionGoodPanelRatio) {
    return {
      standing: NEEDS_ATTENTION,
      goodPanelPercentage,
    }
  }

  // If we reach this point than the facade/property is in good standing
  return {
    standing: GOOD_STANDING,
    goodPanelPercentage,
  }
}

// Display the standing and panel percentage if wanted.
// At the moment not used.
export default function PortfolioStanding({ property }: PortfolioStandingProps) {
  const { standing, goodPanelPercentage } = getStanding(property)

  return (
    <p>
      {standing} - {goodPanelPercentage}% good panels
    </p>
  );
}
