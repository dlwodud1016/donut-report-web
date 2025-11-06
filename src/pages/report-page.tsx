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

export function ReportPage(): JSX.Element {
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
