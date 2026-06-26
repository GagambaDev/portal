/**
 * This handles the rendering of multiple cards. It will take in an array of
 * card props and display them in a grid.
 */

import PortfolioCard from './PortfolioCard'
import type { PortfolioCardGridProps } from '@/lib/types'

export default function PortfolioCardGrid({
  properties,
}: PortfolioCardGridProps) {
  return (
    // Cards will have a single-column grid layout by default until width hits 821 pixels.
    // When this happens, program will do the math to figure out how many cards can fit in a row. 
    // Spacing between the cards will remain consistent thanks to gap-5.
    <div className="grid grid-cols-1 min-[821px]:grid-cols-[repeat(auto-fill,minmax(280px,auto))] gap-5">
      {(properties || []).map((property) => (
        <PortfolioCard key={property.building_id} property={property} />
      ))}
    </div>
  );
}
