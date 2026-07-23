import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({subsets:['latin'], weight:['700']});

interface ReportSectionHeaderProps {
  title: string
}

export default function ReportSectionHeader({title}: ReportSectionHeaderProps) {
  return (
    <h4
      className={`${spaceGrotesk.className} text-[12px] tracking-[1px] uppercase mb-[12px] pb-[6px]`}
      style={{
        color: '#5B3FD4',
        borderBottom: '1px solid #E7E3F5',
      }}
    > 
      {title}
    </h4>
  )
}