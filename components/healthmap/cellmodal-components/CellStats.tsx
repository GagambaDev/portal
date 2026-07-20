interface CellStatsProps {
  thermal: string,
  confidence: number, 
  lastcleaned: number,
  glazing: string
}

export default function CellStats({thermal, confidence, lastcleaned, glazing}: CellStatsProps){
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-4 mt-4">
      <div>
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#9B95C4]">Thermal Delta</p>
        <p className="text-[16px] font-semibold text-[#F0EEFC] mt-1">{thermal}°C</p>
      </div>
      <div>
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#9B95C4]">Scan Confidence</p>
        <p className="text-[16px] font-semibold text-[#F0EEFC] mt-1">{confidence}</p>
      </div>
      <div>
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#9B95C4]">Last Cleaned</p>
        <p className="text-[16px] font-semibold text-[#F0EEFC] mt-1">{lastcleaned}</p>
      </div>
      <div>
        <p className="text-[11px] font-semibold tracking-widest uppercase text-[#9B95C4]">Glazing</p>
        <p className="text-[16px] font-semibold text-[#F0EEFC] mt-1">{glazing}</p>
      </div>
    </div>
  )
}