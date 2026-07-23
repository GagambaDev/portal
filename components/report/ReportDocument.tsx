import ReportHeader from "@/components/report/ReportHeader";
import BuildingTitle from "@/components/report/BuildingTitle";
import ExecutiveSummary from "@/components/report/ExecutiveSummary";

export default function ReportDocument(){
  const flightDate = 'Apr 12, 2026 · 06:42 AM';
  const recipient = "Building Manager";

  const buildingName = 'MGM Grand Las Vegas';
  const location = 'North Tower';
  const facade = 'North Facade';

  const score = 73;
  const summary = {
  condition: 'Needs Attention',
  scanned: 240,
  criticals: 16,
  needCleaning: 36,
}

const panels = {
  clean: 177,
  dirty: 36,
  critical: 16,
  crack: 6,
}

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
      <ExecutiveSummary score={score} summary={summary} panels={panels}/>
    </div>
  )
}