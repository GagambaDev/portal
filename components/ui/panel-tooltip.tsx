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
    <div> {/* wrapper - handles mouse events */}
        {children} {/* panel button*/}
        {/* only render tooltip when visible is true */}
        {visible && (
        
            <div>

            </div>
        )}
    </div>
   )

}