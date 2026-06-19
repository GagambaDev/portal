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
        <Card className="w-full hover:cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_5px_rgba(56,189,248,0.35)]">
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
          <CardFooter className="grid grid-cols-3 border-border bg-transparent px-0 py-0">
            <PortfolioStats property={property} />
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
