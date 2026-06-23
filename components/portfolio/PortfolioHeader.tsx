/* This file renders the header of the portfolio */

// Typescript object (blueprint) to hold statistics used in this page's subheader.
type HeaderStats = {
  propertyCount: number;
  flightsThisMonth: number;
  panelsScanned: number;
  openCriticals: number;
};

// Defined outside the component so it's not recreated on every rerender.
// Converts data from an instance of HeaderStats object into an array.
const statItems = (stats: HeaderStats) => [
  { label: 'Flights this month', value: stats.flightsThisMonth, crit: false },
  { label: 'Panels scanned', value: stats.panelsScanned, crit: false },
  { label: 'Open criticals', value: stats.openCriticals, crit: true },
];

export default function PortfolioHeader({ stats }: { stats: HeaderStats }) {
  return (
    <header className="mb-10">
      {/* Eyebrow */}
      <p style={{ fontFamily: 'var(--font-techy)' }} className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
        Building Health / Active Properties
      </p>

      <h1 style={{ fontFamily: 'var(--font-header)', letterSpacing: '-0.5px' }} className="text-[30px] font-extrabold text-ink mt-1">
        Property Portfolio
      </h1>

      {/* Subheading */}
      <p className="text-[14px] text--muted mt-1">
        {stats.propertyCount} properties under autonomous service. Open any building to review its latest post-flight report.
      </p>

      {/* Aggregate Statistics */}
      {/* 
        Converts an array made from an HeaderStat object into an array of HTML elements. 
        These elements are what React can actually use to render the statistics on our page. 
      */}
      <div className="flex flex-wrap gap-4 mt-4">
        {statItems(stats).map(({ label, value, crit }) => (
          <div key={label}>
            {/* stats Eyebrow */}
            <p style={{ fontFamily: 'var(--font-techy)' }} className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{label}</p>
            {/* Statistics */}
            <p style={{ fontFamily: 'var(--font-techy)' }} className={`text-[26px] font-bold ${crit ? 'text-crit-tint' : 'text-foreground'}`}>{value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </header>
  );
}