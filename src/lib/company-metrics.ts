import type { CompanyMetricKey, CompanyInsight } from "@/data/insights";

export const companyMetricKeys: readonly CompanyMetricKey[] = [
    "growth",
    "profitability",
    "stability",
    "momentum",
    "valuation",
] as const;

export const companyMetricExplanations: ReadonlyArray<{
    key: CompanyMetricKey;
    label: string;
    title: string;
    description: string;
}> = [
    {
        key: "growth",
        label: "Growth Pulse",
        title: "성장력",
        description:
            "매출·EPS 성장률, 사용자·고객 증가율 등 덩치가 얼마나 빨리 커지는지 보여 줍니다.",
    },
    {
        key: "profitability",
        label: "Profit Engine",
        title: "수익성",
        description:
            "영업이익률, EBITDA 마진, FCF 마진으로 규모를 키우며 돈을 버는 효율을 확인합니다.",
    },
    {
        key: "stability",
        label: "Balance & Cash Shield",
        title: "안정성",
        description:
            "부채비율, 현금 대비 차입금, 이자보상배율 등 재무 안전판이 얼마나 탄탄한지 나타냅니다.",
    },
    {
        key: "momentum",
        label: "Market Traction",
        title: "모멘텀",
        description:
            "핵심 고객 확보, 주문잔고, ARR 순증 등 앞으로 실적을 떠받치는 성장 동력을 다룹니다.",
    },
    {
        key: "valuation",
        label: "Valuation Reality Check",
        title: "밸류/리스크",
        description:
            "PER, EV/EBITDA, Rule of 40, PEG 등 현재 가격에 반영된 기대와 리스크를 점검합니다.",
    },
];

const companyMetricWeights: Record<CompanyMetricKey, number> = {
    growth: 0.22,
    profitability: 0.2,
    stability: 0.18,
    momentum: 0.22,
    valuation: 0.18,
};

const sigmoid = (value: number): number => 1 / (1 + Math.exp(-value));

export function computeCompanyDonutGrade(company: CompanyInsight): number {
    const weightedSum = companyMetricKeys.reduce((acc, key) => {
        return acc + companyMetricWeights[key] * (company.metrics[key] / 100);
    }, 0);
    const logisticInput = (weightedSum - 0.5) * 6;
    return sigmoid(logisticInput) * 100;
}

export function translateCompanyMetric(metric: CompanyMetricKey): string {
    switch (metric) {
        case "growth":
            return "성장력";
        case "profitability":
            return "수익성";
        case "stability":
            return "안정성";
        case "momentum":
            return "모멘텀";
        case "valuation":
            return "밸류에이션";
        default:
            return metric;
    }
}
