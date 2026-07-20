import { StatusBlockProps } from "@/lib/types"

export default function StatusBlock({color, label}: StatusBlockProps){
  return (
    <div
      className="flex items-center justify-start max-w-[460px] h-11 rounded-md"
      style={{ background: `${color}26`, border: `1px solid ${color}40`}}
    >
      <span className="w-3 h-3 rounded-[3px] flex-shrink-0 ml-4" style={{ background: color}}/>
      <span className="text-sm font-bold ml-2" style={{ color }}>{label}</span>
    </div>
  )
}