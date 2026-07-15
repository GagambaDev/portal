import { SetStateAction, Dispatch } from "react"

interface ResetButtonProps{
  filtersOn: boolean,
  setFiltersOn: Dispatch<SetStateAction<boolean>>,
  setActiveFilters: Dispatch<SetStateAction<Set<string>>>
}

export default function ResetButton({filtersOn, setFiltersOn, setActiveFilters}: ResetButtonProps){
  return (
    <div 
      className={`flex gap-2 px-3 py-1 text-xs font-bold 
                  text-white/80 rounded-full border cursor-pointer 
                  hover:border-white/40 hover:bg-zinc-700 ml-25
                  ${  filtersOn === true
                      ? 'border-white/10 bg-zinc-400'
                      : 'border-white/10 bg-zinc-400 opacity-40'
                    }
                `}
      onClick={() => {setActiveFilters(new Set()), setFiltersOn(false)}}
    >
      reset
    </div>
  )
}