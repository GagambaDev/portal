import MapLegend from "@/components/healthmap/MapLegend";
import ExportButton from "@/components/healthmap/ExportButton";
import { MapHeaderProps } from "@/lib/types";
import { Syne } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], weight: ['800']});

export default function MapHeader({facade, floors, panels, activeFilters, setActiveFilters}: MapHeaderProps) {
  return(
    <div>
      <div className="flex items-start justify-between">
        <div>
          <h2 className={`${syne.className} font-bold text-[20px]`} style={{ color: '#F0EEFC', letterSpacing: '-0.3' }}>
            Facade Health Map
          </h2>
          <p className="text-sm mt-1" style={{ color: '#9B95C4' }}>
            {facade} · {floors} floors · {panels} panels per floor · click any panel
          </p>
        </div>
        <ExportButton/>
      </div>
      <MapLegend activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>
    </div>
  );
}