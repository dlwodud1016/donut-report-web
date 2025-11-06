import { Sidebar } from "@/components/layout/sidebar";
import { BusinessHighlightsSection } from "@/components/sections/business-highlights-section";
import { DataStatusSection } from "@/components/sections/data-status-section";
import { DiversificationSection } from "@/components/sections/diversification-section";
import { EpsRoeSection } from "@/components/sections/eps-roe-section";
import { GrowthForecastSection } from "@/components/sections/growth-forecast-section";
import { HeroSummary } from "@/components/sections/hero-summary";
import { IntroSection } from "@/components/sections/intro-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { ComparablesSection } from "@/components/sections/comparables-section";
import { usePageSeo } from "@/hooks/use-page-seo";
import { hero } from "@/data/palantir";

export function ReportPage(): JSX.Element {
    usePageSeo({
        title: "Palantir 인사이트 리포트 | Donut Report",
        description:
            "Palantir Technologies의 정부·민간 매출 동력, 예상 성장률, 핵심 지표를 한눈에 정리한 Donut Report 리포트입니다.",
        keywords: ["Palantir", "팔란티어 리포트", "성장주 분석", "주식 리서치"],
        canonicalPath: "/report",
        ogTitle: `${hero.name} 인사이트 리포트`,
        ogDescription: hero.summary,
        ogImage: "/og-donut-report.svg",
    });

    return (
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <div className="flex flex-col gap-6">
                <HeroSummary />
                <TimelineSection />
                <IntroSection />
                {/* <GrowthForecastSection />
                <DiversificationSection />
                <EpsRoeSection />
                <ComparablesSection />
                <BusinessHighlightsSection /> */}
                {/* <ActionChecklist /> */}
                {/* <DataStatusSection /> */}
            </div>
        </div>
    );
}
