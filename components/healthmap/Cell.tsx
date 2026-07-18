'use client';
import { CellData, CellProps } from "@/lib/types";
import { STATUS_COLOR } from "@/lib/constants/heatmap";
import { useState } from "react";

export default function Cell({ data, activeFilters, onClick}: CellProps) {
  const [hovered, setHovered] = useState(false)
  const { fill, edge } = STATUS_COLOR[data.status]
  const dimmed = activeFilters.size > 0 && !activeFilters.has(data.status)

  return (
    <button
      className="rounded-[4px] cursor-pointer transition-all duration-150"
      style={{
        height: '18px',
        width: '40px',
        background: fill,
        border: `1px solid ${edge}`,
        opacity: dimmed ? 0.16 : 1,
        transform: hovered && !dimmed ? 'scale(1.14)' : 'scale(1)',
        boxShadow: hovered && !dimmed ? '0 0 14px rgba(0,170,255,.5)' : 'none',
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}
