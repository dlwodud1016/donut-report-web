import { DonutIcon } from "@/components/icons/donut-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { useTheme } from "@/components/theme/theme-provider";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";

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
    const { theme, toggleTheme } = useTheme();

    const handleNavigate = (view: ViewKey): void => {
        void navigate({ to: viewToPath[view] });
    };

    return (
        <header className="flex flex-col gap-4 rounded-3xl border border-border/50 bg-white px-4 py-4 shadow-xl backdrop-blur-md dark:border-border/60 dark:bg-slate-900/80 dark:shadow-2xl md:flex-row md:items-center md:justify-between md:px-6 md:py-5">
            <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/40 bg-muted p-1 dark:border-white/15 dark:bg-slate-900/50">
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
            <div className="flex w-full items-center justify-center gap-3 md:flex-1">
                <p className="max-w-xl text-center text-sm text-muted-foreground/70 dark:text-muted-foreground/80">
                    도넛 한 조각 먹는 잠깐의 시간에 읽는, 가볍고 맛있는 주식
                    인사이트를 전해 드립니다.
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
                <Toggle
                    aria-label="Toggle dark mode"
                    pressed={theme === "dark"}
                    onPressedChange={toggleTheme}
                    className="border border-border/50 bg-white/80 text-muted-foreground shadow-sm transition-colors hover:bg-secondary/80 dark:border-border/60 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                    <Sun
                        className={cn(
                            "h-4 w-4 transition",
                            theme === "dark"
                                ? "scale-75 opacity-35"
                                : "text-amber-500"
                        )}
                    />
                    <Moon
                        className={cn(
                            "h-4 w-4 transition",
                            theme === "light"
                                ? "scale-75 opacity-35"
                                : "text-sky-300"
                        )}
                    />
                </Toggle>
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
                            "border border-transparent bg-muted px-4 text-muted-foreground hover:border-border/60 hover:bg-muted/80 dark:bg-slate-950/40 dark:hover:bg-slate-900/60",
                            currentView === item.key &&
                                "border-primary/40 bg-primary/10 text-primary hover:border-primary/60 hover:bg-primary/20 dark:text-primary-foreground/80"
                        )}
                        onClick={() => handleNavigate(item.key)}
                    >
                        {item.label}
                    </Button>
                ))}
                <Button
                    variant="ghost"
                    className="border-border/50 bg-muted px-5 text-muted-foreground hover:bg-muted/80 dark:bg-slate-950/50 dark:hover:bg-slate-900/60"
                >
                    뉴스레터 구독
                </Button>
                {/* <Button className="px-5">로그인</Button> */}
            </div>
        </header>
    );
}
