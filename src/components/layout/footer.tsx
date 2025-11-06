import { DonutIcon } from "../icons/donut-icon";

export function Footer(): JSX.Element {
    return (
        <footer className="rounded-3xl border border-border/30 bg-white/85 px-10 py-12 text-sm text-muted-foreground shadow-lg dark:border-border/40 dark:bg-slate-950/60 dark:shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground text-2xl dark:bg-secondary dark:text-secondary-foreground">
                        <DonutIcon className="h-full w-full" variant="glass" />
                    </div>
                    <div>
                        <p className="text-base font-semibold text-foreground">
                            Donut Report
                        </p>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
                            이해하기 쉬운 투자 리포트
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    <div>
                        <p className="text-sm font-semibold text-foreground">
                            Company
                        </p>
                        <ul className="mt-3 space-y-2">
                            <li>About</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-foreground">
                            Support
                        </p>
                        <ul className="mt-3 space-y-2">
                            <li>피드백 보내기</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
                © 2025 Donut Report. All rights reserved.
            </p>
        </footer>
    );
}
