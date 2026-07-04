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
   
}