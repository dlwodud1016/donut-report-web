import { DonutIcon } from "@/components/icons/donut-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useNavigate, useRouterState } from "@tanstack/react-router";

type ViewKey = "home" | "report" | "tastemakers";

const pathToView = (pathname: string): ViewKey => {
    if (pathname.startsWith("/report")) {
        return "report";
    }
    if (pathname.startsWith("/tastemakers")) {
        return "tastemakers";
    }
    return "home";
};

const viewToPath: Record<ViewKey, string> = {
    home: "/",
    report: "/report",
    tastemakers: "/tastemakers",
};

export function Topbar(): JSX.Element {
    const { location } = useRouterState();
    const navigate = useNavigate();
    const currentView = pathToView(location.pathname);

    const handleNavigate = (view: ViewKey): void => {
        void navigate({ to: viewToPath[view] });
    };

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
                {currentView === "report" ? (
                    <Input
                        className="max-w-lg bg-slate-950/40"
                        placeholder="회사명 또는 티커 검색"
                    />
                ) : (
                    <p className="max-w-lg text-center text-sm text-muted-foreground/80">
                        도넛 한 조각 먹는 잠깐의 시간에 읽는, 가볍고 맛있는 주식
                        인사이트를 전해 드립니다.
                    </p>
                )}
            </div>
            <div className="flex items-center gap-2">
                {(
                    [
                        { key: "home", label: "브랜드 홈" },
                        { key: "report", label: "인사이트" },
                        { key: "tastemakers", label: "트렌드 리더" },
                    ] satisfies { key: ViewKey; label: string }[]
                ).map((item) => (
                    <Button
                        key={item.key}
                        variant="ghost"
                        className={cn(
                            "border border-transparent bg-slate-950/40 px-4 text-muted-foreground hover:border-border/60 hover:bg-slate-900/60",
                            currentView === item.key &&
                                "border-primary/40 bg-primary/20 text-primary-foreground/80 hover:border-primary/60 hover:bg-primary/25"
                        )}
                        onClick={() => handleNavigate(item.key)}
                    >
                        {item.label}
                    </Button>
                ))}
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
