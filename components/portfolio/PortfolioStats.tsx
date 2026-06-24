/**
 * This displays the window stats of a property.
 */

import type { PortfolioProperty } from "@/lib/types"
import { getFacadePanelStats } from "@/lib/facade"

interface PortfolioStatsProps {
  property: PortfolioProperty
}

export default function PortfolioStats({ property }: PortfolioStatsProps) {
  const { panelCount, dirtyPanelCount, criticalPanelCount } = getFacadePanelStats(property.facadeGrid)

  return (
    <>
      <div className="flex min-w-0 flex-col items-center px-2 py-3 text-center">
        <p className="text-[18px] leading-none font-bold tabular-nums text-ink">
          {panelCount.toLocaleString()}
        </p>
        <p className="mt-1 whitespace-nowrap text-[11px] leading-none text-muted-foreground">Panels</p>
      </div>
      <div className="flex min-w-0 flex-col items-center px-2 py-3 text-center">
        <p className="text-[18px] leading-none font-bold tabular-nums text-ink">
          {dirtyPanelCount.toLocaleString()}
        </p>
        <p className="mt-1 whitespace-nowrap text-[11px] leading-none text-muted-foreground">Needs Cleaning</p>
      </div>
      <div className="flex min-w-0 flex-col items-center px-2 py-3 text-center">
        <p className={`text-[18px] leading-none font-bold tabular-nums ${criticalPanelCount > 0 ? "text-destructive" : "text-ink"}`}>
          {criticalPanelCount.toLocaleString()}
        </p>
        <p className="mt-1 whitespace-nowrap text-[11px] leading-none text-muted-foreground">Critical</p>
      </div>
    </>
  )
}
