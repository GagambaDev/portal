import { FloorBreakdownProps } from "@/lib/types";
import ReportSectionHeader from "@/components/report/ReportSectionHeader";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({subsets: ['latin'], weight:['700']});


export default function FloorBreakdown({items}: FloorBreakdownProps) {
  return (
      <div className="mb-[26px]">
        <ReportSectionHeader title="Floor-By-Floor Breakdown" />
        <table className="w-full" style={{ borderCollapse: 'collapse', fontSize: '13px'}}>
          <thead>
            <tr>
              {['Floor', 'Findings'].map((h) => (
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
                  All floors within nominal range.
                </td>
              </tr>
            ) : (
              items.map((item, i) => (
                <tr key={i}>
                  <td className="px-[8px] py-[9px]" style={{ color: '#1A0F47', borderBottom: '1px solid #F0EEF8 '}}>Floor {item.floor}</td>
                  <td className="px-[8px] py-[9px]" style={{ color: '#1A0F47', borderBottom: '1px solid #F0EEF8 '}}>{item.panels} panels flagged</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    )
}