/**
 * This displays the window stats of a property.
 */

import type { PortfolioProperty } from "@/lib/types"

interface PortfolioStatsProps {
  property: PortfolioProperty
}

export default function PortfolioStats({ property }: PortfolioStatsProps) {
  const { panelCount, dirtyPanelCount } = property

  return (
    <>
      <div className="px-4 py-3">
        <p className="text-[18px] leading-none font-bold text-ink">
          {panelCount}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Panels</p>
      </div>
      <div className="px-4 py-3">
        <p className="text-[18px] leading-none font-bold text-ink">
          {dirtyPanelCount}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Need Clean</p>
      </div>
    </>
  )
}
