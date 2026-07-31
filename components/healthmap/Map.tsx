'use client';
import Cell from "@/components/healthmap/Cell";
import { Space_Grotesk } from "next/font/google";
import { CellData, MapProps } from "@/lib/types";
import { useState } from "react";
import CellModal from "@/components/healthmap/CellModal";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['600'] });

export default function Map({floors, panels, activeFilters}:MapProps) {
  const [selectedCell, setSelectedCell] = useState<CellData | null>(null);
  const [flaggedCells, setFlaggedCells] = useState<Set<string>>(new Set());
  const [issueMap, setIssueMap] = useState <Record<string, string>>({
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
  });

  function resolvecell(floor: number, panel: number){
    setIssueMap((currentIssues) => {
      const updatedIssues = {...currentIssues};
      delete updatedIssues[`${floor}-${panel}`];
      return updatedIssues;
    });
    setSelectedCell(null);
  }

  function toggleFlag(floor: number, panel: number) {
    setFlaggedCells((currentFlaggedCells) => {
      const next = new Set(currentFlaggedCells);
      const key = `${floor}-${panel}`;
      if (next.has(key)) {
        next.delete(key);
      }
      else {
        next.add(key);
      }
      return next;
    });
  }


  return (
    <>
      <div
        className="map-scroll rounded-[12px] p-3 pr-10 h-[460px] overflow-auto mt-5"
        style={{
          background: 'linear-gradient(180deg, rgba(9, 6, 26, .55), rgba(26, 15, 71, .42))',
          border: '1px solid rgba(213, 210, 247, .10)',
          minWidth: '560px',
        }}
      >
        <div
          className="flex flex-col-reverse gap-1"
          style={{
            width: 'max-content',
            minWidth: '100%',
            minHeight: '100%',
          }}
        >
          {Array.from({ length: floors }).map((_, floorIndex) => (
            <div key={floorIndex} className="flex gap-1 ml-2">
              <span className={` ${spaceGrotesk.className} text-[10px] text-zinc-500 w-4 text-right shrink-0 `} >
                {floorIndex + 1}
              </span>

              <div
                className="grid gap-1 flex-1 ml-2"
                style={{
                  gridTemplateColumns: `repeat(${panels}, 1fr)`,
                  minWidth: `${ panels * 20 + (panels - 1) * 4 }px`,
                }}
              >
                {Array.from({ length: panels }).map(
                  (_, panelIndex) => {
                    const status = issueMap[`${floorIndex + 1}-${panelIndex + 1}`] ?? 'clean';
                    const cellData: CellData = {
                      floor: floorIndex + 1,
                      panel: panelIndex + 1,
                      status,
                      thermalDelta: '+0.4',
                      scanConfidence: 0,
                      lastCleaned: 0,
                      glazing: 'Insulated · double',
                      aiAssessment: '',
                      flagged: flaggedCells.has(`${floorIndex + 1}-${panelIndex + 1}`),
                    };
                    return (
                      <Cell key={panelIndex} data={cellData} activeFilters={activeFilters} onClick={() => setSelectedCell(cellData)}/>
                    );
                  }
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCell && (
        <CellModal
          data={{ ...selectedCell, flagged: flaggedCells.has(`${selectedCell.floor}-${selectedCell.panel}`)}}
          onClose={() => setSelectedCell(null)}
          onResolve={resolvecell}
          onFlagged={toggleFlag}
        />
      )}
    </>
  );
}