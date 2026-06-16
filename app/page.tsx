import Image from "next/image";
import PortfolioHeader from "@/components/stats/PortfolioHeader";

export default function Home() {
  return (
    <div 
      className="flex flex-col w-full min-h-screen font-sans"
      style={{
        background: `
          radial-gradient(1100px 760px at 78% -12%, rgba(91,63,212,.35) 0%, transparent 58%),
          radial-gradient(900px 700px at 8% 6%, rgba(0,170,255,.10) 0%, transparent 55%),
          linear-gradient(158deg, #09061A 0%, #1A0F47 100%)
        `,
      }}>
        <PortfolioHeader/>
    </div>
  );
}
