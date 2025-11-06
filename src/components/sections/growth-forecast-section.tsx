import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    forecastStats,
    futureChecks,
    recentGrowthUpdates,
} from "@/data/palantir";
import { cn } from "@/lib/utils";

export function GrowthForecastSection(): JSX.Element {
    const statToneClasses = {
        positive:
            "border-success/50 bg-success/10 text-success dark:bg-success/15 dark:text-success-foreground",
        neutral:
            "border-info/40 bg-info/10 text-info dark:bg-info/15 dark:text-info-foreground",
        attention:
            "border-warning/50 bg-warning/10 text-warning dark:bg-warning/15 dark:text-warning-foreground",
    } as const;

    const statusClasses = {
        pass: "border-success/50 bg-success/10 text-success dark:bg-success/20 dark:text-success-foreground",
        attention: "border-warning/50 bg-warning/10 text-warning dark:bg-warning/20 dark:text-warning-foreground",
    } as const;

    const tagClasses = {
        실적: "border-success/40 bg-success/10 text-success dark:bg-success/15 dark:text-success-foreground",
        제품: "border-info/40 bg-info/10 text-info dark:bg-info/15 dark:text-info-foreground",
        계약: "border-secondary/40 bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-foreground",
    } as const;

    return (
        <Card id="section-2-1" className="bg-card p-8 shadow-lg dark:bg-slate-900/70 dark:shadow-2xl">
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
                        <div className="rounded-3xl border border-border/40 bg-muted p-6 shadow-inner dark:border-border/50 dark:bg-slate-900/40">
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
                            <div className="relative mt-5 h-60 overflow-hidden rounded-2xl border border-border/30 bg-card">
                                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-2">
                                    {[21, 22, 23, 24, 25, 26, 27].map(
                                        (year) => (
                                            <div
                                                key={year}
                                                className="flex w-full flex-col items-center gap-2 text-[10px] font-semibold text-muted-foreground"
                                            >
                                                <div className="flex h-36 w-full items-end justify-between gap-1 rounded-lg bg-white/80 p-1 dark:bg-white/10">
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
                                <div className="absolute inset-6 flex items-end justify-between gap-2 text-xs font-medium text-muted-foreground">
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
                                        "rounded-3xl border px-5 py-6 shadow-lg backdrop-blur dark:shadow-black/30",
                                        statToneClasses[stat.tone]
                                    )}
                                >
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-current opacity-70 dark:text-white/70">
                                        {stat.label}
                                    </p>
                                    <p className="mt-3 text-2xl font-semibold text-current dark:text-white drop-shadow-sm">
                                        {stat.value}
                                    </p>
                                    <p className="mt-2 text-xs text-current opacity-70 dark:text-white/70">
                                        {stat.detail}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <ul className="space-y-2 rounded-3xl border border-border/40 bg-secondary/70 p-5 text-sm text-muted-foreground dark:bg-slate-950/60">
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
                        <div className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm dark:bg-slate-950/60">
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
                                            "rounded-2xl border px-4 py-3 text-sm shadow-inner transition hover:shadow-lg dark:shadow-black/10",
                                            statusClasses[check.status]
                                        )}
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-border/60 bg-white/85 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground dark:border-white/50 dark:bg-white/20 dark:text-white">
                                                ✓
                                            </span>
                                            <div className="space-y-1">
                                                <p className="font-semibold text-foreground dark:text-slate-100">
                                                    {check.label}
                                                </p>
                                                <p className="text-xs text-muted-foreground dark:text-slate-100/70">
                                                    {check.description}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl border border-border/40 bg-card p-6 shadow-sm dark:bg-slate-950/60">
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
                                        className="rounded-2xl border border-border/40 bg-secondary/70 p-4 dark:bg-slate-950/70"
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
