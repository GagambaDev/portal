/**
 * This handles the rendering of multiple cards. It will take in an array of
 * card props and display them in a grid.
 */

import PortfolioCard from './PortfolioCard'
import type { PortfolioCardGridProps } from '@/lib/types'
import {LoadingCard} from './PortfolioCard'

export default function PortfolioCardGrid({
  properties,
}: PortfolioCardGridProps) {
  // Output message when there are no portfolios to display
  if (properties.length === 0)
  {
    return <p className='text-foreground text-[26px]'> 
      No properties are currently under service. 
    </p>;
  }

  return (
    // Cards will have a single-column grid layout by default until width hits 821 pixels.
    // When this happens, program will do the math to figure out how many cards can fit in a row. 
    // Spacing between the cards will remain consistent thanks to gap-5.
    <div className="grid grid-cols-1 min-[821px]:grid-cols-[repeat(auto-fill,minmax(280px,auto))] gap-5">
      {(properties).map((property) => (
        <PortfolioCard key={property.building_id} property={property} />
      ))}
    </div>
  );
}

export function LoadingCardGrid() {
  // Create an empty array that has 10 elements.
  // We will use this to simulate the index value of a for-loop.
  const LoadingCards = Array.from({ length: 10});
  
  return (
    // Cards will have a single-column grid layout by default until width hits 821 pixels.
    // When this happens, program will do the math to figure out how many cards can fit in a row. 
    // Spacing between the cards will remain consistent thanks to gap-5.
    <div className="grid grid-cols-1 min-[821px]:grid-cols-[repeat(auto-fill,minmax(280px,auto))] gap-5">
      
      {/* We now will store loading cards in an array that holds html elements that
      can render on our screen.
      For every item in the empty array, generate a loading card into our collection. */}
      {LoadingCards.map((_, index) => (
        <LoadingCard key={index} />
      ))}
    </div>
  );
}
