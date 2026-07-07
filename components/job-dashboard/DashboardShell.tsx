import { Children, isValidElement, type ReactNode } from "react";
import DashboardColumn from "@/components/job-dashboard/DashboardColumn";
import { cn } from "@/lib/utils";

type SlotProps = {
    children: ReactNode;
};

function Topbar({ children }: SlotProps) {
    return <>{children}</>;
}

function Left({ children }: SlotProps) {
    return <>{children}</>;
}

function Center({ children }: SlotProps) {
    return <>{children}</>;
}

function Right({ children }: SlotProps) {
    return <>{children}</>;
}

type Props = {
    children: ReactNode;
    fadeIn?: boolean;
};

function DashboardShell({ children, fadeIn = false }: Props) {
    let topbar: ReactNode = null;
    let left: ReactNode = null;
    let center: ReactNode = null;
    let right: ReactNode = null;

    Children.forEach(children, (child) => {
        if (!isValidElement(child)) return;
        if (child.type === Topbar) topbar = child;
        else if (child.type === Left) left = child;
        else if (child.type === Center) center = child;
        else if (child.type === Right) right = child;
    });

    return (
        <main className="dashboard-background min-h-screen text-[#D5D2F7]">
            <div className="dashboard-grid-overlay pointer-events-none fixed inset-0 z-0" />

            <div className={cn("relative z-10", fadeIn && "fade-in")}>
                {topbar}

                <div className="dashboard-grid p-6 mx-auto" style={{ maxWidth: "1440px" }}>
                    <DashboardColumn>{left}</DashboardColumn>
                    <DashboardColumn>{center}</DashboardColumn>
                    <DashboardColumn className="right-column">{right}</DashboardColumn>
                </div>
            </div>
        </main>
    );
}

DashboardShell.Topbar = Topbar;
DashboardShell.Left = Left;
DashboardShell.Center = Center;
DashboardShell.Right = Right;

export default DashboardShell;
