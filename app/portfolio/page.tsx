import PortfolioCardGrid from '../../components/portfolio/PortfolioCardGrid'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader';
import { getPortfolios } from '../../lib/portfolios';
import { getEmptyPortfolios } from '../../lib/portfolios';

const MockStats = {
  propertyCount: 3,
  flightsThisMonth: 128,
  panelsScanned: 4902,
  openCriticals: 7,
}

export default async function Portfolio() {
  // Comment out one of the two lines below to either test whether the portfolios load properly when
  // there is data and when there is no data to work with.
  const properties = await getPortfolios()
  // const properties = await getEmptyPortfolios()

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <PortfolioHeader stats={MockStats}/>
      <PortfolioCardGrid properties={properties} />
    </div>
  );
}
