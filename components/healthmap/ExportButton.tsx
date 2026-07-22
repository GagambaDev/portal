import { Download } from "lucide-react";

const DownloadIcon = <Download size={16}/>;

export default function ExportButton() {
  return (
    <button 
      className="flex items-center gap-2 text-xs font-bold rounded-[10px] px-3 py-1.5 cursor-pointer transition-all duration-200"
      style={{
        color: '#D5D2F7',
        border: '1px solid rgba(213,210,247,.20)',
        background: 'rgba(213,210,247,.03)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#00AAFF'
        e.currentTarget.style.color = '#00AAFF'
        e.currentTarget.style.boxShadow = '0 0 18px rgba(0,170,255,.16)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(213,210,247,.20)'
        e.currentTarget.style.color = '#D5D2F7'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {DownloadIcon} Export PDF Report
    </button>
  );
}