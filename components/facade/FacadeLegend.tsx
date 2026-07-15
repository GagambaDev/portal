'use client';
import { SetStateAction, Dispatch } from "react";
import { useState } from "react";
import ResetButton from "@/components/facade/ResetButton";

const LEGEND_ITEMS = [
  { label: 'Clean', color: '#3FA66A', status: 'clean' },
  { label: 'Dirty', color: '#D49A33', status: 'dirty' },
  { label: 'Critical', color: '#D8534C', status: 'critical' },
  { label: 'Crack', color: '#6E4FD0', status: 'crack' }, 
  { label: 'Paint', color:'#2F8FD6', status: 'paint' },
];

interface FacadeLegendProps {
  activeFilters: Set<string>,
  setActiveFilters: Dispatch<SetStateAction<Set<string>>>
}

export default function FacadeLegend({activeFilters, setActiveFilters}: FacadeLegendProps) {
  const [filtersOn, setFiltersOn] = useState<boolean>(false);

  function toggleFilter(status: string) {
    setActiveFilters((currentFilters) => {
      const next = new Set(currentFilters)
      if (next.has(status)) {
        next.delete(status);
      } 
      else {
        next.add(status);
        setFiltersOn(true);
      }

      if (next.size === 0) {
        setFiltersOn(false);
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
          className={`flex items-center gap-2 px-3 py-1 rounded-full 
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

      <ResetButton filtersOn={filtersOn} setFiltersOn={setFiltersOn} setActiveFilters={setActiveFilters}/>
    </div>
  );
}