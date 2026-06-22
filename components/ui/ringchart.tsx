"use client";

import React, { useEffect, useRef, useId } from "react";

interface RingChartProps {
  score: number;     // 0–100
  size?: number;     // diameter px (default 148)
  stroke?: number;   // stroke width px (default 10)
  glow?: boolean;
  className?: string;
}

export function RingChart({
  score,
  size = 148,
  stroke = 10,
  glow = false,
  className = "",
}: RingChartProps) {
  const arcRef = useRef<SVGCircleElement>(null);
  const gradientId = useId();

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const target = circumference - (score / 100) * circumference;

  useEffect(() => {
    const arc = arcRef.current;
    if (!arc) return;

    arc.style.strokeDashoffset = String(circumference);
    const raf = requestAnimationFrame(() => {
      arc.style.transition = "stroke-dashoffset 1.1s cubic-bezier(.2,.8,.2,1)";
      arc.style.strokeDashoffset = String(target);
    });
    return () => cancelAnimationFrame(raf);
  }, [target, circumference]);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={glow ? { filter: "drop-shadow(0 0 4px rgba(0,170,255,0.4))" } : undefined}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5B3FD4" />
          <stop offset="100%" stopColor="#00AAFF" />
        </linearGradient>
      </defs>

      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(213,210,247,0.12)"
        strokeWidth={stroke}
      />

      {/* Arc */}
      <circle
        ref={arcRef}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
      />
    </svg>
  );
}