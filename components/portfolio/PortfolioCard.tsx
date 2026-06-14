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
import PortfolioStanding from "./PortfolioStanding"

const flightDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
  timeZone: "UTC",
})

export default function PortfolioCard({ property }: PortfolioCardProps) {
  const { name, building, facade, lastFlightDate } = property
  const formattedLastFlightDate = flightDateFormatter.format(
    new Date(lastFlightDate)
  )

  return (
    <div className="animate-fade-in">
      <Card className="w-full hover:cursor-pointer hover:-translate-y-4 hover:shadow-[0_0_5px_rgba(56,189,248,0.35)]">
        <CardHeader>
          <CardTitle className="font-building text-[17px] font-bold text-ink">
            <h1> {name} </h1>
          </CardTitle>
          <CardDescription>
            <h2>{building} · {facade}</h2>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Last flight - {formattedLastFlightDate}
          </p>
        </CardContent>
        <CardFooter>
          <PortfolioStanding property={property} />
        </CardFooter>
      </Card>
    </div>
  );
}
