import { useMemo } from "react";
import { useNavigate, useParams } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { tastemakerProfiles } from "@/data/tastemakers";
import {
    computeDonutGrade,
    formatAssetValue,
    metricKeys,
    translateMetric,
} from "@/lib/tastemaker-metrics";
import { usePageSeo } from "@/hooks/use-page-seo";
import { RadarChart } from "@/components/charts/radar-chart";

export function TastemakerDetailPage(): JSX.Element {
    const navigate = useNavigate();
    const { profileId } = useParams({
        from: "/tastemakers/$profileId",
    });

    const profile = useMemo(
        () => tastemakerProfiles.find((item) => item.id === profileId),
        [profileId]
    );

    const donutGrade = useMemo(
        () => (profile ? computeDonutGrade(profile) : 0),
        [profile]
    );

    const pageTitle = profile
        ? `${profile.name} Donut Grade | Donut Report`
        : "테이스트메이커를 찾을 수 없습니다 | Donut Report";
    const pageDescription = profile
        ? `${profile.name}의 Donut Grade와 영향력·정확성·관여도·투명성·신뢰도 점수를 한 번에 살펴보세요.`
        : "요청한 테이스트메이커 정보를 찾을 수 없습니다.";

    usePageSeo({
        title: pageTitle,
        description: pageDescription,
        canonicalPath: `/tastemakers/${profileId}`,
        keywords: profile
            ? [
                  profile.name,
                  ...profile.focus,
                  "Donut Grade",
                  "투자 인플루언서",
              ]
            : ["테이스트메이커", "Donut Report"],
        ogImage: profile?.image ?? "/og-donut-report.svg",
    });

    const closeModal = (): void => {
        void navigate({ to: "/tastemakers", replace: true });
    };

    if (!profile) {
        return (
            <Dialog open onOpenChange={(open) => (open ? undefined : closeModal())}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-foreground">
                            테이스트메이커를 찾을 수 없습니다
                        </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-sm text-muted-foreground">
                        <p>
                            요청하신 인플루언서를 불러오지 못했어요. URL을 다시
                            확인하시거나 목록으로 돌아가 주세요.
                        </p>
                        <Button variant="outline" onClick={closeModal}>
                            목록으로 돌아가기
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Dialog open onOpenChange={(open) => (open ? undefined : closeModal())}>
            <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-foreground">
                        {profile.name}
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground">
                        {profile.tagline}
                    </p>
                </DialogHeader>
                <ScrollArea className="max-h-[70vh] pr-2">
                    <div className="grid gap-6 py-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
                        <div className="space-y-5">
                            <div className="flex items-start gap-4 rounded-2xl border border-border/30 bg-muted p-4 dark:bg-slate-900/60">
                                {profile.image ? (
                                    <img
                                        src={profile.image}
                                        alt={`${profile.name} avatar`}
                                        className="h-20 w-20 rounded-xl border border-border/40 bg-card object-cover"
                                    />
                                ) : (
                                    <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-border/40 bg-muted text-xl font-semibold text-foreground">
                                        {profile.name
                                            .replace(/\(.*\)/, "")
                        .trim()
                        .slice(0, 2)}
                                    </div>
                                )}
                                <div className="space-y-3">
                                    <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                                        {profile.focus.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-border/40 bg-card px-3 py-1"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                    {profile.assetsValue ? (
                                        <div className="rounded-2xl border border-border/40 bg-card px-4 py-3 text-sm text-muted-foreground">
                                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                                                추정 자산 규모
                                            </p>
                                            <p className="mt-2 text-lg font-semibold text-foreground">
                                                {formatAssetValue(profile.assetsValue)}
                                            </p>
                                            {profile.assets ? (
                                                <p className="mt-1 text-xs">
                                                    {profile.assets}
                                                </p>
                                            ) : null}
                                        </div>
                                    ) : null}
                                    <div className="rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary dark:border-primary/40 dark:bg-primary/15 dark:text-primary-foreground">
                                        <p className="text-xs uppercase tracking-[0.2em] text-primary/70 dark:text-primary-foreground/80">
                                            Donut Grade
                                        </p>
                                        <p className="mt-1 text-2xl font-semibold">
                                            {donutGrade.toFixed(1)}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground/70">
                                        {Object.entries(profile.metrics).map(
                                            ([key, value]) => (
                                                <span
                                                    key={key}
                                                    className="rounded-full border border-border/40 bg-card px-3 py-1"
                                                >
                                                    {translateMetric(
                                                        key as keyof typeof profile.metrics
                                                    )}{" "}
                                                    · {value}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                                    자료 · SNS 링크
                                </h3>
                                <ul className="grid gap-2 text-sm text-muted-foreground">
                                    {profile.socials.length === 0 ? (
                                        <li>등록된 링크가 없습니다.</li>
                                    ) : (
                                        profile.socials.map((social) => (
                                            <li key={social.url}>
                                                <a
                                                    href={social.url}
                                                    className="text-primary underline-offset-4 hover:underline"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {social.label}
                                                </a>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                                    최근 뉴스
                                </h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    {profile.latestNews.length === 0 ? (
                                        <li>최근 뉴스가 없습니다.</li>
                                    ) : (
                                        profile.latestNews.map((news) => (
                                            <li
                                                key={`${news.source}-${news.published}`}
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
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </div>
                        </div>
                        <Card className="border border-border/40 bg-card shadow-inner dark:bg-slate-950/60">
                            <CardContent className="flex flex-col items-center gap-4 p-4">
                                <RadarChart metrics={profile.metrics} minHeight={260} />
                                <p className="text-center text-xs text-muted-foreground/80">
                                    점수는 최근 12개월 데이터를 기준으로 산출했습니다.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
