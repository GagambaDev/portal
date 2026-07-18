import { Download } from "lucide-react";

const DownloadIcon = <Download size={16}/>;

export default function ExportButton() {
  return (
    <button 
      className="flex items-center gap-2 text-xs font-bold border border-white/20 
                 rounded-[8px] px-3 py-1.5 bg-black/20 cursor-pointer hover:bg-white/40
                 hover:bg-zinc-400"
    >
      {DownloadIcon} Export PDF Report
    </button>
  )
}