import { Topbar } from "@/components/layout/topbar";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";
import { HeroSummary } from "@/components/sections/hero-summary";
import { TimelineSection } from "@/components/sections/timeline-section";
import { IntroSection } from "@/components/sections/intro-section";
import { GrowthForecastSection } from "@/components/sections/growth-forecast-section";
import { DiversificationSection } from "@/components/sections/diversification-section";
import { EpsRoeSection } from "@/components/sections/eps-roe-section";
import { ComparablesSection } from "@/components/sections/comparables-section";
import { BusinessHighlightsSection } from "@/components/sections/business-highlights-section";
import { ActionChecklist } from "@/components/sections/action-checklist";
import { DataStatusSection } from "@/components/sections/data-status-section";

export default function App(): JSX.Element {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pb-12 text-foreground">
            <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-10 px-4 pt-10 md:px-6 lg:px-8">
                <Topbar />
                <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
                    <Sidebar />
                    <div className="flex flex-col gap-6">
                        <HeroSummary />
                        <TimelineSection />
                        <IntroSection />
                        <GrowthForecastSection />
                        <DiversificationSection />
                        <EpsRoeSection />
                        <ComparablesSection />
                        <BusinessHighlightsSection />
                        {/* <ActionChecklist /> */}
                        <DataStatusSection />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
