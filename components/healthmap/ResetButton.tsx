import { ResetButtonProps } from "@/lib/types"

export default function ResetButton({filtersOn, setActiveFilters}: ResetButtonProps){
  return (
    <div 
      className={`flex gap-2 px-2 py-1 text-xs font-bold 
                  text-white/80 rounded-full border cursor-pointer 
                  hover:border-white/40 hover:bg-zinc-700 ml-15
                  ${  filtersOn === true
                      ? 'border-white/10 bg-zinc-400'
                      : 'border-white/10 bg-zinc-400 opacity-40'
                    }
                `}
      onClick={() => setActiveFilters(new Set())}
    >
      reset
    </div>
  )
}