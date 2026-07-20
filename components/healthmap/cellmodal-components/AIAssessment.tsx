import { AIAssessmentProps } from "@/lib/types";

export default function AIAssessment({assessment}: AIAssessmentProps){
  return (
    <div
      className="rounded-[11px] p-4 mt-4"
      style={{
        background: 'rgba(9, 6, 26, .4)',
        border: '1px solid rgba(213, 210, 247, .10)',
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        {/* Blue Dot */}
        <span
          className="w-2 h-2 rounded-full"
          style={{ background: '#00AAFF' }}
        />
        <p className="text-[10px] font-semibold tracking-widest uppercase text-[#7E63E8]">
          Gagamba AI Assessment
        </p>
      </div>
      <p className="text-sm text-[#D5D2F7] leading-relaxed">
        {assessment}
      </p>
    </div>
  );
}