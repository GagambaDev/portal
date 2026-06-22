import type { ReactNode } from "react";

type Props = {
    children?: ReactNode;
    className?: string;
};

export default function DashboardColumn({ children, className = "" }: Props) {
    return (
        <div className={`dashboard-column flex h-full flex-col gap-4 ${className}`}>
            {children}
        </div>
    );
}
