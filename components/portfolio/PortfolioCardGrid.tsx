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
    <div className="grid-container">
      {(properties || []).map((property) => (
        <PortfolioCard key={property.id} property={property} />
      ))}
    </div>
  );
}
