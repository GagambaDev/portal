import type { FlightEvent, FlightEventStatus } from "@/lib/data/buildings/types";

type Props = {
    events: FlightEvent[];
};

const STATUS_CONFIG: Record<
    FlightEventStatus,
    { bg: string; border: string; text: string; icon: string }
> = {
    complete: {
        bg: "bg-green-500/15",
        border: "border-green-500/30",
        text: "text-green-400",
        icon: "✓",
    },
    active: {
        bg: "bg-blue-500/15",
        border: "border-blue-500/30",
        text: "text-blue-400",
        icon: "−",
    },
    warning: {
        bg: "bg-amber-500/15",
        border: "border-amber-500/30",
        text: "text-amber-400",
        icon: "!",
    },
    critical: {
        bg: "bg-red-500/15",
        border: "border-red-500/30",
        text: "text-red-400",
        icon: "✕",
    },
};

export default function FlightEventLogCard({ events }: Props) {
    return (
        <div className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h2 className="mb-4 font-[var(--font-body)] text-base font-semibold text-[#F0EEFC]">
                Flight event log
            </h2>
            <div className="flex flex-col">
                {events.map((event, i) => (
                    <EventRow key={i} event={event} isLast={i === events.length - 1} />
                ))}
            </div>
        </div>
    );
}

function EventRow({ event, isLast }: { event: FlightEvent; isLast: boolean }) {
    const cfg = STATUS_CONFIG[event.status];
    return (
        <div className="flex gap-3">
            <div className="flex flex-col items-center">
                <div
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-[var(--font-techy)] text-[11px] font-bold ${cfg.bg} ${cfg.border} ${cfg.text}`}
                >
                    {cfg.icon}
                </div>
                {!isLast && <div className="my-1 w-px flex-1 bg-white/10" />}
            </div>
            <div className={`min-w-0 flex-1 ${!isLast ? "pb-4" : ""}`}>
                <p className="font-[var(--font-body)] text-[13px] font-semibold leading-tight text-[#F0EEFC]">
                    {event.title}
                </p>
                <p className="mt-0.5 font-[var(--font-body)] text-[11px] text-[#736C9E]">
                    {event.subtitle}
                </p>
                <p className="mt-0.5 font-[var(--font-techy)] text-[11px] text-[#736C9E]">
                    {event.time}
                </p>
            </div>
        </div>
    );
}
