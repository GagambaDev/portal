'use client';
import ReportScrim from "@/components/report/ReportScrim";

export default function Home() {
  return(
    <div className="min-h-screen py-8" style={{ background: '#09061A'}}>
      <ReportScrim onClose={() => {}}/>
    </div>
  )
}