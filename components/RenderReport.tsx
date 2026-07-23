'use client';
import ReportDocument from "@/components/report/ReportDocument";
import { Download } from "lucide-react";

const DownloadIcon = <Download size={16}/>

export default function ReportReport({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 overflow-auto" style={{ background: 'rgba(5,3,15,.74)', padding: '30px 16px', }}>
      <div className="flex justify-between items-center mb-4" style={{ maxWidth: '820px', margin: '0 auto 14px' }}>
        <span className="text-sm" style={{ color: '#D5D2F7', fontFamily: 'Space Grotesk' }}>
          Preview · generated {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
        <div className="flex gap-2">
          <button className=" flex gap-2 item-center px-4 py-2 text-sm font-bold rounded-[10px] text-white" style={{ background: '#5B3FD4' }}>
            {DownloadIcon} Download PDF
          </button>
          <button className="px-4 py-2 text-sm font-bold rounded-[10px] border text-[#D5D2F7]" style={{ border: '1px solid rgba(213,210,247,.20)', background: 'transparent' }}>
            Print
          </button>
          <button onClick={onClose} className="px-4 py-2 text-sm font-bold rounded-[10px] border text-[#D5D2F7]" style={{ border: '1px solid rgba(213,210,247,.20)', background: 'transparent' }}>
            Close
          </button>
        </div>
      </div>
      <ReportDocument />
    </div>
  )
}