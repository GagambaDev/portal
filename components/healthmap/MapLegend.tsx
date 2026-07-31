'use client';
import ResetButton from "@/components/healthmap/ResetButton";
import { MapLegendProps } from "@/lib/types";
import { LEGEND_ITEMS } from "@/lib/constants/heatmap";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['600'] });

export default function MapLegend({activeFilters, setActiveFilters}: MapLegendProps) {
  const filtersOn = activeFilters.size > 0;

  function toggleFilter(status: string) {
    setActiveFilters((currentFilters) => {
      const next = new Set(currentFilters)
      if (next.has(status)) {
        next.delete(status);
      } 
      else {
        next.add(status);
      }

      return next
    });
  }

  return (
    <div className="flex gap-2 flex-wrap mt-2">
      {LEGEND_ITEMS.map((item) => (
        <div
          key={item.label}
          onClick={() => toggleFilter(item.status)}
          className={`${spaceGrotesk.className} flex items-center gap-2 px-2 py-1 rounded-full border cursor-pointer transition-all duration-150`}
          style={
            activeFilters.has(item.status)
              ? { background: 'rgba(91,63,212,.16)', border: '1px solid #7E63E8', boxShadow: '0 0 0 2px rgba(91,63,212,.16)' }
              : { background: 'rgba(213,210,247,.03)', border: '1px solid rgba(213,210,247,.20)' }
          }
          onMouseEnter={(e) => {
            if (!activeFilters.has(item.status))
              e.currentTarget.style.borderColor = '#D5D2F7'
          }}
          onMouseLeave={(e) => {
            if (!activeFilters.has(item.status))
              e.currentTarget.style.borderColor = 'rgba(213,210,247,.20)'
          }}
        >
          <span
            className="flex-shrink-0"
            style={{ 
              width: '9px',
              height: '9px',
              borderRadius: '3px',
              background: item.color 
            }}
          />
          <span className="text-xs font-bold text-white/80">{item.label}</span>
        </div>
      ))}

      <ResetButton filtersOn={filtersOn} setActiveFilters={setActiveFilters}/>
    </div>
  );
}