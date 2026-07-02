type Props = {
    score: number;
};

export default function HealthScoreCard({ score }: Props) {
    const condition =
        score >= 80 ? "Good Standing" : score >= 65 ? "Needs Attention" : "Action Required";

    const conditionColor =
        score >= 80 ? "text-[#8FE8B0]" : score >= 65 ? "text-[#F4CE7A]" : "text-[#FF9A90]";

    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-[18px] pb-[22px] pt-5 text-center">
            <span className="font-[var(--font-techy)] text-[11px] font-semibold uppercase tracking-[1.4px] text-[#9B95C4]">
                Building Health Score
            </span>

            <div className="relative mx-auto mb-1 mt-2 h-[148px] w-[148px]">
                {/* Full muted ring */}
                <div className="absolute inset-0 rounded-full border-[11px] border-white/10" />

                {/* Progress bar */}
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: `conic-gradient(#00AAFF ${score * 3.6}deg, rgba(213,210,247,0.12) 0deg)`,
                    }}
                />

                {/* Inner background */}
                <div className="absolute inset-[11px] rounded-full bg-[#140C36]" />

                <div className="absolute inset-0 grid place-content-center text-center">
                    <div className="font-[var(--font-techy)] text-[42px] font-bold leading-none text-[#F0EEFC]">
                        {score}
                    </div>
                    <div className="mt-0.5 font-[var(--font-techy)] text-[13px] text-[#736C9E]">
                        / 100
                    </div>
                </div>
            </div>

            <div className="mt-2 font-[var(--font-body)] text-[12px] text-[#9B95C4]">
                Overall condition
            </div>

            <div className={`mt-0.5 font-[var(--font-heading)] text-lg font-bold ${conditionColor}`}>
                {condition}
            </div>
        </div>
    );
}
