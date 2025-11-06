import { Card } from "@/components/ui/card";

const dataRows = [
    {
        metric: "Company Analysis",
        type: "Report refresh",
        updated: "2025/11/04 22:37 UTC",
        source: "Simply Wall St",
    },
    {
        metric: "End of Day Share Price",
        type: "Market data",
        updated: "2025/11/04 00:00 UTC",
        source: "NASDAQGS:PLTR",
    },
    {
        metric: "Earnings",
        type: "Quarterly filings",
        updated: "2025/09/30",
        source: "S&P Global · SEC",
    },
    {
        metric: "Annual Earnings",
        type: "FY filings",
        updated: "2024/12/31",
        source: "S&P Global · SEC",
    },
];

export function DataStatusSection(): JSX.Element {
    return (
        <Card className="space-y-6 bg-card p-8 shadow-lg dark:bg-slate-900/70 dark:shadow-2xl">
            <header className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">
                    Company Analysis and Financial Data Status
                </h2>
                <p className="text-base text-muted-foreground">
                    리포트에서 사용한 데이터와 출처를 투명하게 공유합니다.
                </p>
            </header>
            <div className="overflow-hidden rounded-3xl border border-border/40 bg-white/85 backdrop-blur dark:bg-slate-950/50">
                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-px bg-secondary/60 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="bg-secondary/80 px-4 py-3 dark:bg-slate-950/70">지표</span>
                    <span className="bg-secondary/80 px-4 py-3 dark:bg-slate-950/70">타입</span>
                    <span className="bg-secondary/80 px-4 py-3 dark:bg-slate-950/70">업데이트</span>
                    <span className="bg-secondary/80 px-4 py-3 dark:bg-slate-950/70">출처</span>
                </div>
                {dataRows.map((row) => (
                    <div
                        key={row.metric}
                        className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-px bg-white/60 text-sm text-muted-foreground dark:bg-white/5"
                    >
                        <span className="bg-white/80 px-4 py-3 text-foreground dark:bg-slate-950/55">
                            {row.metric}
                        </span>
                        <span className="bg-white/80 px-4 py-3 dark:bg-slate-950/55">
                            {row.type}
                        </span>
                        <span className="bg-white/80 px-4 py-3 dark:bg-slate-950/55">
                            {row.updated}
                        </span>
                        <span className="bg-white/80 px-4 py-3 dark:bg-slate-950/55">
                            {row.source}
                        </span>
                    </div>
                ))}
            </div>
            <div className="space-y-2 rounded-3xl border border-primary/25 bg-secondary/70 p-5 text-sm text-muted-foreground shadow-md dark:border-primary/30 dark:bg-slate-950/55 dark:shadow-lg dark:shadow-black/20">
                <p>
                    모든 숫자는 공개 자료를 바탕으로 재구성했습니다. Donut
                    Report 에서는 리포트 문체와 정보 구조를 검증하는 데
                    집중합니다.
                </p>
                <p>
                    피드백은 https://forms.gle/yghAehBPfrNbEoHC9 으로
                    보내주세요.
                </p>
            </div>
        </Card>
    );
}
