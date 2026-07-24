'use client';
import RenderReport from "@/components/RenderReport";

export default function Home() {
  return(
    <div className="min-h-screen py-8" style={{ background: '#18df28'}}>
      <RenderReport enableExecutiveSummary={true} enableCriticalTable={true} enableFloorBreakdown={true} enableSustainabilityMetrics={true} onClose={() => {}}/>
    </div>
  )
}