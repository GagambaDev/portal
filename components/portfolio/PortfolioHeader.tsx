/*This file renders the header of the portfolio

*/


type HeaderStats = {
    propertyCount: number;
    flightsThisMonth: number;
    panelsScanned: number;
    openCriticals: number;
};
//defined outside the component so its not recreated on every rerender
const statItems = (stats: HeaderStats) => [
    { label: 'Flights this month', value: stats.flightsThisMonth, crit: false },
    { label: 'Panels scanned', value: stats.panelsScanned, crit: false },
    { label: 'Open criticals', value: stats.openCriticals, crit: true },
];

export default function PortfolioHeader({ stats }: { stats: HeaderStats }) {
    return (
      <header className="mb-10">
        {/* B1 Acceptance Criteria Met for Eyebrow. */}
        <p style={{ fontFamily: 'var(--font-techy)' }} className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          Building Health / Active Properties
        </p>
        {/* B1 Acceptance Criteria Met for H1 text. */}
        <h1 style={{ fontFamily: 'var(--font-header)', letterSpacing: '-0.5px' }} className="text-[30px] font-extrabold text-ink mt-1">
          Property Portfolio
        </h1>
        {/* B1 Acceptance Criteria Not Met for Subheading */}
        {/* 
          Criteria specified --muted for color text. The global css file has --muted and --muted-foreground defined. 
          With the current value for --background in that file, --muted-foreground provides better contrast and readability.
        
          Once, the value of --background is updated and finalized to a different value other than white, we can change the text
          color to --muted as originally intended.
        */}
        <p className="text-[14px] text-muted-foreground mt-1">
          {stats.propertyCount} properties under autonomous service. Open any building to review its latest post-flight report.
        </p>

        <div className="flex flex-wrap gap-8 mt-4">
          {statItems(stats).map(({ label, value, crit }) => (
            <div key={label}>
              <p style={{ fontFamily: 'var(--font-techy)' }} className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
              <p style={{ fontFamily: 'var(--font-techy)' }} className={`text-[26px] font-bold ${crit ? 'text-destructive' : 'text-foreground'}`}>{value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </header>
    );
  }