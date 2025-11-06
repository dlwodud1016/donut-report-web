import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadarChart } from "@/components/charts/radar-chart";
import { tastemakerProfiles } from "@/data/tastemakers";
import { cn } from "@/lib/utils";

export function TastemakersPage(): JSX.Element {
    return (
        <div className="flex flex-col gap-8">
            <Card className="border-primary/30 bg-gradient-to-br from-slate-900/80 via-blue-900/40 to-slate-950/70 p-8 shadow-2xl shadow-cyan-500/20">
                <CardHeader className="gap-4">
                    <Badge className="w-fit bg-primary/30 text-primary-foreground/80">
                        테이스트메이커스
                    </Badge>
                    <CardTitle className="text-3xl font-semibold text-foreground md:text-4xl">
                        인플루언서 영향력 평가 — 다섯 축으로 보는 신뢰도
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                        Donut Report 테이스트메이커 인덱스는 금융·투자 인플루언서를{" "}
                        <span className="text-foreground font-semibold">
                            영향력, 정확성, 관여도, 투명성, 신뢰도
                        </span>{" "}
                        다섯 축으로 살펴봅니다. 각 점수는 최근 리서치 인용도,
                        퍼포먼스 검증, 커뮤니티 반응, 공개 커뮤니케이션 빈도, 외부
                        평가를 기반으로 100점 만점으로 정리했습니다.
                    </p>
                    <p>
                        아래 레이더 차트에서 인물별 강점과 약점을 빠르게 비교하고,
                        최신 SNS 활동과 관련 뉴스까지 모아서 확인해 보세요.
                    </p>
                </CardContent>
            </Card>

            <div className="grid gap-6 xl:grid-cols-2">
                {tastemakerProfiles.map((profile) => (
                    <Card
                        key={profile.id}
                        className="border-border/40 bg-slate-950/70 p-6 shadow-xl shadow-black/30 backdrop-blur"
                    >
                        <div className="flex flex-col gap-6 lg:flex-row">
                            <div className="flex-1 space-y-3">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-2xl font-semibold text-foreground">
                                            {profile.name}
                                        </h2>
                                        <Badge className="bg-slate-900/60 text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">
                                            {profile.focus}
                                        </Badge>
                                    </div>
                                    <p className="mt-2 text-sm text-muted-foreground/90">
                                        {profile.tagline}
                                    </p>
                                </div>
                                <div className="grid gap-2 text-sm text-muted-foreground/80">
                                    <p>
                                        <span className="font-semibold text-foreground/90">
                                            영향력
                                        </span>
                                        {" · "}
                                        업계 인용도와 시장에 미치는 영향력 지수.
                                    </p>
                                    <p>
                                        <span className="font-semibold text-foreground/90">
                                            정확성
                                        </span>
                                        {" · "}
                                        공개된 포트폴리오·발언의 실제 성과 추적.
                                    </p>
                                    <p>
                                        <span className="font-semibold text-foreground/90">
                                            관여도
                                        </span>
                                        {" · "}
                                        SNS·커뮤니티 상호작용과 팔로잉 성장률.
                                    </p>
                                    <p>
                                        <span className="font-semibold text-foreground/90">
                                            투명성
                                        </span>
                                        {" · "}
                                        포지션 공개, 투자 노트 공유 빈도.
                                    </p>
                                    <p>
                                        <span className="font-semibold text-foreground/90">
                                            신뢰도
                                        </span>
                                        {" · "}
                                        외부 평판과 규제/감독 리스크 노출도.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                                        자료 · SNS 링크
                                    </h3>
                                    <ul className="grid gap-2 text-sm">
                                        {profile.socials.map((social) => (
                                            <li key={social.url}>
                                                <a
                                                    href={social.url}
                                                    className="text-primary hover:text-primary/80 underline underline-offset-4"
                                                >
                                                    {social.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                                        최신 언급
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {profile.latestNews.map((news) => (
                                            <li
                                                key={`${profile.id}-${news.title}`}
                                                className="rounded-xl border border-border/40 bg-slate-950/60 px-4 py-3"
                                            >
                                                <p className="font-medium text-foreground">
                                                    <a
                                                        href={news.url}
                                                        className="hover:underline"
                                                    >
                                                        {news.title}
                                                    </a>
                                                </p>
                                                <p className="mt-1 text-xs text-muted-foreground/70">
                                                    {news.source} · {news.published}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div
                                className={cn(
                                    "flex flex-col items-center justify-center rounded-3xl border border-border/40 bg-slate-950/60 p-4 shadow-inner",
                                    "lg:w-[260px]"
                                )}
                            >
                                <RadarChart metrics={profile.metrics} size={240} />
                                <p className="mt-4 text-center text-xs text-muted-foreground/80">
                                    점수는 최근 12개월 데이터를 기준으로 산출했습니다.
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
