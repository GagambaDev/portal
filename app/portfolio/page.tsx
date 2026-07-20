import PortfolioCardGrid from '../../components/portfolio/PortfolioCardGrid'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader';
import {
  getPortfolioHeaderStats,
  getPortfolios,
} from '../../lib/portfolios';

export default async function Portfolio() {
  const properties = await getPortfolios()
  const stats = getPortfolioHeaderStats(properties)

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <PortfolioHeader stats={stats}/>
      <PortfolioCardGrid properties={properties} />
    </div>
  );
}
