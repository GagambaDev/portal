/* small label that follows the cursor on hover
   used by the facade map (C5) when hovering over a panel
*/

"use client";

import React from "react";

export interface TipState {
  title: string;
  subtitle?: string;
  x: number;
  y: number;
}

interface TooltipProps {
  tip: TipState | null;
}

export function Tooltip({ tip }: TooltipProps) {
  if (!tip) return null;

  //keep the tooltip on-screen: stop it overflowing the right edge
  const left = Math.min(tip.x + 14, window.innerWidth - 240);
  const top  = tip.y + 16;

  return (
    <div
      role="tooltip"
      style={{ left, top }}
      className="fixed z-[90] pointer-events-none max-w-[230px] px-[11px] py-2 rounded-lg bg-[#150E33] border border-[var(--sky-line)] shadow-[var(--shadow-lg)] text-[11.5px] leading-snug text-[var(--text)] animate-[fadeIn_0.12s_ease]"
    >
      <div className="font-grotesk font-semibold text-[11px] tracking-[0.4px] text-[var(--ink)]">
        {tip.title}
      </div>
      {tip.subtitle && (
        <div className="text-[var(--muted)] mt-0.5">{tip.subtitle}</div>
      )}
    </div>
  );
}