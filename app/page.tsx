'use client';
import RenderReport from "@/components/RenderReport";

export default function Home() {
  return(
    <div className="min-h-screen py-8" style={{ background: '#09061A'}}>
      <RenderReport onClose={() => {}}/>
    </div>
  )
}