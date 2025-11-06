import { memo } from "react";

import type {
    TastemakerMetricKey,
    TastemakerMetrics,
} from "@/data/tastemakers";
import { cn } from "@/lib/utils";

const axisLabels: Record<TastemakerMetricKey, string> = {
    impact: "영향력",
    accuracy: "정확성",
    engagement: "관여도",
    transparency: "투명성",
    credibility: "신뢰도",
};

const axes: TastemakerMetricKey[] = [
    "impact",
    "accuracy",
    "engagement",
    "transparency",
    "credibility",
];

type RadarChartProps = {
    metrics: TastemakerMetrics;
    size?: number;
    maxValue?: number;
    className?: string;
};

export const RadarChart = memo(function RadarChart({
    metrics,
    size = 220,
    maxValue = 100,
    className,
}: RadarChartProps) {
    const center = size / 2;
    const strokeColor = "rgba(148, 163, 184, 0.45)";
    const spokeColor = "rgba(148, 163, 184, 0.25)";
    const regionColor = "rgba(56, 189, 248, 0.35)";
    const regionStroke = "rgba(14, 165, 233, 0.9)";

    const radius = center * 0.82;
    const stepCount = 4;

    const polarToCartesian = (value: number, index: number): { x: number; y: number } => {
        const angle = ((Math.PI * 2) / axes.length) * index - Math.PI / 2;
        const ratio = Math.max(0, Math.min(1, value / maxValue));
        const r = radius * ratio;
        return {
            x: center + Math.cos(angle) * r,
            y: center + Math.sin(angle) * r,
        };
    };

    const regionPoints = axes
        .map((axis, index) => {
            const point = polarToCartesian(metrics[axis], index);
            return `${point.x},${point.y}`;
        })
        .join(" ");

    const gridPolygons = Array.from({ length: stepCount }, (_, step) => {
        const ratio = (step + 1) / stepCount;
        const points = axes
            .map((axis, index) => {
                const point = polarToCartesian(maxValue * ratio, index);
                return `${point.x},${point.y}`;
            })
            .join(" ");
        return points;
    });

    return (
        <div className={cn("relative", className)} style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Influencer radar chart">
                <g>
                    {gridPolygons.map((points, idx) => (
                        <polygon
                            key={`grid-${idx}`}
                            points={points}
                            fill="none"
                            stroke={strokeColor}
                            strokeWidth={1}
                        />
                    ))}
                    {axes.map((axis, index) => {
                        const { x, y } = polarToCartesian(maxValue, index);
                        return (
                            <line
                                key={axis}
                                x1={center}
                                y1={center}
                                x2={x}
                                y2={y}
                                stroke={spokeColor}
                                strokeWidth={1}
                            />
                        );
                    })}
                    <polygon
                        points={regionPoints}
                        fill={regionColor}
                        stroke={regionStroke}
                        strokeWidth={2}
                    />
                    {axes.map((axis, index) => {
                        const { x, y } = polarToCartesian(maxValue * 1.02, index);
                        return (
                            <text
                                key={`label-${axis}`}
                                x={x}
                                y={y}
                                textAnchor="middle"
                                className="fill-slate-200 text-[11px] font-medium uppercase tracking-[0.18em]"
                            >
                                {axisLabels[axis]}
                            </text>
                        );
                    })}
                    {axes.map((axis, index) => {
                        const { x, y } = polarToCartesian(metrics[axis], index);
                        return (
                            <g key={`value-${axis}`}>
                                <circle
                                    cx={x}
                                    cy={y}
                                    r={4}
                                    fill="rgba(14,165,233,0.9)"
                                    stroke="rgba(12,74,110,0.8)"
                                    strokeWidth={1.5}
                                />
                                <text
                                    x={x}
                                    y={y - 8}
                                    textAnchor="middle"
                                    className="fill-slate-100 text-xs font-semibold"
                                >
                                    {metrics[axis]}
                                </text>
                            </g>
                        );
                    })}
                </g>
            </svg>
        </div>
    );
});
