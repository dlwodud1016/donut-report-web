import { useNavigate } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { DonutIcon } from "@/components/icons/donut-icon";
import { ModeToggle } from "@/components/ui/mode-toggle";

const navItems = [
    { label: "리포트", to: "/report" as const },
    { label: "인플루언서", to: "/tastemakers" as const },
] as const;

export function TopBar(): JSX.Element {
    const navigate = useNavigate();

    return (
        <header className="flex flex-wrap items-center justify-between gap-4">
            <div
                className="flex cursor-pointer items-center gap-2 text-lg font-semibold text-foreground"
                onClick={() => navigate({ to: "/" })}
                onKeyDown={(e) =>
                    e.key === "Enter" && navigate({ to: "/" })
                }
                role="button"
                tabIndex={0}
            >
                <DonutIcon
                    className="h-8 w-8 text-primary"
                    variant="glass"
                />
                Donut Report
            </div>
            <nav className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {navItems.map((item) => (
                    <Button
                        key={item.to}
                        variant="ghost"
                        className="px-3 text-muted-foreground hover:text-primary"
                        onClick={() => navigate({ to: item.to })}
                    >
                        {item.label}
                    </Button>
                ))}
            </nav>
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    className="border-border/60 text-sm text-muted-foreground"
                    onClick={() => navigate({ to: "/report" })}
                >
                    로그인
                </Button>
                <ModeToggle />
            </div>
        </header>
    );
}
