'use client';
import { CellData, CellModalProps } from "@/lib/types";

export default function CellModal({ data, onClose }: CellModalProps) {
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
        <div className="mb-4">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-[#9B95C4]">
            Facade · Panel Inspector
          </p>
          <h3 className="font-bold text-[18px] text-[#F0EEFC] mt-1">
            Floor {data.floor} · Panel {data.panel}
          </h3>
        </div>
      </div>
    </div>
  )
}