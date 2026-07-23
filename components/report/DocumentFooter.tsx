import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({subsets:['latin'], weight:['400']});

export default function DocumentFooter() {
  return (
    <div
      className={`${spaceGrotesk.className} flex justify-between mt-[34px] pt-[14px] text-[11px]`}
      style={{
        borderTop: '1px solid #E7E3F5',
        color: '#8C88A8',
      }}
    >
      <span> Gagamba · Autonomous facade care</span>
      <span>gagamba.co · Confidential</span>
    </div>
  )
}