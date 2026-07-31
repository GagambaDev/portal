import ReportSectionHeader from "@/components/report/ReportSectionHeader";
import { SustainabilityMetricsProps } from "@/lib/types";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({subsets:['latin'], weight:['700']});

export default function SustainabilityMetrics({waterUsed, capacity}: SustainabilityMetricsProps) {
  return (
    <div className="mb-[26px]">
      <ReportSectionHeader title="Sustainability Metrics"/>
      <div className="grid grid-cols-4 gap-3">
        <div className="text-center p-3 rounded-[10px]" style={{ border: '1px solid #E7E3F5'}}>
          <b className={`${spaceGrotesk.className} text-[22px] block`} style={{ color: '#246FA8' }}>{waterUsed}</b>
          <span className={`${spaceGrotesk.className} text-[10px] tracking-[0.5px] uppercase`} style={{ color: '#8C88A8' }}>Water Used</span>
        </div>
        <div className="text-center p-3 rounded-[10px]" style={{ border: '1px solid #E7E3F5'}}>
          <b className={`${spaceGrotesk.className} text-[22px] block`} style={{ color: '#246FA8' }}>{capacity}</b>
          <span className={`${spaceGrotesk.className} text-[10px] tracking-[0.5px] uppercase`} style={{ color: '#8C88A8' }}>Capacity</span>
        </div>
        <div className="text-center p-3 rounded-[10px]" style={{ border: '1px solid #E7E3F5'}}>
          <b className={`${spaceGrotesk.className} text-[22px] block`} style={{ color: '#2E7D32' }}>0</b>
          <span className={`${spaceGrotesk.className} text-[10px] tracking-[0.5px] uppercase`} style={{ color: '#8C88A8' }}>Crew at Height</span>
        </div>
        <div className="text-center p-3 rounded-[10px]" style={{ border: '1px solid #E7E3F5'}}>
          <b className={`${spaceGrotesk.className} text-[22px] block`} style={{ color: '#2E7D32' }}>100%</b>
          <span className={`${spaceGrotesk.className} text-[10px] tracking-[0.5px] uppercase`} style={{ color: '#8C88A8' }}>Coverage</span>
        </div>
      </div>
    </div>
  )
}