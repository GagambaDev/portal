import { LoadingPortfolioHeader } from "../../components/portfolio/PortfolioHeader"
import { LoadingCardGrid } from "../../components/portfolio/PortfolioCardGrid"

export default function Loading() {
    return (
        // Overall background we display HTML elements against.
        <div className="min-h-screen bg-background px-6 py-12">
            {/* Loading Header is coded directly in this file. */}
            <LoadingPortfolioHeader/>
            
            {/* Loading Card Grid */}
            <LoadingCardGrid />
        </div>
    );
}