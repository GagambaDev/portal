import ReportSectionHeader from "@/components/report/ReportSectionHeader";
import { OperatorNoteProps } from "@/lib/types";

export default function OperatorNote({note}: OperatorNoteProps) {
  return (
    <div className="mb-[26px]">
      <ReportSectionHeader title="Note From Operator"/>
      <div
        className="text-[13.5px] leading-[1.6] p-[16px] rounded-[10px]"
        style={{
          background: 'rgba(91, 63, 212, 0.07)',
          border: '1px solid rgba(91, 63, 212, .22)',
          color: '#3A3550',
        }}
      >
        {note}
      </div>
    </div>
  )
}