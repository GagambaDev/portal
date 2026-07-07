import DashboardShell from "@/components/job-dashboard/DashboardShell";
import DashboardTopbarSkeleton from "@/components/job-dashboard/DashboardTopbarSkeleton";
import { HealthScoreCardSkeleton, StatGridSkeleton, FloorNavigatorCardSkeleton } from "@/components/job-dashboard/left-column";
import { FacadeMapCardSkeleton, SummaryCardSkeleton } from "@/components/job-dashboard/center-column";
import { RecommendationsCardSkeleton, WaterEfficiencyCardSkeleton, FlightEventLogCardSkeleton } from "@/components/job-dashboard/right-column";

export default function DashboardSkeleton() {
    return (
        <DashboardShell>
            <DashboardShell.Topbar>
                <DashboardTopbarSkeleton />
            </DashboardShell.Topbar>

            <DashboardShell.Left>
                <HealthScoreCardSkeleton />
                <StatGridSkeleton />
                <FloorNavigatorCardSkeleton />
            </DashboardShell.Left>

            <DashboardShell.Center>
                <FacadeMapCardSkeleton />
                <div className="grid flex-1 grid-cols-2 gap-4">
                    <SummaryCardSkeleton />
                    <SummaryCardSkeleton />
                </div>
            </DashboardShell.Center>

            <DashboardShell.Right>
                <RecommendationsCardSkeleton />
                <WaterEfficiencyCardSkeleton />
                <FlightEventLogCardSkeleton />
            </DashboardShell.Right>
        </DashboardShell>
    );
}
