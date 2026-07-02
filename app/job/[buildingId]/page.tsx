import "./dashboard.css";
import { redirect } from "next/navigation";
import DashboardTopbar from "@/components/job-dashboard/DashboardTopbar";
import DashboardColumn from "@/components/job-dashboard/DashboardColumn";
import RecommendationsCard from "@/components/job-dashboard/right-column/RecommendationsCard";
import WaterEfficiencyCard from "@/components/job-dashboard/right-column/WaterEfficiencyCard";
import FlightEventLogCard from "@/components/job-dashboard/right-column/FlightEventLogCard";
import { getBuilding } from "@/lib/data/buildings/utils";
import HealthScoreCard from "@/components/job-dashboard/left-column/HealthScoreCard";

type PageProps = {
    params: Promise<{ buildingId: string }>;
};

export default async function Page({ params }: PageProps) {
    const { buildingId } = await params;
    const building = getBuilding(buildingId);

    if (!building) {
        redirect("/portfolio");
    }

    return (
        <main className="dashboard-background min-h-screen text-[#D5D2F7]">
            <div className="dashboard-grid-overlay pointer-events-none fixed inset-0 z-0" />

            <div className="fade-in relative z-10">
                <DashboardTopbar
                    buildingName={building.name}
                    buildingLocation={building.location}
                />

                <div className="dashboard-grid p-6 mx-auto" style={{ maxWidth: "1440px" }}>
                    <DashboardColumn>
                        <HealthScoreCard score={building.healthScore} />
                    </DashboardColumn>

                    <DashboardColumn />

                    <DashboardColumn className="right-column">
                        <RecommendationsCard recommendations={building.recommendations} />
                        <WaterEfficiencyCard waterEfficiency={building.waterEfficiency} />
                        <FlightEventLogCard events={building.flightEvents} />
                    </DashboardColumn>
                </div>
            </div>
        </main>
    );
}
