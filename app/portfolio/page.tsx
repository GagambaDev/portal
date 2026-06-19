import PortfolioCardGrid from '../../components/portfolio/PortfolioCardGrid'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader';
import { getPortfolios } from '../../lib/portfolios';

const MockStats = {
  propertyCount: 3,
  flightsThisMonth: 128,
  panelsScanned: 4902,
  openCriticals: 7,
}

export default async function Portfolio() {
  const properties = await getPortfolios()

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <PortfolioHeader stats={MockStats}/>
      <PortfolioCardGrid properties={properties} />
    </div>
  );
}
