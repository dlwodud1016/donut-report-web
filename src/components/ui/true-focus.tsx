import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type TrueFocusProps = {
    text: string;
    className?: string;
    highlightClassName?: string;
};

export function TrueFocus({
    text,
    className,
    highlightClassName,
}: TrueFocusProps): JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updatePosition = (event: PointerEvent): void => {
            const rect = container.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            container.style.setProperty("--focus-x", `${x}%`);
            container.style.setProperty("--focus-y", `${y}%`);
        };

        const resetPosition = (): void => {
            container.style.setProperty("--focus-x", "50%");
            container.style.setProperty("--focus-y", "50%");
        };

        window.addEventListener("pointermove", updatePosition);
        window.addEventListener("pointerleave", resetPosition);
        resetPosition();
        return () => {
            window.removeEventListener("pointermove", updatePosition);
            window.removeEventListener("pointerleave", resetPosition);
        };
    }, []);

    return (
        <div ref={containerRef} className={cn("true-focus", className)}>
            <span aria-hidden="true" className="true-focus__base">
                {text}
            </span>
            <span
                className={cn("true-focus__highlight", highlightClassName)}
                data-text={text}
            >
                {text}
            </span>
        </div>
    );
}
