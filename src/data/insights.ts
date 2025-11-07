export type CompanyMetricKey =
    | "growth"
    | "profitability"
    | "stability"
    | "momentum"
    | "valuation";

export type CompanyMetrics = Record<CompanyMetricKey, number>;

export type CompanyNarrativeHighlight = {
    title: string;
    description: string;
};

export type CompanyNewsItem = {
    title: string;
    source: string;
    url: string;
    published: string;
};

export type CompanyMetricDetail = {
    label: string;
    value: string;
    context: string;
    tone: "positive" | "neutral" | "attention";
};

export type CompanyInsight = {
    id: string;
    name: string;
    brandLabel: string;
    industry: string;
    ticker: string;
    summary: string;
    focus: string[];
    revenueScale: string;
    headquarters: string;
    metrics: CompanyMetrics;
    metricDetails: CompanyMetricDetail[];
    highlights: CompanyNarrativeHighlight[];
    latestNews: CompanyNewsItem[];
};

export const companyInsights: CompanyInsight[] = [
    {
        id: "palantir",
        name: "Palantir Technologies",
        brandLabel: "데이터·AI 플랫폼",
        industry: "소프트웨어 · 미국 나스닥",
        ticker: "NYSE: PLTR",
        summary:
            "정부·민간 고객 대상 데이터 통합과 AI 오케스트레이션을 제공하는 플랫폼 기업. 장기 계약 기반의 안정성과 AIP Upsell을 통한 확장 모멘텀이 동시에 작동합니다.",
        focus: ["데이터 인프라", "AI 오케스트레이션", "정부 계약"],
        revenueScale: "2024년 매출 25.3억 달러",
        headquarters: "미국 콜로라도",
        metrics: {
            growth: 86,
            profitability: 63,
            stability: 82,
            momentum: 78,
            valuation: 48,
        },
        metricDetails: [
            {
                label: "매출 성장률",
                value: "YoY +26%",
                context: "정부 + 민간 부문 모두 25%대 성장 유지",
                tone: "positive",
            },
            {
                label: "EBIT 마진",
                value: "17%",
                context: "Stock-based comp 축소로 2년 연속 개선",
                tone: "positive",
            },
            {
                label: "현금/부채",
                value: "현금 32억 · 무차입",
                context: "순현금 구조로 경기 방어력 우수",
                tone: "positive",
            },
            {
                label: "AIP 파이프라인",
                value: "분기 신규 660건",
                context: "상용 고객 3분기 연속 두 자릿수 증가",
                tone: "positive",
            },
            {
                label: "주가 밸류에이션",
                value: "EV/S 14배",
                context: "AI 프리미엄 반영돼 업계 평균 대비 높음",
                tone: "attention",
            },
        ],
        highlights: [
            {
                title: "장기 계약 + AIP 업셀",
                description:
                    "국방·정보기관 등 장기 계약이 베이스라인을 만들고, AIP가 민간 고객 확장 속도를 끌어올립니다.",
            },
            {
                title: "현금 창출력 개선",
                description:
                    "잉여현금흐름률이 30%를 넘기며 수익성 개선이 가시화되었습니다.",
            },
        ],
        latestNews: [
            {
                title: "미 공군, AIP 기반 AI 작전실험 확대",
                source: "DoD",
                url: "https://www.defense.gov/",
                published: "2025-02-18",
            },
            {
                title: "Palantir, 에너지 업계와 AI 운영센터 공동 구축",
                source: "Bloomberg",
                url: "https://www.bloomberg.com/",
                published: "2025-01-30",
            },
        ],
    },
    {
        id: "snowflake",
        name: "Snowflake",
        brandLabel: "데이터 클라우드",
        industry: "소프트웨어 · 미국 뉴욕증권거래소",
        ticker: "NYSE: SNOW",
        summary:
            "기업 데이터 저장·분석 플랫폼에서 AI 워크로드로 확장 중. 파트너 생태계 기반의 확장성이 강점이지만 사용량 변동에 따른 실적 변동성이 존재합니다.",
        focus: ["데이터 웨어하우스", "AI 워크로드", "파트너 생태계"],
        revenueScale: "2024 회계연도 매출 30.0억 달러",
        headquarters: "미국 몬태나",
        metrics: {
            growth: 78,
            profitability: 55,
            stability: 72,
            momentum: 70,
            valuation: 52,
        },
        metricDetails: [
            {
                label: "제품 매출 성장",
                value: "YoY +24%",
                context: "사용량 회복세 침체 후 반등",
                tone: "neutral",
            },
            {
                label: "조정 영업이익률",
                value: "11%",
                context: "파트너 리베이트와 R&D 투자 지속",
                tone: "neutral",
            },
            {
                label: "순현금",
                value: "현금 53억 · 무차입",
                context: "강한 현금 포지션으로 인수 투자 여력",
                tone: "positive",
            },
            {
                label: "AI 파이프라인",
                value: "700+ 고객 PoC",
                context: "Llama, Azure 등 파트너십 확대로 확대",
                tone: "positive",
            },
            {
                label: "주가 밸류에이션",
                value: "EV/S 11배",
                context: "장기 성장 Story 반영, 변동성 주의",
                tone: "attention",
            },
        ],
        highlights: [
            {
                title: "Usage 기반 모델의 회복",
                description:
                    "고객 데이터 소비량이 경기 둔화를 지나 회복 구간에 진입했습니다.",
            },
            {
                title: "AI 파트너 생태계",
                description:
                    "Azure, Nvidia와의 협력으로 AI 워크로드 유치 경쟁력을 확보했습니다.",
            },
        ],
        latestNews: [
            {
                title: "Snowflake, Cortex AI 정식 출시",
                source: "Snowflake",
                url: "https://www.snowflake.com/",
                published: "2025-02-12",
            },
            {
                title: "Databricks와의 경쟁 심화",
                source: "WSJ",
                url: "https://www.wsj.com/",
                published: "2025-01-25",
            },
        ],
    },
    {
        id: "crowdstrike",
        name: "CrowdStrike",
        brandLabel: "사이버 보안 플랫폼",
        industry: "사이버 보안 · 미국 나스닥",
        ticker: "NASDAQ: CRWD",
        summary:
            "엔드포인트 보안에서 시작해 클라우드, 아이덴티티, 데이터 보호까지 확장한 통합 보안 플랫폼. 재무 체질과 고객 락인이 모두 우수합니다.",
        focus: ["엔드포인트 보안", "클라우드 보안", "구독"],
        revenueScale: "2024 회계연도 매출 36.6억 달러",
        headquarters: "미국 텍사스",
        metrics: {
            growth: 84,
            profitability: 68,
            stability: 76,
            momentum: 82,
            valuation: 54,
        },
        metricDetails: [
            {
                label: "ARR 성장",
                value: "YoY +33%",
                context: "고객당 구독 모듈 5.9개 → 7.1개",
                tone: "positive",
            },
            {
                label: "영업현금흐름률",
                value: "36%",
                context: "강력한 현금 창출력",
                tone: "positive",
            },
            {
                label: "순현금",
                value: "현금 38억 · 부채 7억",
                context: "순현금 기업이라 안정성 우수",
                tone: "positive",
            },
            {
                label: "클라우드 워크로드",
                value: "신규 ARR 비중 22%",
                context: "신규 제품 모듈 성장 속도↑",
                tone: "positive",
            },
            {
                label: "주가 밸류에이션",
                value: "EV/S 12배",
                context: "프리미엄 밸류 유지 중",
                tone: "attention",
            },
        ],
        highlights: [
            {
                title: "플랫폼 전략",
                description:
                    "단일 에이전트 전략으로 고객 잠금효과가 강력합니다.",
            },
            {
                title: "AI 보안 수요",
                description:
                    "Gemini AI 기반 탐지로 위협 응답 속도가 빨라졌습니다.",
            },
        ],
        latestNews: [
            {
                title: "FedRAMP High 인증 획득",
                source: "FedRAMP",
                url: "https://www.fedramp.gov/",
                published: "2025-02-05",
            },
            {
                title: "CrowdStrike, 클라우드 워크로드 보호 제품 확장",
                source: "CRN",
                url: "https://www.crn.com/",
                published: "2025-01-22",
            },
        ],
    },
];
