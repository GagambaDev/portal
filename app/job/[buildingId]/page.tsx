import DashboardTopbar from "@/components/job-dashboard/DashboardTopbar";

type PageProps = {
    params: Promise<{
        buildingId: string;
    }>;
};

const mockBuilding = {
    name: "MGM Grand Las Vegas",
    location: "North Tower",
};

export default async function Page({ params }: PageProps) {
    const { buildingId } = await params;

    return (
        <main className="dashboard-background min-h-screen text-[#D5D2F7]">
            <div className="dashboard-grid-overlay pointer-events-none fixed inset-0 z-0" />

            <div className="relative z-10">
                {/* Topbar */}
                <DashboardTopbar
                    buildingName={mockBuilding.name}
                    buildingLocation={mockBuilding.location}
                />

                <div className="p-6">
                    <h1>Job Dashboard</h1>
                    <p>Building ID: {buildingId}</p>
                </div>
            </div>
        </main>
    );
}