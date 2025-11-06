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
        <Card className="space-y-6 bg-card p-6 shadow-lg dark:bg-slate-900/70 dark:shadow-2xl sm:p-8">
            <header className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">
                    Company Analysis and Financial Data Status
                </h2>
                <p className="text-base text-muted-foreground">
                    리포트에서 사용한 데이터와 출처를 투명하게 공유합니다.
                </p>
            </header>

            <div className="space-y-3 md:hidden">
                {dataRows.map((row) => (
                    <div
                        key={row.metric}
                        className="rounded-2xl border border-border/30 bg-muted p-4 text-sm text-muted-foreground"
                    >
                        <p className="text-base font-semibold text-foreground">
                            {row.metric}
                        </p>
                        <dl className="mt-3 space-y-2">
                            <div className="flex items-center justify-between gap-4">
                                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                                    타입
                                </dt>
                                <dd>{row.type}</dd>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                                    업데이트
                                </dt>
                                <dd>{row.updated}</dd>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                                    출처
                                </dt>
                                <dd>{row.source}</dd>
                            </div>
                        </dl>
                    </div>
                ))}
            </div>

            <div className="hidden overflow-hidden rounded-3xl border border-border/40 bg-card md:block">
                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-px bg-muted/60 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="bg-muted/80 px-4 py-3">지표</span>
                    <span className="bg-muted/80 px-4 py-3">타입</span>
                    <span className="bg-muted/80 px-4 py-3">업데이트</span>
                    <span className="bg-muted/80 px-4 py-3">출처</span>
                </div>
                {dataRows.map((row) => (
                    <div
                        key={row.metric}
                        className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-px text-sm text-muted-foreground"
                    >
                        <span className="bg-card px-4 py-3 text-foreground">
                            {row.metric}
                        </span>
                        <span className="bg-card px-4 py-3">{row.type}</span>
                        <span className="bg-card px-4 py-3">{row.updated}</span>
                        <span className="bg-card px-4 py-3">{row.source}</span>
                    </div>
                ))}
            </div>

            <div className="space-y-2 rounded-3xl border border-primary/25 bg-muted p-5 text-sm text-muted-foreground shadow-md dark:border-primary/30 dark:bg-slate-950/55 dark:shadow-lg dark:shadow-black/20">
                <p>
                    모든 숫자는 공개 자료를 바탕으로 재구성했습니다. Donut Report
                    에서는 리포트 문체와 정보 구조를 검증하는 데 집중합니다.
                </p>
                <p>
                    피드백은 https://forms.gle/yghAehBPfrNbEoHC9 으로 보내주세요.
                </p>
            </div>
        </Card>
    );
}
