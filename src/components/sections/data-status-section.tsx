import { Card } from "@/components/ui/card";

const dataRows = [
    {
        metric: "주가 / 시총",
        type: "마켓 데이터",
        updated: "2025-10-30",
        source: "NASDAQ, KRX",
    },
    {
        metric: "재무제표",
        type: "10-K, 10-Q",
        updated: "2024-12-31",
        source: "SEC EDGAR",
    },
    {
        metric: "컨센서스 전망",
        type: "애널리스트 추정",
        updated: "2025-10-25",
        source: "Bloomberg, FactSet",
    },
    {
        metric: "고객 사례",
        type: "기자재 조사",
        updated: "2025-10-20",
        source: "팔란티어 고객 인터뷰",
    },
];

export function DataStatusSection(): JSX.Element {
    return (
        <Card className="space-y-6 bg-gradient-to-br from-slate-900/80 via-slate-950/50 to-blue-900/40 p-8 shadow-2xl">
            <header className="space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">
                    Company Analysis and Financial Data Status
                </h2>
                <p className="text-base text-muted-foreground">
                    리포트에서 사용한 데이터와 출처를 투명하게 공유합니다.
                </p>
            </header>
            <div className="overflow-hidden rounded-3xl border border-border/40 bg-slate-950/50 backdrop-blur">
                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-px bg-white/5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="bg-slate-950/70 px-4 py-3">지표</span>
                    <span className="bg-slate-950/70 px-4 py-3">타입</span>
                    <span className="bg-slate-950/70 px-4 py-3">업데이트</span>
                    <span className="bg-slate-950/70 px-4 py-3">출처</span>
                </div>
                {dataRows.map((row) => (
                    <div
                        key={row.metric}
                        className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-px bg-white/5 text-sm text-muted-foreground"
                    >
                        <span className="bg-slate-950/55 px-4 py-3 text-foreground">
                            {row.metric}
                        </span>
                        <span className="bg-slate-950/55 px-4 py-3">
                            {row.type}
                        </span>
                        <span className="bg-slate-950/55 px-4 py-3">
                            {row.updated}
                        </span>
                        <span className="bg-slate-950/55 px-4 py-3">
                            {row.source}
                        </span>
                    </div>
                ))}
            </div>
            <div className="space-y-2 rounded-3xl border border-primary/30 bg-slate-950/55 p-5 text-sm text-muted-foreground shadow-lg shadow-black/20">
                <p>
                    모든 숫자는 공개 자료를 바탕으로 재구성했습니다. Donut
                    Report 에서는 리포트 문체와 정보 구조를 검증하는 데
                    집중합니다.
                </p>
                <p>피드백은 notion.so/donut-report/feedback 으로 보내주세요.</p>
            </div>
        </Card>
    );
}
