'use client';
import ResetButton from "@/components/healthmap/ResetButton";
import { LegendProps } from "@/lib/types";
import { LEGEND_ITEMS } from "@/lib/constants/heatmap";

export default function Legend({activeFilters, setActiveFilters}: LegendProps) {
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
          className={`flex items-center gap-2 px-2 py-1 rounded-full 
                      border cursor-pointer hover:border-white/40 
                      hover:bg-zinc-700 
                      ${  activeFilters.has(item.status) 
                          ? 'border-violet-400 bg-violet-500/20'
                          : 'border-white/10 bg-zinc-400'
                        }
                    `}
        >
          <span
            className="w-3 h-3 rounded-[3px] flex-shrink-0"
            style={{ background: item.color }}
          />
          <span className="text-xs font-bold text-white/80">{item.label}</span>
        </div>
      ))}

      <ResetButton filtersOn={filtersOn} setActiveFilters={setActiveFilters}/>
    </div>
  );
}