import Cell from "@/components/healthmap/Cell";
import { Space_Grotesk } from "next/font/google";
import { CellData } from "@/lib/types";
import { useState } from "react";
import CellModal from "@/components/healthmap/cellmodal-components/CellModal";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['600'] });
const floors = 20;
const panelsPerFloor = 10;

const issueMap: Record<string, string> = {
  '3-2': 'dirty',
  '3-7': 'crack',
  '6-5': 'critical',
  '9-1': 'paint',
  '9-8': 'dirty',
  '12-4': 'critical',
  '14-6': 'crack',
  '15-3': 'paint',
  '17-9': 'dirty',
  '18-2': 'critical',
  '13-1': 'paint',
}

interface MapProps {
  activeFilters: Set<string>
}

export default function Map({activeFilters}:MapProps) {
  const [selectedCell, setSelectedCell] = useState<CellData | null>(null)

  return (
    <>
    <div 
      className="bg-black/30 rounded-lg p-3 pr-10 flex flex-col-reverse gap-1 h-[460px] overflow-y-auto mt-5">
      {Array.from({ length: floors }).map((_, floorIndex) => (
        <div key={floorIndex} className="flex gap-1 ml-5">
          <span className={`${spaceGrotesk.className} text-[10px] text-zinc-500 w-4 text-right`}>
            {floorIndex + 1}
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${panelsPerFloor}, 1fr)`, gap: '4px'}}>
            {Array.from({ length: panelsPerFloor }).map((_, panelIndex) => {
              const status = issueMap[`${floorIndex + 1}-${panelIndex + 1}`] ?? 'clean'
              const cellData: CellData = {
                  floor: floorIndex + 1,
                  panel: panelIndex + 1,
                  status,
                  thermalDelta: '+0.4',
                  scanConfidence: 0,
                  lastCleaned: 0,
                  glazing: 'Insulated · double',
                  aiAssessment: '',
                }
              return (
                <Cell key={panelIndex} data={cellData} activeFilters={activeFilters} onClick={() => {
                  setSelectedCell(cellData)
                  console.log('cell clicked', cellData)}
                } />
              )
            })}
          </div>
        </div>
      ))}
    </div>
    {selectedCell && (
      <CellModal data={selectedCell} onClose={() => setSelectedCell(null)}/>
    )}
    </>
  );
}