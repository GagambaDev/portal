'use client';
import { useState } from "react";

const STATUS_COLOR: Record<string, {fill: string, edge: string}> = {
  clean:    { fill: '#3FA66A', edge: '#74D89A' },
  dirty:    { fill: '#D49A33', edge: '#F2C463' },
  critical: { fill: '#D8534C', edge: '#FF867C' },
  crack:    { fill: '#6E4FD0', edge: '#A98BF0' },
  paint:    { fill: '#2F8FD6', edge: '#5FC2FF' },
};

interface FacadeCellProps {
  status: string,
  activeFilters: Set<string>
};

export default function FacadeCell({ status, activeFilters }: FacadeCellProps) {
  const [hovered, setHovered] = useState(false)
  const { fill, edge } = STATUS_COLOR[status]
  const dimmed = activeFilters.size > 0 && !activeFilters.has(status)

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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}
