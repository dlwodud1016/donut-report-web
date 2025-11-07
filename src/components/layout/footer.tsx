import { DonutIcon } from "@/components/icons/donut-icon";
export function Footer(): JSX.Element {
    return (
        <footer className="px-4 py-6 text-center text-xs uppercase tracking-[0.35em] text-muted-foreground/70">
            <div className="flex flex-col items-center gap-3 text-foreground">
                <DonutIcon className="h-7 w-7 text-primary" variant="glass" />
                <p className="text-sm tracking-[0.2em] text-muted-foreground/80">
                    DONUT REPORT
                </p>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">© 2025 Donut Report</p>
        </footer>
    );
}
