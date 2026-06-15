import StatsHeader from "@/components/stats/StatsHeader";
import { Syne } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], weight: ['800']});

export default function PortfolioHeader() {
  return (
    <div className="flex items-end justify-between flex-wrap gap-4">
      <div>
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#9B95C4]">
          Building Health · Active Properties
        </p>
        <h1 className={`${syne.className} font-extrabold text-[30px] tracking-tight text-[#F0EEFC]`}>
          Property Portfolio
        </h1>
        <p className="text-sm text-[#9B95C4] mt-1">
          Open any building to review its latest post-flight report.
        </p>
      </div>
      <StatsHeader/>
    </div>
  );
}