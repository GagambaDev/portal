import "./dashboard.css";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import DashboardShell from "@/components/job-dashboard/DashboardShell";
import DashboardTopbar from "@/components/job-dashboard/DashboardTopbar";
import type { Building } from "@/lib/data/buildings/types";
import { HealthScoreCard, StatGrid, FloorNavigatorCard } from "@/components/job-dashboard/left-column";
import { FacadeMapCard, SummaryCard } from "@/components/job-dashboard/center-column";
import { RecommendationsCard, WaterEfficiencyCard, FlightEventLogCard } from "@/components/job-dashboard/right-column";

type PageProps = {
    params: Promise<{ buildingId: string }>;
};

async function fetchBuilding(buildingId: string): Promise<Building | null> {
    const headersList = await headers();
    const host = headersList.get("host");

    if (!host) {
        throw new Error("Missing host header; cannot resolve building dashboard API origin");
    }

    const protocol =
        headersList.get("x-forwarded-proto") ??
        (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");

    const res = await fetch(`${protocol}://${host}/api/buildings/${encodeURIComponent(buildingId)}`, {
        cache: "no-store",
    });

    if (res.status === 404) {
        return null;
    }

    if (!res.ok) {
        throw new Error(`Failed to fetch building ${buildingId}: ${res.status}`);
    }

    return res.json() as Promise<Building>;
}

export default async function Page({ params }: PageProps) {
    const { buildingId } = await params;
    const building = await fetchBuilding(buildingId);

    if (!building) {
        redirect("/portfolio");
    }

    return (
        <DashboardShell fadeIn>
            <DashboardShell.Topbar>
                <DashboardTopbar
                    buildingName={building.name}
                    buildingLocation={building.location}
                />
            </DashboardShell.Topbar>

            <DashboardShell.Left>
                <HealthScoreCard score={building.healthScore} />
                <StatGrid
                    panelsClean={building.panelsClean}
                    needsClean={building.needsClean}
                    critical={building.critical}
                    paintIssues={building.paintIssues}
                />
                <FloorNavigatorCard floors={building.floors} />
            </DashboardShell.Left>

            <DashboardShell.Center>
                <FacadeMapCard
                    facadeLabel={building.facadeLabel}
                    floors={building.floors}
                    panelsPerFloor={building.panelsPerFloor}
                />
                <div className="grid flex-1 grid-cols-2 gap-4">
                    <SummaryCard type="critical" value={building.critical} />
                    <SummaryCard type="needsClean" value={building.needsClean} />
                </div>
            </DashboardShell.Center>

            <DashboardShell.Right>
                <RecommendationsCard recommendations={building.recommendations} />
                <WaterEfficiencyCard waterEfficiency={building.waterEfficiency} />
                <FlightEventLogCard events={building.flightEvents} />
            </DashboardShell.Right>
        </DashboardShell>
    );
}
