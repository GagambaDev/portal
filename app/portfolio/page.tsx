import PortfolioCardGrid from '../../components/portfolio/PortfolioCardGrid'
import PortfolioHeader from '../../components/portfolio/PortfolioHeader';

const MockStats = {
  propertyCount: 3,
  flightsThisMonth: 128,
  panelsScanned: 4902,
  openCriticals: 7,
}
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <PortfolioHeader stats={MockStats}/>
      <PortfolioCardGrid />
    </div>
  );
}
