import Cell from "@/components/healthmap/Cell";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['600'] });
const floors = 20;
const panelsPerFloor = 13;

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
  return (
    <div className="bg-black/30 rounded-lg p-3 flex flex-col-reverse gap-1 h-[460px] overflow-y-auto mt-5">
      {Array.from({ length: floors }).map((_, floorIndex) => (
        <div key={floorIndex} className="flex gap-1">
          <span className={`${spaceGrotesk.className} text-[10px] text-zinc-500 w-4 text-right`}>
            {floorIndex + 1}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: panelsPerFloor }).map((_, panelIndex) => {
              const status = issueMap[`${floorIndex + 1}-${panelIndex + 1}`] ?? 'clean'
              return (
                <Cell key={panelIndex} status={status} activeFilters={activeFilters} />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  );
}