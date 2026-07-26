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

  if (goodPanelRatio < PORTFOLIO_STATUS_THRESHOLDS.actionRequiredGoodPanelRatio) {
    return {
      standing: ACTION_REQUIRED,
      goodPanelPercentage,
    }
  }

  if (goodPanelRatio < PORTFOLIO_STATUS_THRESHOLDS.needsAttentionGoodPanelRatio) {
    return {
      standing: NEEDS_ATTENTION,
      goodPanelPercentage,
    }
  }

  return {
    standing: GOOD_STANDING,
    goodPanelPercentage,
  }
}

export default function PortfolioStanding({ 
  property 
}: PortfolioStandingProps) {
  const { standing, goodPanelPercentage } = getStanding(property)

  return (
    <p>
      {standing} - {goodPanelPercentage}% good panels
    </p>
  );
}
