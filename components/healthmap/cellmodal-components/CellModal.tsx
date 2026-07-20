'use client';
import { CellModalProps } from "@/lib/types";
import { STATUS_MODAL_COLORS } from "@/lib/constants/heatmap";
import CellHeader from "@/components/healthmap/cellmodal-components/CellHeader";
import StatusBlock from "@/components/healthmap/cellmodal-components/StatusBlock";
import CellStats from "./CellStats";

export default function CellModal({ data, onClose }: CellModalProps) {
  const {color, label} = STATUS_MODAL_COLORS[data.status];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backdropFilter: 'blur(4px)', background: 'rgba(5,3,15, .66)'}}
      onClick={onClose}
    >
      <div
        className="bg-[#1B1147] border border-white/20 rounded-[18px] w-full max-w-[460px] h-[440px] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <CellHeader floor={data.floor} panel={data.panel} />
        <StatusBlock color={color} label={label} />
        <CellStats 
          thermal={data.thermalDelta} 
          confidence={data.scanConfidence} 
          lastcleaned={data.lastCleaned}  
          glazing={data.glazing}
        />
        
      </div>
    </div>
  )
}