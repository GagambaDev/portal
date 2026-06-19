/**
 * This displays the window stats of a property.
 */

import type { PortfolioProperty } from "@/lib/types"

interface PortfolioStatsProps {
  property: PortfolioProperty
}

export default function PortfolioStats({ property }: PortfolioStatsProps) {
  const { panelCount, dirtyPanelCount, criticalPanelCount } = property

  return (
    <>
      <div className="px-4 py-3">
        <p className="text-[18px] leading-none font-bold text-ink">
          {panelCount.toLocaleString()}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Panels</p>
      </div>
      <div className="px-4 py-3">
        <p className="text-[18px] leading-none font-bold text-ink">
          {dirtyPanelCount.toLocaleString()}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Needs Cleaning</p>
      </div>
      <div className="px-4 py-3">
        <p className={`text-[18px] leading-none font-bold ${criticalPanelCount > 0 ? "text-destructive" : "text-ink"}`}>
          {criticalPanelCount.toLocaleString()}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Critical</p>
      </div>
    </>
  )
}
