import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadarChart } from "@/components/charts/radar-chart";
import { tastemakerProfiles } from "@/data/tastemakers";
import { cn } from "@/lib/utils";

const axisExplanations = [
    {
        label: "영향력",
        description: "미디어 언급, 업계 인용도, 시장에 미치는 영향력 지수",
    },
    {
        label: "정확성",
        description: "발언·투자 아이디어의 실현 비율과 장기 성과 추적",
    },
    {
        label: "관여도",
        description: "SNS·커뮤니티 참여도와 팔로잉 성장률",
    },
    {
        label: "투명성",
        description: "포지션 공개, 투자 노트 공유 빈도 등 정보 개방성",
    },
    {
        label: "신뢰도",
        description: "외부 평판, 규제 리스크, 윤리성 평가",
    },
] as const;

export function TastemakersPage(): JSX.Element {
    return (
        <div className="flex flex-col gap-8">
            <Card className="border border-primary/30 bg-card p-8 shadow-lg dark:border-primary/40 dark:bg-slate-900/80 dark:shadow-2xl">
                <CardHeader className="gap-4">
                    <Badge className="w-fit bg-primary/15 text-primary">
                        트렌드 리더
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

            <Card className="border border-border/30 bg-card p-6 shadow-md dark:border-border/40">
                <CardHeader className="space-y-2 p-0">
                    <CardTitle className="text-lg text-foreground">
                        평가 기준 안내
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                        레이더 차트는 아래 다섯 개의 축을 기준으로 100점 만점으로 환산된 점수를 보여 줍니다.
                    </p>
                </CardHeader>
                <CardContent className="grid gap-3 p-0 md:grid-cols-2">
                    {axisExplanations.map((axis) => (
                        <div
                            key={axis.label}
                            className="flex gap-3 rounded-2xl border border-border/40 bg-muted/60 p-4 text-sm text-muted-foreground dark:bg-slate-900/60"
                        >
                            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-xs font-semibold text-accent-foreground">
                                {axis.label.slice(0, 1)}
                            </span>
                            <div>
                                <p className="font-semibold text-foreground">
                                    {axis.label}
                                </p>
                                <p>{axis.description}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <div className="grid gap-6 xl:grid-cols-2">
                {tastemakerProfiles.map((profile) => (
                    <Card
                        key={profile.id}
                        className="border border-border/40 bg-card p-6 shadow-lg dark:bg-slate-950/70 dark:shadow-xl dark:shadow-black/30"
                    >
                        <div className="flex flex-col gap-6 lg:flex-row">
                            <div className="flex-1 space-y-3">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            {profile.image ? (
                                                <img
                                                    src={profile.image}
                                                    alt={`${profile.name} avatar`}
                                                    className="h-14 w-14 rounded-xl border border-border/40 bg-muted object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border/40 bg-muted text-lg font-semibold text-foreground">
                                                    {profile.name.replace(/\(.*\)/, "").trim().slice(0, 2)}
                                                </div>
                                            )}
                                            <div>
                                                <h2 className="text-2xl font-semibold text-foreground">
                                                    {profile.name}
                                                </h2>
                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    {profile.focus}
                                                </p>
                                            </div>
                                        </div>
                                        <Badge className="bg-secondary/15 text-secondary-foreground/90 dark:bg-secondary/25 dark:text-secondary-foreground">
                                            최신 업데이트
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {profile.tagline}
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
                                                className="rounded-xl border border-border/40 bg-muted px-4 py-3 dark:bg-slate-950/60"
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
                            <Card
                                className={cn(
                                    "flex flex-col justify-center border border-border/40 bg-card shadow-inner dark:bg-slate-950/60",
                                    "lg:w-[260px]"
                                )}
                            >
                                <CardContent className="flex flex-col items-center gap-4 p-4">
                                    <RadarChart metrics={profile.metrics} minHeight={240} />
                                    <p className="text-center text-xs text-muted-foreground/80">
                                        점수는 최근 12개월 데이터를 기준으로 산출했습니다.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
