import Legend from "@/components/healthmap/Legend";
import ExportButton from "@/components/healthmap/ExportButton";
import { HeaderProps } from "@/lib/types";
import { Syne } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], weight: ['800']});

const building = {
  facade: "West Facade",
  floors: 18,
  panels: 10,
};

export default function Header({activeFilters, setActiveFilters}: HeaderProps) {
  return(
    <div>
      <div className="flex items-start justify-between">
        <div>
          <h2 className={`${syne.className} font-bold text-[20px]`} style={{ color: '#F0EEFC', letterSpacing: '-0.3' }}>
            Facade Health Map
          </h2>
          <p className="text-sm mt-1" style={{ color: '#9B95C4' }}>
            {building.facade} · {building.floors} floors · {building.panels} panels per floor · click any panel
          </p>
        </div>
        <ExportButton/>
      </div>
      <Legend activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>
    </div>
  );
}