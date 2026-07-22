import { ResetButtonProps } from "@/lib/types";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['600'] });

export default function ResetButton({filtersOn, setActiveFilters}: ResetButtonProps){
  return (
    <div 
      className={`${spaceGrotesk.className} flex items-center gap-2 px-2 py-1 text-xs font-bold rounded-full border cursor-pointer transition-all duration-150 ml-auto`}
      style={
        filtersOn
          ? { background: 'rgba(213,210,247,.03)', border: '1px solid rgba(213,210,247,.20)', color: '#D5D2F7' }
          : { background: 'rgba(213,210,247,.03)', border: '1px solid rgba(213,210,247,.20)', color: '#D5D2F7', opacity: 0.5, pointerEvents: 'none' }
      }
      onMouseEnter={(e) => {
        if (filtersOn) e.currentTarget.style.borderColor = '#D5D2F7'
      }}
      onMouseLeave={(e) => {
        if (filtersOn) e.currentTarget.style.borderColor = 'rgba(213,210,247,.20)'
      }}
      onClick={() => setActiveFilters(new Set())}
    >
      Reset
    </div>
  );
}