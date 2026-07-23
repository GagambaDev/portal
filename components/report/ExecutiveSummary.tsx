import { Syne } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { ExecutiveSummaryProps } from "@/lib/types";
import ReportSectionHeader from "@/components/report/ReportSectionHeader";

const syne = Syne({subsets:['latin'], weight:['700']});
const spaceGrotesk = Space_Grotesk({subsets:['latin'], weight:['700']});

export default function ExecutiveSummary({score, summary, panels}: ExecutiveSummaryProps) {
  return (
    <div className="mb-[26px]">
      <ReportSectionHeader title="Executive Summary"/>
      <div className="flex items-center gap-[22px] mb-[18px]">
        <span className={`${spaceGrotesk.className} text-[54px] leading-none`} style={{ color: '#5B3FD4' }}>
          {score}<span className="text-[20px]" style={{ color: '#6B6788'}}>/100</span>
        </span>
        <div>
          <b className={`${syne.className} text-[17px] block`} style={{ color: '#1A0F47'}}>{summary.condition}</b>
          <span className="text-[13px]" style={{ color: '#6B6788'}}>
            {summary.scanned} panels scanned · {summary.criticals} critical · {summary.needCleaning} need cleaning
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <div className="text-center p-3 rounded-[10px]" style={{ border: '1px solid #E7E3F5' }}>
          <b className={`${spaceGrotesk.className} text-[22px] block`} style={{ color: '#2E7D32' }}>{panels.clean}</b>
          <span className={`${spaceGrotesk.className} text-[10px] tracking-[.5px] uppercase`} style={{ color: '#8C88A8' }}>Clean</span>
        </div>
        <div className="text-center p-3 rounded-[10px]" style={{ border: '1px solid #E7E3F5' }}>
          <b className={`${spaceGrotesk.className} text-[22px] block`} style={{ color: '#9A5E16'}}>{panels.dirty}</b>
          <span className={`${spaceGrotesk.className} text-[10px] tracking-[.5px] uppercase`} style={{ color: '#8C88A8' }}>Dirty</span>
        </div>
        <div className="text-center p-3 rounded-[10px]" style={{ border: '1px solid #E7E3F5' }}>
          <b className={`${spaceGrotesk.className} text-[22px] block`} style={{ color: '#B23B36' }}>{panels.critical}</b>
          <span className={`${spaceGrotesk.className} text-[10px] tracking-[.5px] uppercase`} style={{ color: '#8C88A8' }}>Critical</span>
        </div>
        <div className="text-center p-3 rounded-[10px]" style={{ border: '1px solid #E7E3F5' }}>
          <b className={`${spaceGrotesk.className} text-[22px] block`} style={{ color: '#5B3FD4' }}>{panels.crack}</b>
          <span className={`${spaceGrotesk.className} text-[10px] tracking-[.5px] uppercase`} style={{ color: '#8C88A8' }}>Crack</span>
        </div>
      </div>
    </div>
  )
}