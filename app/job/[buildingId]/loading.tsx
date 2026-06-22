export default function DashboardLoading() {
    return (
        <main className="dashboard-background min-h-screen text-[#D5D2F7]">
            <div className="dashboard-grid-overlay pointer-events-none fixed inset-0 z-0" />
            <div className="relative z-10">
                <div className="sticky top-0 z-40 h-[54px] border-b border-white/10 bg-[#0b071c]/70 backdrop-blur-md" />
                <div className="dashboard-grid p-6">
                    <div className="h-full animate-pulse rounded-2xl bg-white/5" />
                    <div className="h-[600px] animate-pulse rounded-2xl bg-white/5" />
                    <div className="flex flex-col gap-4">
                        <div className="h-44 animate-pulse rounded-2xl bg-white/5" />
                        <div className="h-44 animate-pulse rounded-2xl bg-white/5" />
                        <div className="flex-1 animate-pulse rounded-2xl bg-white/5" />
                    </div>
                </div>
            </div>
        </main>
    );
}
