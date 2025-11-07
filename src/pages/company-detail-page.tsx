import { useMemo } from "react";
import { useNavigate, useParams } from "@tanstack/react-router";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import type { CompanyInsight } from "@/data/insights";
import { companyInsights } from "@/data/insights";
import {
    computeCompanyDonutGrade,
    companyMetricKeys,
    translateCompanyMetric,
} from "@/lib/company-metrics";
import { usePageSeo } from "@/hooks/use-page-seo";
import { RadarChart } from "@/components/charts/radar-chart";

const metricToneMeta: Record<
    CompanyInsight["metricDetails"][number]["tone"],
    { label: string; className: string }
> = {
    positive: {
        label: "긍정",
        className:
            "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/60 dark:bg-emerald-500/20 dark:text-emerald-100",
    },
    neutral: {
        label: "중립",
        className: "border-blue-400/40 bg-blue-500/10 text-blue-300",
    },
    attention: {
        label: "주의",
        className:
            "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-400/60 dark:bg-amber-500/20 dark:text-amber-100",
    },
};

export function CompanyDetailPage(): JSX.Element {
    const navigate = useNavigate();
    const { companyId } = useParams({ from: "/report/$companyId" });

    const company = useMemo(
        () => companyInsights.find((item) => item.id === companyId),
        [companyId]
    );

    const pageTitle = company
        ? `${company.name} 성장 인사이트 | Donut Report`
        : "기업 인사이트를 찾을 수 없습니다 | Donut Report";
    const pageDescription = company
        ? `${company.name}의 Donut Grade와 성장·수익성·모멘텀 지표를 한눈에 살펴보세요.`
        : "요청한 기업 인사이트를 찾을 수 없습니다.";

    usePageSeo({
        title: pageTitle,
        description: pageDescription,
        canonicalPath: `/report/${companyId}`,
        keywords: company
            ? [
                  company.name,
                  company.ticker,
                  company.brandLabel,
                  "Donut Grade",
                  "기업 인사이트",
              ]
            : ["Donut Report", "기업 인사이트"],
        ogImage: "/og-donut-report.svg",
    });

    const handleBack = (): void => {
        navigate({ to: "/report" });
    };

    if (!company) {
        return (
            <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 pb-16 pt-10">
                <Card className="border border-border/40 bg-card">
                    <CardHeader>
                        <CardTitle className="text-xl text-foreground">
                            기업 인사이트를 찾을 수 없습니다
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-muted-foreground">
                        <p>
                            요청하신 기업 정보를 불러오지 못했어요. URL을 다시
                            확인하시거나 목록으로 돌아가 주세요.
                        </p>
                        <Button variant="outline" onClick={handleBack}>
                            목록으로 돌아가기
                        </Button>
                    </CardContent>
                </Card>
            </section>
        );
    }

    const donutGrade = computeCompanyDonutGrade(company);
    const quickFacts = [
        { label: "브랜드", value: company.brandLabel },
        { label: "산업", value: company.industry },
        { label: "매출 규모", value: company.revenueScale },
        { label: "본사", value: company.headquarters },
    ];
    const metricAxes = companyMetricKeys.map((key) => ({
        key,
        label: translateCompanyMetric(key),
    }));
    const metricExtremes = metricAxes
        .map((axis) => ({
            ...axis,
            value: company.metrics[axis.key],
        }))
        .sort((a, b) => b.value - a.value);
    const strongestMetric = metricExtremes[0] ?? {
        key: "",
        label: "-",
        value: 0,
    };
    const weakestMetric =
        metricExtremes[metricExtremes.length - 1] ?? strongestMetric;

    return (
        <section className="min-h-screen bg-slate-50 pb-16 pt-8 dark:bg-slate-950">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6">
                <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-7 shadow-[0_25px_80px_rgba(148,163,184,0.25)] dark:border-white/10 dark:bg-slate-950 dark:shadow-[0_35px_120px_rgba(15,23,42,0.65)]">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                        <Button
                            variant="secondary"
                            className="px-5 py-2"
                            onClick={handleBack}
                        >
                            ← 목록으로 돌아가기
                        </Button>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[0.7rem] uppercase tracking-[0.3em] text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-white/80">
                                {company.ticker}
                            </span>
                            <span className="rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.18em] text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200">
                                Growth Focus
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)]">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                                    {company.industry}
                                </p>
                                <h1 className="text-4xl font-semibold text-foreground">
                                    {company.name}
                                </h1>
                                <p className="text-base leading-relaxed text-muted-foreground">
                                    {company.summary}
                                </p>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                                {quickFacts.map((fact) => (
                                    <div
                                        key={fact.label}
                                        className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80"
                                    >
                                        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 dark:text-white/50">
                                            {fact.label}
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                                            {fact.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                                {company.focus.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 font-semibold text-muted-foreground dark:border-white/15 dark:bg-white/5 dark:text-white/70"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-[28px] border border-slate-200/70 bg-white/95 p-5 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-900/80 dark:shadow-[0_30px_90px_rgba(15,23,42,0.55)]">
                            <p className="text-xs uppercase tracking-[0.2em] text-primary/70">
                                Donut Grade
                            </p>
                            <p className="mt-3 text-6xl font-semibold text-slate-900 dark:text-white">
                                {donutGrade.toFixed(1)}
                            </p>
                            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                성장력·수익성·안정성·모멘텀·밸류/리스크를
                                0~100점으로 정규화한 Donut Report 전용 종합
                                점수입니다.
                            </p>
                            <Separator className="my-4 bg-slate-200/60 dark:bg-white/10" />
                            <div className="grid gap-3 text-left text-xs text-muted-foreground">
                                <div className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                                    <p className="text-[0.6rem] uppercase tracking-[0.25em] text-slate-500 dark:text-white/50">
                                        강점 지표
                                    </p>
                                    <div className="mt-2 flex items-end justify-between gap-3">
                                        <p className="text-sm font-semibold text-foreground">
                                            {strongestMetric.label}
                                        </p>
                                        <span className="text-lg font-semibold text-primary">
                                            {strongestMetric.value}
                                        </span>
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                                    <p className="text-[0.6rem] uppercase tracking-[0.25em] text-slate-500 dark:text-white/50">
                                        개선 기회
                                    </p>
                                    <div className="mt-2 flex items-end justify-between gap-3">
                                        <p className="text-sm font-semibold text-foreground">
                                            {weakestMetric.label}
                                        </p>
                                        <span className="text-lg font-semibold text-rose-500">
                                            {weakestMetric.value}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,0.85fr)]">
                    <div className="space-y-6">
                        <Card className="border border-border/30 bg-card/60 backdrop-blur">
                            <CardHeader className="space-y-1 pb-1">
                                <CardTitle className="text-sm text-foreground">
                                    핵심 지표 레이더
                                </CardTitle>
                                <p className="text-xs text-muted-foreground">
                                    최근 4개 분기 지표를 정규화한 점수
                                </p>
                            </CardHeader>
                            <Separator className="bg-border/40" />
                            <CardContent className="flex flex-col items-center gap-4 p-5">
                                <RadarChart
                                    metrics={company.metrics}
                                    axes={metricAxes}
                                    minHeight={280}
                                    className="w-full max-w-[380px]"
                                />
                                <p className="text-center text-xs leading-relaxed text-muted-foreground/80">
                                    Donut Grade의 일곱 축을 동일한 축척으로
                                    비교해 특정 영역의 강·약점을 빠르게 파악할
                                    수 있습니다.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border border-border/30 bg-card/70 backdrop-blur">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm text-foreground">
                                    주요 지표 코멘트
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-3 p-5 text-sm text-muted-foreground md:grid-cols-2">
                                {company.metricDetails.map((metric) => {
                                    const toneMeta =
                                        metricToneMeta[metric.tone];
                                    return (
                                        <div
                                            key={metric.label}
                                            className="rounded-2xl border border-border/40 bg-muted px-4 py-3"
                                        >
                                            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
                                                <span>{metric.label}</span>
                                                <span
                                                    className={`rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-[0.2em] ${toneMeta.className}`}
                                                >
                                                    {toneMeta.label}
                                                </span>
                                                <span className="ml-auto text-base font-semibold tracking-normal text-foreground">
                                                    {metric.value}
                                                </span>
                                            </div>
                                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                {metric.context}
                                            </p>
                                        </div>
                                    );
                                })}
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card className="border border-border/30 bg-card/70 backdrop-blur">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm text-foreground">
                                    최신 뉴스 하이라이트
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 p-5 text-sm text-muted-foreground">
                                {company.latestNews.length === 0 ? (
                                    <p>최근 뉴스가 등록되지 않았습니다.</p>
                                ) : (
                                    company.latestNews.map((news) => (
                                        <div
                                            key={`${news.source}-${news.published}`}
                                            className="rounded-2xl border border-border/40 bg-muted px-4 py-3 dark:bg-slate-900/60"
                                        >
                                            <p className="font-medium text-foreground">
                                                <a
                                                    href={news.url}
                                                    className="hover:underline"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {news.title}
                                                </a>
                                            </p>
                                            <p className="mt-1 text-xs text-muted-foreground/70">
                                                {news.source} · {news.published}
                                            </p>
                                        </div>
                                    ))
                                )}
                            </CardContent>
                        </Card>

                        <Card className="border border-border/30 bg-card/70 backdrop-blur">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm text-foreground">
                                    빠른 메모
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 p-5 text-sm leading-relaxed text-muted-foreground">
                                <p>
                                    Donut Grade는 성장력·수익성·재무
                                    안정성·모멘텀·밸류/리스크를 0~100점으로
                                    정규화해 산출합니다. 업계 평균과 비교해 70점
                                    이상이면 상위 20% 수준으로 평가됩니다.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border border-border/30 bg-card/70 backdrop-blur">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm text-foreground">
                                    성장 하이라이트
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-3 p-5 text-sm text-muted-foreground sm:grid-cols-2">
                                {company.highlights.map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-2xl border border-border/40 bg-muted px-4 py-3"
                                    >
                                        <p className="text-foreground font-semibold">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
