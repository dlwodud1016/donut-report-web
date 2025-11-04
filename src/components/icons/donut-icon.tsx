import * as React from "react";

import { cn } from "@/lib/utils";

interface DonutIconProps extends React.SVGProps<SVGSVGElement> {
    variant?: "default" | "glass";
}

export function DonutIcon({
    className,
    variant = "default",
    ...props
}: DonutIconProps): JSX.Element {
    const glossOpacity = variant === "glass" ? 0.35 : 0.2;

    return (
        <svg
            viewBox="0 0 64 64"
            role="img"
            aria-label="Donut report icon"
            className={cn("drop-shadow-[0_6px_12px_rgba(15,23,42,0.35)]", className)}
            {...props}
        >
            <defs>
                <radialGradient id="donut-dough" cx="50%" cy="50%" r="52%">
                    <stop offset="0%" stopColor="#FDE68A" />
                    <stop offset="48%" stopColor="#FBBF24" />
                    <stop offset="100%" stopColor="#D97706" />
                </radialGradient>
                <linearGradient id="donut-frosting" x1="20%" x2="82%" y1="14%" y2="84%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="45%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#0EA5E9" />
                </linearGradient>
                <radialGradient id="donut-gloss" cx="36%" cy="30%" r="46%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity={glossOpacity} />
                    <stop offset="80%" stopColor="#FFFFFF" stopOpacity={0} />
                </radialGradient>
            </defs>
            <g fill="none">
                <path
                    d="M32 6c-14.36 0-26 11.64-26 26 0 2.45.33 4.83.95 7.08a11 11 0 0114.03 10.56c3.19 1.6 6.79 2.51 10.62 2.51 14.36 0 26-11.64 26-26 0-1.32-.1-2.62-.3-3.88A10.94 10.94 0 0048 12.08 26 26 0 0032 6z"
                    fill="url(#donut-dough)"
                />
                <path
                    d="M46.3 9.22c2.82 5.36.63 11.8-4.44 15.32a6.57 6.57 0 108.76 8.8C48.7 36.4 41.41 40 33.5 40 22.73 40 14 33.67 14 25.25 14 16.19 22.95 9 34.5 9c4.24 0 8.17.73 11.8 2.2z"
                    fill="url(#donut-frosting)"
                />
                <path
                    d="M21.5 17.5c1.6 2.32 1.12 5.6-1.08 7.31-2.2 1.7-5.35 1.3-6.95-.99-1.6-2.3-1.12-5.58 1.08-7.3 2.2-1.72 5.35-1.32 6.95.98zM33 39c1.44 2.25.73 5.25-1.58 6.7-2.3 1.44-5.36.87-6.8-1.38-1.45-2.24-.74-5.24 1.57-6.69 2.31-1.45 5.37-.88 6.81 1.37z"
                    fill="rgba(255,255,255,0.38)"
                />
                <path
                    d="M47.5 12c2.02 1.42 3.63 3.22 4.74 5.32-1.04.51-2.22.8-3.46.8-4.38 0-7.93-3.45-7.93-7.7 0-.4.03-.8.1-1.18 2.3.36 4.4 1.26 6.55 2.76z"
                    fill="url(#donut-gloss)"
                />
                <path
                    d="M40.45 30.34c-1.13 2-4.57 2.13-6.26.32-1.69-1.8-1.15-4.52.74-6.08 1.9-1.56 4.59-1.74 5.68.07 1.1 1.8 1 3.7-.16 5.69z"
                    fill="#020617"
                    opacity={0.25}
                />
                <path
                    d="M38.62 29.18c-.65 1.16-2.65 1.24-3.63.18-.98-1.06-.67-2.63.43-3.53 1.1-.9 2.66-1 3.3.04.64 1.04.58 2.14-.1 3.3z"
                    fill="#0F172A"
                    opacity={0.5}
                />
                <path
                    d="M19.5 12.5l1.8.9M24 13l1.2 2.2M28 12.5l2.1 1.1M22 9l1.1 2.4M40.5 36.7l1.6 1.3M45 34.4l1 1.8M14.5 30l2 .3"
                    stroke="#FDF2F8"
                    strokeLinecap="round"
                    strokeWidth={1.6}
                />
            </g>
        </svg>
    );
}
