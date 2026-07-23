import { CriticalTableProps, REPORT_STATUS_COLORS } from "@/lib/types";
import ReportSectionHeader from "@/components/report/ReportSectionHeader";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({subsets:['latin'], weight:['700']});

const RECOMMENDED_ACTION: Record<string, string> = {
  critical: 'Inspect ≤ 48h',
  crack: 'Sealant review',
}

export default function CriticalTable({ items}: CriticalTableProps) {
  return (
    <div className="mb-[26px]">
      <ReportSectionHeader title="Critical & Structural Items" />
      <table className="w-full" style={{ borderCollapse: 'collapse', fontSize: '13px'}}>
        <thead>
          <tr>
            {['Location', 'Panel', 'Status', 'Recommended Action'].map((h) => (
              <th
                key={h}
                className={`${spaceGrotesk.className} text-left pb-[7px] px-[8px]`}
                style={{
                  fontSize: '10.5px',
                  letterSpacing: '.6px',
                  textTransform: 'uppercase',
                  color: '#8C88A8',
                  borderBottom: '1px solid #E0DBF0',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-[8px] py-[9px]" style={{ color: '#8C88A8'}}>
                No critical or structural items in this flight.
              </td>
            </tr>
          ) : (
            items.map((item, i) => (
              <tr key={i}>
                <td className="px-[8px] py-[9px]" style={{ color: '#1A0F47', borderBottom: '1px solid #F0EEF8 '}}>Floor {item.floor}</td>
                <td className="px-[8px] py-[9px]" style={{ color: '#1A0F47', borderBottom: '1px solid #F0EEF8 '}}>Panel {item.panel}</td>
                <td className="px-[8px] py-[9px]" style={{ borderBottom: '1px solid #F0EEF8' }}>
                  <span
                    className="text-[11px] font-semibold px-[8px] py-[2px] rounded-full"
                    style={{
                      background: REPORT_STATUS_COLORS[item.status],
                      color: '#fff',
                    }}
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </td>
                <td className="px-[8px] py-[9px]" style={{ color: '#1A0F47', borderBottom: '1px solid #F0EEF8'}}>
                  {RECOMMENDED_ACTION[item.status]}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}