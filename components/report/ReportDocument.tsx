import ReportHeader from "@/components/report/ReportHeader";
import BuildingTitle from "@/components/report/BuildingTitle";

export default function ReportDocument(){
  const flightDate = 'Apr 12, 2026 · 06:42 AM';
  const recipient = "Building Manager";

  const buildingName = 'MGM Grand Las Vegas';
  const location = 'North Tower';
  const facade = 'North Facade';

  return (
    <div 
      className="rounded-[6px] w-full"
      style={{
        background: '#fff',
        maxWidth: '820px',
        margin: '0 auto',
        padding: '54px 58px 64px',
        color: '#1A0F47',
      }}
    >
      <ReportHeader flightDate={flightDate} recipient={recipient}/>
      <BuildingTitle buildingName={buildingName} location={location} facade={facade}/>
    </div>
  )
}