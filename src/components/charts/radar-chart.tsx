import { memo, useMemo, type CSSProperties } from "react"
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
} from "recharts"

import type {
  TastemakerMetricKey,
  TastemakerMetrics,
} from "@/data/tastemakers"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const axisLabels: Record<TastemakerMetricKey, string> = {
  impact: "영향력",
  accuracy: "정확성",
  engagement: "관여도",
  transparency: "투명성",
  credibility: "신뢰도",
}

type AxisDefinition<TKey extends string> = {
  key: TKey
  label: string
}

const defaultAxes: AxisDefinition<TastemakerMetricKey>[] = [
  { key: "impact", label: axisLabels.impact },
  { key: "accuracy", label: axisLabels.accuracy },
  { key: "engagement", label: axisLabels.engagement },
  { key: "transparency", label: axisLabels.transparency },
  { key: "credibility", label: axisLabels.credibility },
]

type RadarChartProps<TKey extends string = TastemakerMetricKey> = {
  metrics: Record<TKey, number>
  maxValue?: number
  className?: string
  minHeight?: number
  style?: CSSProperties
  axes?: AxisDefinition<TKey>[]
}

const chartConfig: ChartConfig = {
  score: {
    label: "점수",
    color: "hsl(var(--chart-1))",
  },
}

export const RadarChart = memo(function RadarChart<TKey extends string = TastemakerMetricKey>({
  metrics,
  maxValue = 100,
  className,
  minHeight = 240,
  style,
  axes,
}: RadarChartProps<TKey>) {
  const axisDefinitions = (axes ?? (defaultAxes as unknown as AxisDefinition<TKey>[]))

  const chartData = useMemo(
    () =>
      axisDefinitions.map(({ key, label }) => ({
        axisKey: key,
        axisLabel: label,
        score: Math.max(0, Math.min(maxValue, metrics[key] ?? 0)),
      })),
    [axisDefinitions, metrics, maxValue]
  )

  return (
    <ChartContainer
      config={chartConfig}
      className={cn(
        "mx-auto aspect-square w-full max-w-[280px]",
        className
      )}
      style={{ minHeight, aspectRatio: "1 / 1", ...style }}
    >
      <RechartsRadarChart
        data={chartData}
        outerRadius="75%"
        margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
      >
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              indicator="line"
              labelFormatter={(_, payload) =>
                payload?.[0]?.payload.axisLabel ?? ""
              }
            />
          }
        />
        <PolarAngleAxis
          dataKey="axisLabel"
          tick={{
            fill: "hsl(var(--foreground) / 0.7)",
            fontSize: 11,
            letterSpacing: "0.12em",
          }}
          stroke="hsl(var(--border) / 0.6)"
          strokeWidth={1}
        />
        <PolarGrid
          stroke="hsl(var(--border) / 0.65)"
          strokeWidth={1.2}
          strokeDasharray="4 4"
          radialLines
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, maxValue]}
          tick={false}
          axisLine={false}
        />
        <Radar
          name="점수"
          dataKey="score"
          stroke="hsl(var(--border) / 0.9)"
          strokeWidth={2.4}
          fill="var(--color-score)"
          fillOpacity={0.4}
          animationDuration={600}
          animationEasing="ease-out"
        />
      </RechartsRadarChart>
    </ChartContainer>
  )
})
