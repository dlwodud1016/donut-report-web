import type {
    TastemakerMetricKey,
    TastemakerProfile,
} from "@/data/tastemakers";

export const metricKeys: readonly TastemakerMetricKey[] = [
    "impact",
    "accuracy",
    "engagement",
    "transparency",
    "credibility",
] as const;

export const metricWeights: Record<TastemakerMetricKey, number> = {
    impact: 0.2,
    accuracy: 0.2,
    engagement: 0.2,
    transparency: 0.2,
    credibility: 0.2,
};

const sigmoid = (value: number): number => 1 / (1 + Math.exp(-value));

export function computeDonutGrade(profile: TastemakerProfile): number {
    const weightedSum = metricKeys.reduce((accum, key) => {
        return accum + metricWeights[key] * (profile.metrics[key] / 100);
    }, 0);
    const logisticInput = (weightedSum - 0.5) * 6;
    return sigmoid(logisticInput) * 100;
}

export function translateMetric(metric: TastemakerMetricKey): string {
    switch (metric) {
        case "impact":
            return "영향력";
        case "accuracy":
            return "정확성";
        case "engagement":
            return "관여도";
        case "transparency":
            return "투명성";
        case "credibility":
            return "신뢰도";
        default:
            return metric;
    }
}

export function formatAssetValue(value: number): string {
    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: value >= 10 ? 0 : 1,
        maximumFractionDigits: value >= 10 ? 0 : 1,
    });
    return `${formatter.format(value)}B`;
}
