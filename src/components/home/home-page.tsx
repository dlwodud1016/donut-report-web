import { DonutIcon } from "@/components/icons/donut-icon";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/palantir";
import { useNavigate } from "@tanstack/react-router";

const brandHighlights = [
    {
        title: "한 입 크기의 요약",
        description:
            "3분 안에 핵심만 집어 주는 리포트라 도넛 한 조각 먹는 사이에도 읽을 수 있어요.",
    },
    {
        title: "데이터가 말해 주는 이야기",
        description:
            "증권사 컨센서스, 재무 지표, 실제 계약 뉴스까지 한눈에 연결합니다.",
    },
    {
        title: "친근한 비유로 이해하기",
        description:
            "“인공지능 셰프”처럼 어려운 용어는 비유로 풀어 설명해 비전문가도 쉽게 이해할 수 있어요.",
    },
] as const;

export function HomePage(): JSX.Element {
    const navigate = useNavigate();
    const goReport = (): void => {
        void navigate({ to: "/report" });
    };

    return (
        <main className="flex flex-col gap-12">
            <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-slate-900/90 via-blue-900/60 to-slate-950/80 p-10 shadow-[0_35px_120px_-35px_rgba(14,116,144,0.45)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.25),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.25),transparent_45%)]" />
                <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                    <div className="space-y-6">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                            Donut Report
                        </span>
                        <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                            도넛 시간에 가볍게 읽는
                            <br />
                            한 입 주식 리포트
                        </h1>
                        <p className="max-w-xl text-lg text-slate-100/80">
                            Donut Report는 투자 고수를 위한 어려운 리포트 대신,
                            비전문가도 바로 이해할 수 있는 “한 입 크기” 인사이트를
                            전합니다. 흩어진 데이터를 한데 모아 맛있는 이야기로
                            구워 내는 것이 우리의 브랜드입니다.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Button
                                size="lg"
                                onClick={goReport}
                                className="px-6"
                            >
                                오늘의 리포트 맛보기
                            </Button>
                            <p className="text-sm text-muted-foreground/80">
                                최신 리포트:
                                <span className="ml-2 font-semibold text-foreground">
                                    {hero.name}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="relative flex h-48 w-48 flex-col items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-amber-200/20 via-amber-500/10 to-purple-500/10 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.35)] backdrop-blur sm:h-52 sm:w-52 md:h-60 md:w-60 lg:mr-4 xl:mr-10">
                            <DonutIcon className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40" variant="glass" />
                            <div className="pointer-events-none mt-6 w-48 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/90 shadow-lg shadow-black/30 backdrop-blur sm:w-52 md:absolute md:right-4 md:top-6 md:mt-0 md:w-56 lg:right-6 xl:right-8">
                                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">
                                    Motto
                                </p>
                                <p className="mt-1 font-semibold">
                                    Bite-sized insights,
                                    <br />
                                    café-level vibes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <section className="grid gap-4 md:grid-cols-3">
                {brandHighlights.map((item) => (
                    <Card
                        key={item.title}
                        className="border-border/40 bg-slate-950/70 p-6"
                    >
                        <CardHeader className="gap-3">
                            <CardTitle className="text-xl text-foreground">
                                {item.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-2 text-sm text-muted-foreground">
                            {item.description}
                        </CardContent>
                    </Card>
                ))}
            </section>

            <Card className="border-border/40 bg-slate-950/70 p-8">
                <CardHeader className="space-y-2">
                    <CardTitle className="text-2xl text-foreground">
                        오늘의 리포트 미리보기
                    </CardTitle>
                    <p className="text-base text-muted-foreground">
                        지금 발행된 팔란티어 리포트는 이런 흐름을 담고 있어요.
                        본문에서는 더 많은 지표와 친근한 설명을 만나볼 수
                        있습니다.
                    </p>
                </CardHeader>
                <CardContent className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                    <div className="space-y-4 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-slate-950/70 to-blue-900/30 p-6 shadow-inner">
                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary/70">
                            <span className="rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-primary/80">
                                {hero.industry}
                            </span>
                            <span>{hero.ticker}</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground">
                            {hero.name}
                        </h3>
                        <p className="text-base text-slate-100/80">
                            {hero.summary}
                        </p>
                    </div>
                    <div className="space-y-4 rounded-3xl border border-border/40 bg-slate-950/60 p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground/80">
                            Donut Tasting Notes
                        </p>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            {hero.heroPoints.map((point) => (
                                <li
                                    key={point}
                                    className="rounded-2xl border border-border/40 bg-slate-950/60 px-4 py-3 text-foreground/90"
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <Button
                            variant="outline"
                            className="w-full border-primary/40 text-primary hover:bg-primary/10"
                            onClick={goReport}
                        >
                            전체 리포트 읽기
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}
