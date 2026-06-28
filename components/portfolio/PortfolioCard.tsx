/**
 * This handles the rendering of a single card. It will take in some card
 * interface and display that information.
 */

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { PortfolioCardProps } from "@/lib/types"
import PortfolioMiniFacade from "./PortfolioMiniFacade"
import PortfolioStats from "./PortfolioStats"
import Link from "next/link";

const flightDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
  timeZone: "UTC",
})

export default function PortfolioCard({ property }: PortfolioCardProps) {
  const {
    id,
    name,
    building,
    facade,
    lastFlightDate,
  } = property
  const formattedLastFlightDate = flightDateFormatter.format(
    new Date(lastFlightDate)
  )

  return (
    <div className="w-full max-w-sm animate-fade-in">
      <Link href={`/portfolio/${id}`} className="block">
        
        {/* Hover animation */}
        <Card className="w-full gap-0 py-0 hover:cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_5px_rgba(56,189,248,0.35)]">
          <PortfolioMiniFacade facadeGrid={property.facadeGrid} />
          
          <CardHeader className="pt-4">
            {/* Property name */}
            <CardTitle className="font-building text-[17px] font-bold text-ink">
              <h1> {name} </h1>
            </CardTitle>
            {/* Location */}
            <CardDescription>
              <h2>{building} · {facade}</h2>
            </CardDescription>
          </CardHeader>

          {/* Last flight */}
          <CardContent className="py-4">
            <p className="text-sm text-muted-foreground">
              Last flight - {formattedLastFlightDate}
            </p>
          </CardContent>

          {/* Bottom border */}
          <CardFooter className="grid grid-cols-3 border-border bg-transparent px-0 py-0">
            <PortfolioStats property={property} />
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}

// This is what will render on the screen when the portfolio page is Loading. 
// I added arbitrary height values, so the elements don't seem invisible and to prove that the code is working.
export function LoadingCard() {
  return (
    <div className="w-full max-w-sm animate-fade-in">
      <Card className="w-full gap-0 py-0 animate-pulse" style={{backgroundColor: 'var(--violet-soft, pink)'}}>
      
        {/* Mini facade area */}
        <div className="h-30 w-full animate-pulse" style={{ backgroundColor: 'var(--violet-soft, gray)' }} />
        
        {/* Property name and location area */}
        <CardHeader className="pt-4 h-20"></CardHeader>
        
        {/* Last flight area */}
        <CardContent className="py-4 h-4"></CardContent>
        
        {/* Bottom border */}
        <CardFooter className="grid grid-cols-3 border-border bg-transparent px-0 py-0 h-12"></CardFooter>
      </Card>
    </div>
  );
}