import { Syne } from "next/font/google";

const syne = Syne({ subsets: ['latin'], weight:['800']});

interface BuildingTitleProps{
  buildingName: string,
  location: string, 
  facade: string
}

export default function BuildingTitle({buildingName, location, facade}: BuildingTitleProps) {
  return (
    <div className="mb-[26px]">
      <h1 
        className={`${syne.className} text-[27px] mb-1`}
        style={{ color: '#1A0F47' }}  
      >
        {buildingName}
      </h1>
      <p className="text-[14px]" style={{ color: '#6B6788'}}>
        {location} · {facade} · Autonomous facade health audit
      </p>
    </div>
  )
}