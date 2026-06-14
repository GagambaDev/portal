/**
 * This handles the rendering of multiple cards. It will take in an array of
 * card props and display them in a grid.
 */

import PortfolioCard from './PortfolioCard'
import type { PortfolioCardGridProps, PortfolioProperty } from '@/lib/types'

const defaultProperties: PortfolioProperty[] = [
  {
    id: 'mgm-grand-las-vegas',
    title: 'MGM Grand Las Vegas',
    date: 'Last flight - Apr 12, 2026',
    description: 'North Tower · North Facade',
    footer: 'Needs Attention',
  },
  {
    id: 'the-cosmopolitan',
    title: 'The Cosmopolitan',
    date: 'Last flight - Apr 09, 2026',
    description: 'West Residences · West Facade',
    footer: 'Good Standing',
  },
  {
    id: 'aria-resort-casino',
    title: 'ARIA Resort & Casino',
    date: 'Last flight - Apr 14, 2026',
    description: 'Sky Suites · East Facade',
    footer: 'Action Required',
  },
]

export default function PortfolioCardGrid({
  properties = defaultProperties,
}: PortfolioCardGridProps) {
  return (
    <div className="grid-container">
      {properties.map((property) => (
        <PortfolioCard key={property.id} property={property} />
      ))}
    </div>
  );
}
