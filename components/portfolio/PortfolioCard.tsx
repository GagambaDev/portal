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

export default function PortfolioCard({ property }: PortfolioCardProps) {
  return (
    <div className="animate-fade-in">
      <Card className="w-full hover:cursor-pointer hover:-translate-y-4 hover:shadow-[0_0_5px_rgba(56,189,248,0.35)]">
        <CardHeader>
          <CardTitle>{property.title}</CardTitle>
          <CardDescription>{property.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {property.date}
          </p>
        </CardContent>
        <CardFooter>
          <p>{property.footer}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
