import PortfolioCard from './PortfolioCard'
import type { PortfolioCardGridProps } from '@/lib/types'

export default function PortfolioCardGrid({
  properties,
}: PortfolioCardGridProps) {
  if (properties.length === 0) {
    return (
      <section
        className="rounded-xl border border-dashed border-border px-6 py-12 text-center"
        aria-labelledby="empty-portfolio-title"
      >
        <h2 id="empty-portfolio-title" className="text-lg font-semibold text-foreground">
          No active properties
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Properties will appear here after they are added to autonomous service.
        </p>
      </section>
    )
  }

  return (
    // Cards will have a single-column grid layout by default until width hits 821 pixels.
    // When this happens, program will do the math to figure out how many cards can fit in a row. 
    // Spacing between the cards will remain consistent thanks to gap-5.
    <div className="grid grid-cols-1 min-[821px]:grid-cols-[repeat(auto-fill,minmax(280px,auto))] gap-5">
      {properties.map((property) => (
        <PortfolioCard key={property.id} property={property} />
      ))}
    </div>
  );
}
