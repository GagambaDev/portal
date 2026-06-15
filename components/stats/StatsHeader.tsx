import StatItem from "@/components/stats/StatItem";

async function fetchStats() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolio/stats`);
  if (!res.ok) {
    throw new Error(`Faild to fetch stats: ${res.status}`);
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