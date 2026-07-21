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
  } : {
    id: number
    name: string
    building: string
    facade: string
    lastFlightDate: Date | null
  } = property
  
  const formattedLastFlightDate = flightDateFormatter.format( new Date(lastFlightDate) )

  return (
    <div className="w-full max-w-sm animate-fade-in">
      <Link href={`/portfolio/${id}`} className="block">
        <Card className="w-full gap-0 py-0 hover:cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_5px_rgba(56,189,248,0.35)]">
          <PortfolioMiniFacade facadeGrid={property.facadeGrid} />
          <CardHeader className="pt-4">
            <CardTitle className="font-building text-[17px] font-bold text-ink">
              <h2> {name} </h2>
            </CardTitle>

            {/* Location */}
            <CardDescription>
              <h3> {building} · {facade} </h3>
            </CardDescription>
          </CardHeader>
          <CardContent className="py-4">
            <p className="text-sm text-muted-foreground">
              Last Inspection - {formattedLastFlightDate}
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
