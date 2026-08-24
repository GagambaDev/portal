"use client"

import { useState } from "react";
import type { ReactNode} from "react";

type PanelToolTipProps = {
    floor: number;
    panel: number;
    status: string;
    flagged?: boolean;
    children: ReactNode;
}
export function PanelToolTip( {floor, panel, status, flagged, children }: PanelToolTipProps) {
   const [pos, setPos] = useState( { x: 0, y: 0});
   const [visible, setVisible] = useState(false);
   const isTouch  = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
   if(isTouch) return null;
   return (
    <div 
        // Wrapper - handles mouse events
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onMouseMove={(e) => setPos({ x:e.clientX, y:e.clientY }) }
    > 
        {children} {/* panel button*/}
        {/* only render tooltip when visible is true */}
        {visible && (
            <div 
                style={{
                    position: 'fixed',
                    pointerEvents: 'none',
                    zIndex: 90,
                    background: '#150E33',
                    border: '1px solid var(--skyline)',
                    borderRadius: 8,
                    padding: '8px 11px',
                    boxShadow: 'var(--shadow-lg',
                    maxWidth: 230,
                    left: Math.min(pos.x + 14, window.innerWidth - 240),
                    top: pos.y + 16,
                    opacity: 1,
                    transition: 'opacity 0.12s'
                }}
            >
                <p style={{ fontWeight: 600, color: 'var(--muted)' }}>
                    Floor {floor} / Panel {panel}
                </p>
                <p style={{ color: 'var(--muted)' }}>
                    {status} {flagged && '/ Flagged'}
                </p>
            </div>
        )}
    </div>
   )
}