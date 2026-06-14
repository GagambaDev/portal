import PortfolioCardGrid from '../../components/portfolio/PortfolioCardGrid'
import { getPortfolios } from '@/lib/portfolios'

export default async function Portfolio() {
  const portfolios = await getPortfolios()

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <PortfolioCardGrid properties={portfolios} />
    </div>
  );
}
