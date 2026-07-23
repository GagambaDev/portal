import { Syne } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';

interface ReportHeaderProps{
  flightDate: string,
  recipient: string
}

const syne = Syne({ subsets: ['latin'], weight: ['800']});
const spaceGrotesk = Space_Grotesk({ subsets:['latin'], weight:['400']});

export default function ReportHeader({flightDate, recipient}: ReportHeaderProps) {
  return (
    <div
      className='flex justify-between items-start pb-[18px] mb-[24px]'
      style={{ borderBottom: '2px solid #1A0F47'}}
    >
      <span 
        className={`${syne.className} text-[22px] tracking-[1.6px]`}
        style={{ color: '#5B3FD4' }}  
      >
        GAGAMBA
      </span>
      <div
        className={`${spaceGrotesk.className} text-right text-[11px] leading-[1.7]`}
        style={{ color: '#6B6788' }}
      >
        POST-FLIGHT REPORT <br/>
        {flightDate}<br />
        Prepared for {recipient}
      </div>
    </div>
  )
}