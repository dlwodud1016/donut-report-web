import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { companyInsights } from "@/data/insights";
import { tastemakerProfiles } from "@/data/tastemakers";
import { usePageSeo } from "@/hooks/use-page-seo";

type SearchResult = {
    id: string;
    label: string;
    description: string;
    route: string;
    type: "company" | "tastemaker";
};

export function HomePage(): JSX.Element {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    usePageSeo({
        title: "Donut Report | 한 입 주식 리포트",
        description:
            "도넛 한 조각 먹는 시간에 읽는 쉬운 투자 리포트. 핵심 지표와 친근한 설명으로 누구나 이해할 수 있는 Donut Report를 만나보세요.",
        keywords: [
            "Donut Report",
            "투자 리포트",
            "주식 인사이트",
            "쉬운 주식 리포트",
        ],
        canonicalPath: "/",
        ogImage: "/og-donut-report.svg",
    });

    const searchResults = useMemo<SearchResult[]>(() => {
        const term = searchTerm.trim().toLowerCase();
        if (!term) return [];

        const companyMatches = companyInsights
            .filter(
                (company) =>
                    company.name.toLowerCase().includes(term) ||
                    company.koreanName.toLowerCase().includes(term) ||
                    company.ticker.toLowerCase().includes(term) ||
                    company.focus.some((tag) =>
                        tag.toLowerCase().includes(term)
                    )
            )
            .map((company) => ({
                id: company.id,
                label: `${company.koreanName} (${company.name})`,
                description: company.ticker,
                route: `/report/${company.id}`,
                type: "company" as const,
            }));

        const tastemakerMatches = tastemakerProfiles
            .filter(
                (profile) =>
                    profile.name.toLowerCase().includes(term) ||
                    profile.focus.some((tag) =>
                        tag.toLowerCase().includes(term)
                    )
            )
            .map((profile) => ({
                id: profile.id,
                label: profile.name,
                description: profile.tagline,
                route: `/tastemakers/${profile.id}`,
                type: "tastemaker" as const,
            }));

        return [...companyMatches, ...tastemakerMatches].slice(0, 6);
    }, [searchTerm]);

    const handleSelect = (result: SearchResult): void => {
        void navigate({ to: result.route as never });
    };

    const handleSubmit = (): void => {
        if (searchResults.length === 0) return;
        handleSelect(searchResults[0]);
    };

    return (
        <main className="relative bg-background">
            <section className="flex flex-1 flex-col items-center justify-start px-4 pb-16 pt-20">
                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-xs uppercase tracking-[0.35em] text-primary/70">
                        Flavor the Market
                    </p>
                    <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                        Search. Taste. Decide.
                    </h1>
                    <p className="max-w-2xl text-sm text-muted-foreground">
                        Type a company, ticker, or tastemaker and jump
                        straight to the story behind the numbers. Pure
                        signal, zero clutter—Donut Report’s way.
                    </p>
                </div>

                <div className="mt-10 w-full max-w-2xl space-y-4">
                    <div className="sticky top-8 z-20 flex items-center gap-3 rounded-full border border-border/50 bg-card/90 px-5 py-3 shadow-sm backdrop-blur">
                        <Search className="h-4 w-4 text-muted-foreground" />
                        <Input
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                            onKeyDown={(event) => {
                                if (event.key === "Enter") handleSubmit();
                            }}
                            placeholder="기업명, 심볼, 인플루언서 이름 검색"
                            className="border-0 bg-transparent p-0 pl-2 text-base focus-visible:ring-0"
                        />
                        <Button
                            variant="secondary"
                            className="rounded-full px-5"
                            onClick={handleSubmit}
                        >
                            검색
                        </Button>
                    </div>
                    <div className="max-h-[320px] space-y-2 overflow-y-auto pr-1 text-sm">
                        {searchTerm.length === 0 ? (
                            <p className="py-4 text-center text-muted-foreground">
                                Palantir, SNOW, 워렌 버핏 등을 입력해
                                보세요.
                            </p>
                        ) : searchResults.length === 0 ? (
                            <p className="py-4 text-center text-muted-foreground">
                                검색 결과가 없습니다.
                            </p>
                        ) : (
                            searchResults.map((result) => (
                                <button
                                    key={`${result.type}-${result.id}`}
                                    type="button"
                                    onClick={() => handleSelect(result)}
                                    className="flex w-full items-center justify-between rounded-full border border-border/30 bg-background/70 px-5 py-2 text-left transition hover:border-primary/40 hover:bg-background/90 dark:bg-slate-900/60"
                                >
                                    <span>
                                        <p className="text-sm font-semibold text-foreground">
                                            {result.label}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {result.description}
                                        </p>
                                    </span>
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-primary/70">
                                        {result.type === "company"
                                            ? "Report"
                                            : "Tastemaker"}
                                    </span>
                                </button>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
