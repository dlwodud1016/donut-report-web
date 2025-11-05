import { hero, navSections } from "@/data/palantir";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Sidebar(): JSX.Element {
    return (
        <aside className="flex flex-col gap-6">
            <Card className="border-primary/30 bg-gradient-to-br from-slate-900/90 via-blue-900/60 to-slate-950/80 p-0 text-foreground shadow-2xl">
                <CardHeader className="items-center gap-2 rounded-t-3xl bg-slate-950/40 p-6 text-center">
                    <Badge className="bg-primary/30 text-primary-foreground/80">
                        성장주
                    </Badge>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/25 via-slate-950/70 to-blue-900/30 text-xl font-semibold text-emerald-100 shadow-[0_12px_24px_rgba(16,185,129,0.25)]">
                        {hero.ticker.replace("NASDAQ:", "").trim()}
                    </div>
                    <CardTitle className="text-xl text-foreground">
                        {hero.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                        {hero.ticker}
                    </p>
                    <p className="text-2xl font-semibold text-foreground">
                        {hero.price}
                    </p>
                    <p className="text-sm text-muted-foreground/90">
                        AI 데이터 플랫폼 · 정부 & 민간 고객
                    </p>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    <div className="grid grid-cols-2 gap-4 text-left">
                        <div className="rounded-2xl border border-border/40 bg-slate-950/50 p-3">
                            <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground/80">
                                시가총액
                            </p>
                            <p className="mt-1 text-lg font-semibold text-foreground">
                                $20.3B
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/40 bg-slate-950/50 p-3">
                            <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground/80">
                                업데이트
                            </p>
                            <p className="mt-1 text-lg font-semibold text-foreground">
                                2025.11.05
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-border/40 bg-slate-950/70 p-0 text-sm text-muted-foreground">
                <CardHeader className="p-6 pb-4">
                    <CardTitle className="text-base text-foreground">
                        리포트 목차
                    </CardTitle>
                </CardHeader>
                <Separator className="bg-border/60" />
                <CardContent className="space-y-3 p-6">
                    <ul className="space-y-2 text-muted-foreground/80">
                        {navSections.map((item) => (
                            <li key={item.anchor}>
                                <a
                                    href={item.anchor}
                                    className="text-sm transition-colors hover:text-primary"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            {/* <Card className="border-border/40 bg-slate-950/70 p-0 text-sm text-muted-foreground">
                <CardHeader className="p-6 pb-4">
                    <CardTitle className="text-base text-foreground">
                        최근 본 리포트
                    </CardTitle>
                </CardHeader>
                <Separator className="bg-border/60" />
                <CardContent className="space-y-2 p-6 text-muted-foreground/80">
                    <p>Snowflake · 데이터 클라우드</p>
                    <p>CrowdStrike · 보안 SaaS</p>
                    <p>ServiceNow · 워크플로 플랫폼</p>
                </CardContent>
            </Card> */}
        </aside>
    );
}
