import { DonutIcon } from "@/components/icons/donut-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Topbar(): JSX.Element {
    return (
        <header className="flex items-center justify-between gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-blue-900/60 px-6 py-5 shadow-2xl shadow-black/40 backdrop-blur-md">
            <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-slate-900/40 via-blue-900/50 to-slate-950/70 p-1">
                    <DonutIcon className="h-full w-full" variant="glass" />
                </div>
                <div className="leading-tight">
                    <p className="text-sm font-semibold tracking-[0.08em] text-muted-foreground/80">
                        DONUT REPORT
                    </p>
                    <p className="text-base font-semibold text-foreground">
                        도넛 먹으며 읽는 리포트
                    </p>
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center gap-4">
                <Input
                    className="max-w-lg bg-slate-950/40"
                    placeholder="회사명 또는 티커 검색"
                />
            </div>
            <div className="flex items-center gap-2">
                <Button
                    variant="ghost"
                    className="border-border/60 bg-slate-950/50 px-5 text-muted-foreground hover:bg-slate-900/60"
                >
                    뉴스레터 구독
                </Button>
                {/* <Button className="px-5">로그인</Button> */}
            </div>
        </header>
    );
}
