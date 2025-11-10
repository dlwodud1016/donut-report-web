import { useEffect, useRef, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

type ThreadsProps = {
    amplitude?: number;
    distance?: number;
    enableMouseInteraction?: boolean;
    lineCount?: number;
    className?: string;
};

export function Threads({
    amplitude = 1,
    distance = 0,
    enableMouseInteraction = true,
    lineCount = 24,
    className,
}: ThreadsProps): JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!enableMouseInteraction) {
            return;
        }
        const container = containerRef.current;
        if (!container) {
            return;
        }
        const handleMove = (event: MouseEvent): void => {
            const rect = container.getBoundingClientRect();
            const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
            const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
            container.style.setProperty("--threads-tilt-x", `${offsetX * amplitude * 8}px`);
            container.style.setProperty("--threads-tilt-y", `${offsetY * amplitude * 8}px`);
        };
        window.addEventListener("mousemove", handleMove);
        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, [amplitude, enableMouseInteraction]);

    const lines = Array.from({ length: lineCount });

    return (
        <div
            ref={containerRef}
            className={cn("threads-bg", className)}
            style={
                {
                    "--threads-amplitude": amplitude,
                    "--threads-distance": distance,
                } as CSSProperties
            }
        >
            {lines.map((_, index) => (
                <span
                    key={index}
                    className="threads-bg__line"
                    style={{
                        animationDelay: `${index * 0.8}s`,
                        top: `${index * 12}px`,
                        opacity: 0.35 + (index % 5) * 0.1,
                    }}
                />
            ))}
        </div>
    );
}
