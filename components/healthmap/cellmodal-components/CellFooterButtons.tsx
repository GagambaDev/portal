import { CellFooterButtonsProps } from "@/lib/types"

export default function CellModalButtons({ onClose, status }: CellFooterButtonsProps) {
  return (
    <div
      className="flex justify-end gap-2 px-6 py-4 rounded-b-[18px]"
      style={{
        background: 'rgba(9, 6, 26, .4)',
        borderTop: '1px solid rgba(213, 210, 247, .10)',
      }}
    >
      <button 
        className="px-4 py-2 text-sm font-semibold rounded-[10px] border border-white/20 text-[#D5D2F7] bg-transparent hover:border-white/40"
        onClick={onClose}  
      >
        Close
      </button>

      <button className="px-4 py-2 text-sm font-semibold rounded-[10px] border border-white/20 text-[#D5D2F7] bg-transparent hover:border-white/40">
        {status === 'clean' ? 'Flag panel': 'Flag for inspection'}
      </button>
      
      {status !== 'clean' && (
        <button className="px-4 py-2 text-sm font-semibold rounded-[10px] text-white" style={{ background: '#5B3FD4' }}>
          Mark resolved
        </button>
      )}
    </div>
  )
}