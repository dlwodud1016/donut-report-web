import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    forecastStats,
    futureChecks,
    recentGrowthUpdates,
} from "@/data/palantir";
import { cn } from "@/lib/utils";

export function GrowthForecastSection(): JSX.Element {
    const statToneClasses = {
        positive: "border-emerald-400/40 bg-gradient-to-br from-emerald-500/20 via-slate-950/70 to-emerald-400/10",
        neutral: "border-sky-400/40 bg-gradient-to-br from-sky-500/20 via-slate-950/70 to-sky-400/10",
        attention: "border-amber-400/40 bg-gradient-to-br from-amber-500/20 via-slate-950/70 to-orange-400/10",
    } as const;

    const statusClasses = {
        pass: "bg-emerald-500/15 border-emerald-400/40 text-emerald-100",
        attention: "bg-amber-500/15 border-amber-400/40 text-amber-100",
    } as const;

    const tagClasses = {
        실적: "border-emerald-400/40 bg-emerald-500/10 text-emerald-100",
        제품: "border-sky-400/40 bg-sky-500/10 text-sky-100",
        계약: "border-purple-400/40 bg-purple-500/10 text-purple-100",
    } as const;

    return (
        <Card id="section-2-1" className="bg-slate-900/70 p-8">
            <CardHeader className="space-y-2 p-0">
                <CardTitle className="text-2xl text-foreground">
                    2.1 매출이 얼마나 늘어날까?
                </CardTitle>
                <p className="text-base text-muted-foreground">
                    정부 계약이 기본 매출을 지켜 주고, AIP 업셀과 민간 고객
                    확장이 추가 성장을 이끕니다. 안전판과 성장 엔진이 함께
                    돌아가는 구조인지 살펴봅니다.
                </p>
            </CardHeader>
            <CardContent className="space-y-8 p-0">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)]">
                    <section className="space-y-6">
                        <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-blue-500/20 via-slate-900/50 to-emerald-400/20 p-6 shadow-inner">
                            <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-wide text-muted-foreground">
                                <span className="font-semibold text-foreground/90">
                                    매출 · 영업이익 전망 (FY21 ~ FY27E)
                                </span>
                                <div className="flex items-center gap-4">
                                    <span className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-sky-300">
                                        Revenue
                                    </span>
                                    <span className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-emerald-300">
                                        Operating Profit
                                    </span>
                                </div>
                            </div>
                            <div className="relative mt-5 h-60 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-emerald-500/10">
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_35%)]" />
                                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-2">
                                    {[21, 22, 23, 24, 25, 26, 27].map(
                                        (year) => (
                                            <div
                                                key={year}
                                                className="flex w-full flex-col items-center gap-2 text-[10px] font-semibold text-slate-200/70"
                                            >
                                                <div className="flex h-36 w-full items-end justify-between gap-1 rounded-lg bg-white/5 p-1">
                                                    <span
                                                        className="h-full w-1/2 rounded-full bg-sky-300/80"
                                                        style={{
                                                            height: `${
                                                                20 +
                                                                (year - 21) * 12
                                                            }%`,
                                                        }}
                                                    />
                                                    <span
                                                        className="h-full w-1/2 rounded-full bg-emerald-300/80"
                                                        style={{
                                                            height: `${
                                                                10 +
                                                                (year - 21) * 10
                                                            }%`,
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-[11px] text-muted-foreground">
                                                    FY{year}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className="absolute inset-6 flex items-end justify-between gap-2 text-xs font-medium text-emerald-50">
                                    <div className="flex-1 self-start text-right text-[11px] text-muted-foreground">
                                        실제 수치는 애널리스트 컨센서스 기반 •
                                        단위: 억 달러
                                    </div>
                                </div>
                            </div>
                            <p className="mt-5 text-sm text-muted-foreground">
                                FY27 기준 매출 75억 달러, 영업이익 22억 달러를
                                목표로 규모의 경제를 확보한다는 것이 기본
                                시나리오입니다.
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                            {forecastStats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className={cn(
                                        'rounded-3xl border px-5 py-6 shadow-lg shadow-black/30 backdrop-blur',
                                        statToneClasses[stat.tone]
                                    )}
                                >
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                                        {stat.label}
                                    </p>
                                    <p className="mt-3 text-2xl font-semibold text-white drop-shadow">
                                        {stat.value}
                                    </p>
                                    <p className="mt-2 text-xs text-white/70">
                                        {stat.detail}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <ul className="space-y-2 rounded-3xl border border-border/40 bg-slate-950/60 p-5 text-sm text-muted-foreground">
                            <li>
                                • FY27 컨센서스: 매출 82.5억 달러, 순이익 25.1억
                                달러로 3년 CAGR이 각각 26.6%, 29.2%에 달합니다.
                            </li>
                            <li>
                                • 예상 ROE가 28.9%까지 상승해 산업 평균과
                                미국 시장 성장률을 모두 상회합니다.
                            </li>
                            <li>
                                • 애널리스트 27명이 팔란티어를 커버하며
                                전망치는 2025년 11월 4일 기준 최신화됐습니다.
                            </li>
                        </ul>
                    </section>
                    <aside className="space-y-6">
                        <div className="rounded-3xl border border-border/40 bg-slate-950/60 p-6">
                            <h3 className="text-lg font-semibold text-foreground">
                                성장성 체크리스트
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                애널리스트 전망과 자체 분석을 조합해 성장 가설을
                                검증했습니다.
                            </p>
                            <ul className="mt-4 space-y-3">
                                {futureChecks.map((check) => (
                                    <li
                                        key={check.label}
                                        className={cn(
                                            "rounded-2xl border px-4 py-3 text-sm shadow-inner shadow-black/10 transition hover:shadow-lg",
                                            statusClasses[check.status]
                                        )}
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/50 bg-white/20 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                                                ✓
                                            </span>
                                            <div className="space-y-1">
                                                <p className="font-semibold text-slate-100">
                                                    {check.label}
                                                </p>
                                                <p className="text-xs text-slate-100/70">
                                                    {check.description}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl border border-border/40 bg-slate-950/60 p-6">
                            <h3 className="text-lg font-semibold text-foreground">
                                최근 성장 관련 업데이트
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                핵심 뉴스만 요약했습니다.
                            </p>
                            <div className="mt-4 space-y-4">
                                {recentGrowthUpdates.map((item) => (
                                    <article
                                        key={item.title}
                                        className="rounded-2xl border border-border/40 bg-slate-950/70 p-4"
                                    >
                                        <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-wide text-muted-foreground">
                                            <span>{item.date}</span>
                                            <span
                                                className={cn(
                                                    "rounded-full px-3 py-1 text-[10px] font-semibold",
                                                    tagClasses[item.tag]
                                                )}
                                            >
                                                {item.tag}
                                            </span>
                                        </div>
                                        <h4 className="mt-2 text-sm font-semibold text-foreground">
                                            {item.title}
                                        </h4>
                                        <p className="mt-2 text-xs text-muted-foreground">
                                            {item.summary}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </CardContent>
        </Card>
    );
}
