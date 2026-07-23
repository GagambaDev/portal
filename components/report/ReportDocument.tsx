import ReportHeader from "@/components/report/ReportHeader";
import BuildingTitle from "@/components/report/BuildingTitle";
import ExecutiveSummary from "@/components/report/ExecutiveSummary";
import CriticalTable from "@/components/report/CriticalTable";
import FloorBreakdown from "@/components/report/FloorBreakdown";
import SustainabilityMetrics from "@/components/report/SustainabilityMetric";
import OperatorNote from "@/components/report/OperatorNote";
import { CriticalItem, FloorItem } from "@/lib/types";

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

const criticalItems: CriticalItem[] = [
  { floor: 18, panel: 2, status: 'critical' },
  { floor: 12, panel: 4, status: 'critical' },
  { floor: 6, panel: 5, status: 'critical' },
  { floor: 14, panel: 6, status: 'crack' },
  { floor: 3, panel: 7, status: 'crack' },
]

const FloorBreakdownItems: FloorItem[] = [
  { floor: 18, panels: 3 },
  { floor: 12, panels: 5},
  { floor: 6, panels: 8 },
  { floor: 14, panels: 2 },
  { floor: 3, panels: 10 },
]

const waterUsed = "11.2L";
const capacity = "30x";

const note = "Hello World";

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
      {note && (<OperatorNote note={note}/>)}
      <CriticalTable items={criticalItems}/>
      <FloorBreakdown items={FloorBreakdownItems}/>
      <SustainabilityMetrics waterUsed={waterUsed} capacity={capacity}/>

    </div>
  )
}