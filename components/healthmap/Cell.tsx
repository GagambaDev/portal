'use client';
import { CellProps } from "@/lib/types";
import { STATUS_COLOR } from "@/lib/constants/heatmap";
import { useState } from "react";

export default function Cell({ data, activeFilters, onClick}: CellProps) {
  const [hovered, setHovered] = useState(false)
  const { fill, edge } = STATUS_COLOR[data.status]
  const dimmed = activeFilters.size > 0 && !activeFilters.has(data.status)
  const flagged = data.flagged;

  return (
    <button
      aria-label={`Floor ${data.floor} panel ${data.panel} ${data.status}`}
      className="rounded-[4px] cursor-pointer transition-all duration-150"
      style={{
        height: '18px',
        width: '100%',
        minWidth: '20px',
        background: fill,
        border: `1px solid ${edge}`,
        opacity: dimmed ? 0.16 : 1,
        transform: hovered && !dimmed ? 'scale(1.14)' : 'scale(1)',
        boxShadow: [ 
          flagged && !dimmed ? '0 0 0 2px #fff, 0 0 0 4px var(--sky)' : null,
          hovered && !dimmed ? '0 0 14px rgba(0,170,255,.5)' : null,
        ].filter(Boolean).join(', ') || 'none',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}
