'use client';
import { CellModalProps } from "@/lib/types";
import { STATUS_MODAL_COLORS } from "@/lib/constants/heatmap";
import CellHeader from "@/components/healthmap/cellmodal-components/CellHeader";
import StatusBlock from "@/components/healthmap/cellmodal-components/StatusBlock";
import CellStats from "./CellStats";
import AIAssessment from "./AIAssessment";
import CellFooterButtons from "./CellFooterButtons";

export default function CellModal({ data, onClose }: CellModalProps) {
  const {color, label} = STATUS_MODAL_COLORS[data.status];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backdropFilter: 'blur(4px)', background: 'rgba(5,3,15, .66)'}}
      onClick={onClose}
    >
      <div
        className="bg-[#1B1147] border border-white/20 rounded-[18px] w-full max-w-[460px] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 flex flex-col gap-4">
          <CellHeader floor={data.floor} panel={data.panel} />
          <StatusBlock color={color} label={label} />
          <CellStats 
            thermal={data.thermalDelta} 
            confidence={data.scanConfidence} 
            lastcleaned={data.lastCleaned}  
            glazing={data.glazing}
          />
          <AIAssessment assessment={data.aiAssessment}/>
        </div>
        <CellFooterButtons onClose={onClose} status={data.status}/>
      </div>
    </div>
  );
}