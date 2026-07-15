import { SetStateAction, Dispatch } from "react";

const LEGEND_ITEMS = [
  { label: 'Clean', color: '#74D89A', status: 'clean' },
  { label: 'Dirty', color: '#F2C463', status: 'dirty' },
  { label: 'Critical', color: '#FF867C', status: 'critical' },
  { label: 'Crack', color: '#A98BF0', status: 'crack' }, 
  { label: 'Paint', color:'#5FC2FF', status: 'paint' },
];

interface FacadeLegendProps {
  activeFilters: Set<string>,
  setActiveFilters: Dispatch<SetStateAction<Set<string>>>
}

export default function FacadeLegend({activeFilters, setActiveFilters}: FacadeLegendProps) {
  function toggleFilter(status: string) {
    setActiveFilters((currentFilters) => {
      const next = new Set(currentFilters)
      if (next.has(status)) {
        next.delete(status)
      } else {
        next.add(status)
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
          className={`flex items-center gap-2 px-3 py-1 rounded-full border cursor-pointer transition-all duration-150 hover:border-white/40 hover:bg-zinc-700 ${
            activeFilters.has(item.status)
              ? 'border-violet-400 bg-violet-500/20'
              : 'border-white/10 bg-zinc-400'
          }`}
        >
          <span
            className="w-3 h-3 rounded-[3px] flex-shrink-0"
            style={{ background: item.color }}
          ></span>
          <span className="text-xs font-bold text-white/80">{item.label}</span>
        </div>
      ))}
    </div>
  );
}