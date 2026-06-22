import StatItem from "@/components/stats/StatItem";

/**
 * Fetches flightsThisMonth, panelScanned, and openCriticals from the API.
 * Values are currently dummy values -- to be replaced with real Supabase queries.
 * @returns Promise<{ flightsThisMonth: number, panelsScanned: number, openCriticals: number }>
 */
async function fetchStats() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolio/stats`, {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch stats: ${res.status}`);
  }

  return res.json();
}

export default async function StatsHeader() {
  const { flightsThisMonth, panelsScanned, openCriticals } = await fetchStats();
  const stats = [
    { label: 'Flights this month', value: flightsThisMonth},
    { label: 'Panels scanned', value: panelsScanned },
    { label: 'Open criticals', value: openCriticals, valueColor: '#FF9A90'}
  ];

  return (
    <div className="flex gap-[18px]">
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} />
      ))}
    </div>
  );
}