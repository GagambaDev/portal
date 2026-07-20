import { CellHeaderProps } from "@/lib/types"

export default function CellHeader({floor, panel}: CellHeaderProps){
  return (
    <div className="border-b border-white/10 pb-4 mb-4">
      <p className="text-[11px] font-semibold tracking-widest uppercase text-[#9B95C4]">
        Facade · Panel Inspector
      </p>
      <h3 className="font-bold text-[18px] text-[#F0EEFC] mt-1">
        Floor {floor} · Panel {panel}
      </h3>
    </div>
  )
}