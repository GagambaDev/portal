export interface PortfolioProperty {
  id: string;
  title: string;
  date: string;
  description: string;
  footer: string;
}

export interface PortfolioCardProps {
  property: PortfolioProperty;
}

export interface PortfolioCardGridProps {
  properties?: PortfolioProperty[];
}
