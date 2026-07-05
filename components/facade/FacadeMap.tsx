import FacadeCell from "@/components/facade/FacadeCell";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['600'] });
const floors = 18;
const panelsPerFloor = 10;

export default function FacadeMap() {
  return (
    <div className="bg-black/30 rounded-lg p-3 flex flex-col-reverse gap-1 h-[480px] overflow-y-auto">
      {Array.from({ length:floors }).map((_, floorIndex) => (
        <div key={floorIndex} className="flex gap-1">
          <span className={`${spaceGrotesk.className} text-[10px] text-zinc-500 w-4 text-right`}>
            {floorIndex + 1}
          </span>
          <div className="flex gap-1">
          {Array.from({ length: panelsPerFloor }).map((_, panelIndex) => (
            <FacadeCell key={panelIndex} STATUS="clean"/>
          ))}
          </div>
        </div>
      ))}
    </div>
  )
}