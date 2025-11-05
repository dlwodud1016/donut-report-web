export type NavSection = { label: string; anchor: string };

export type MetricChip = {
    label: string;
    value: string;
    tone: "positive" | "neutral" | "attention";
};

export type HighlightCard = { icon: string; title: string; body: string };

export type ComparisonCard = {
    name: string;
    description: string;
    upside: string;
    risk: string;
};

export type TimelineItem = {
    title: string;
    date: string;
    summary: string;
    detail: string;
    tone: "positive" | "neutral" | "attention";
};

export type ActionStep = { heading: string; context: string; tasks: string[] };

export type ForecastStat = {
    label: string;
    value: string;
    detail: string;
    tone: "positive" | "neutral" | "attention";
};

export type FutureCheck = {
    label: string;
    description: string;
    status: "pass" | "attention";
};

export type RecentGrowthUpdate = {
    title: string;
    date: string;
    tag: "실적" | "제품" | "계약";
    summary: string;
};

export const hero = {
    industry: "소프트웨어 · 미국 나스닥",
    name: "Palantir Technologies Inc",
    ticker: "NASDAQ: PLTR",
    price: "$190.70",
    updated: "업데이트: 2025년 11월 04일",
    summary:
        "정부와 대기업이 쌓아 둔 데이터를 연결해 사람이나 AI가 바로 이해할 수 있게 정리해 주는 플랫폼 회사입니다. 쉽게 말해 흩어진 자료를 한 번에 쓰게 만들어 시간을 줄여 줍니다. 주요 증권사 평균 전망은 향후 3년 동안 매출이 매년 26.6%, 한 주당 이익(EPS)이 25.5% 늘고, 회사가 자본을 굴리는 효율(ROE)은 28.9%까지 높아질 것으로 보고 있습니다.",
    heroPoints: [
        "향후 3년 동안 매출과 한 주당 이익이 모두 20%대 중반 성장할 거라는 전망이 나옵니다.",
        "정부와 민간 고객 비중이 비슷해 한쪽 경기가 식어도 다른 쪽이 받쳐 줄 수 있습니다.",
        '복잡한 데이터를 요리 재료처럼 정리해 AI에게 건네는 "인공지능 셰프" 비유로 쉽게 설명합니다.',
    ],
};

export const navSections: NavSection[] = [
    { label: "2. 팔란티어 성장 이야기", anchor: "#section-2" },
    { label: "2.1 매출이 얼마나 늘어날까?", anchor: "#section-2-1" },
    { label: "2.2 돈 버는 곳은 어떻게 나뉘나", anchor: "#section-2-2" },
    { label: "2.3 한 주당 벌어들일 돈(EPS)", anchor: "#section-2-3" },
    { label: "2.4 자본을 얼마나 잘 굴리나(ROE)", anchor: "#section-2-4" },
    { label: "2.5 비슷한 성장주와 비교", anchor: "#section-2-5" },
];

export const metricChips: MetricChip[] = [
    { label: "3년 예상 매출 증가율", value: "+26.6%", tone: "positive" },
    { label: "3년 예상 EPS 증가율", value: "+25.5%", tone: "positive" },
    { label: "3년 뒤 예상 ROE(자본 효율)", value: "28.9%", tone: "positive" },
    { label: "애널리스트 시각", value: "27명 · 추세 양호", tone: "neutral" },
    { label: "주가수익비율(P/E: 주가가 이익의 몇 배인지)", value: "약 413배", tone: "attention" },
    { label: "주가매출비율(P/S: 매출 대비 가격)", value: "약 116배", tone: "attention" },
];

export const highlightCards: HighlightCard[] = [
    {
        icon: "🧠",
        title: "데이터를 요리하는 AI 플랫폼",
        body: "팔란티어는 흩어진 데이터를 손질해 AI가 바로 쓸 수 있는 한 접시로 내놓습니다. Foundry와 AIP라는 도구 조합이 핵심입니다.",
    },
    {
        icon: "📈",
        title: "앞으로 3년 성장 전망",
        body: "증권사 평균 전망으로는 향후 3년 동안 매출과 한 주당 이익이 매년 20%대 중반 성장할 것으로 보입니다.",
    },
    {
        icon: "🔐",
        title: "장기 계약 기반",
        body: "미 국방부 같은 공공기관과 맺은 장기 계약이 매출의 안전판 역할을 하고, 민간 기업으로 확장하며 추가 성장을 노립니다.",
    },
];

export const comparisonCards: ComparisonCard[] = [
    {
        name: "Snowflake (SNOW)",
        description:
            "대기업이 데이터를 저장하고 분석하는 데 쓰는 클라우드 서비스로 이름을 알렸습니다.",
        upside: "클라우드 파트너와 손잡고 고객을 빠르게 늘릴 가능성이 큽니다.",
        risk: "사용량에 따라 요금이 달라져 경기가 나쁘면 매출이 흔들릴 수 있습니다.",
    },
    {
        name: "C3.ai (AI)",
        description: "에너지·제조 같은 산업에 맞춘 AI 솔루션을 제공하는 소프트웨어 회사입니다.",
        upside: "특정 산업에 맞춘 모델 덕분에 신규 계약이 늘고 있습니다.",
        risk: "아직 이익이 나지 않고, 몇몇 큰 고객에 매출이 집중돼 있는 점은 부담입니다.",
    },
];

export const forecastStats: ForecastStat[] = [
    {
        label: "FY27 예상 매출",
        value: "82.5억 달러",
        detail: "2024년 대비 약 164% 증가, 연평균으로는 26.6%씩 늘어나는 셈입니다.",
        tone: "positive",
    },
    {
        label: "FY27 예상 순이익",
        value: "25.1억 달러",
        detail: "연평균 29.2% 속도로 이익이 커질 것으로 보여 몸집이 커질수록 이익도 늘어난다는 뜻입니다.",
        tone: "positive",
    },
    {
        label: "3년 EPS 증가율",
        value: "+25.5%",
        detail: "소프트웨어 업계 평균 성장률(약 20%)보다 빠르게 한 주당 이익이 늘어난다는 계산입니다.",
        tone: "positive",
    },
];

export const futureChecks: FutureCheck[] = [
    {
        label: "성장률이 채권보다 높음",
        description:
            "예상 EPS 성장률(29.2%)이 미국 10년물 국채 수익률(3.1%)보다 훨씬 높아 위험을 감수할 여지가 있습니다.",
        status: "pass",
    },
    {
        label: "시장 평균 대비 높은 성장",
        description:
            "향후 3년 동안 한 주당 이익 증가율이 약 25.5%로, 미국 주식시장 평균(16%)을 크게 앞섭니다.",
        status: "pass",
    },
    {
        label: "고성장 요건 충족",
        description:
            "증권사 전망 기준으로 매출과 이익이 모두 연 20% 이상 늘어나는 고성장 조건을 충족합니다.",
        status: "pass",
    },
    {
        label: "매출 성장과 산업 추세",
        description:
            "데이터 인프라·AI 산업 평균 성장률(약 10.5%)보다 빠른 연 26.6% 매출 증가가 기대됩니다.",
        status: "pass",
    },
];

export const recentGrowthUpdates: RecentGrowthUpdate[] = [
    {
        title: "3분기 2025 실적: 매출과 한 주당 이익이 기대 이상",
        date: "2025.11.04",
        tag: "실적",
        summary:
            "3분기 실적에서 매출과 한 주당 이익이 모두 증권사 예상치를 넘어서 연간 목표를 다시 확인했습니다.",
    },
    {
        title: "Red Cat 드론에 VNav 통합 테스트 성공",
        date: "2025.10.27",
        tag: "계약",
        summary:
            "Black Widow™ 드론에 Palantir의 항법 소프트웨어(VNav)를 실어 시험 비행을 성공했고, 국방 파트너십을 넓히는 계기가 됐습니다.",
    },
    {
        title: "헬스케어 AI 랩 ‘R37’ 공동 론칭",
        date: "2025.03.14",
        tag: "제품",
        summary:
            "의료 스타트업 R1과 함께 Palantir AIP를 기반으로 한 ‘R37’ AI 랩을 발표해 병원의 수익과 비용 흐름을 자동화하는 방법을 보여 줬습니다.",
    },
];

export const timelineItems: TimelineItem[] = [
    {
        title: "2025년 3분기 실적 서프라이즈",
        date: "2025.11.04",
        summary: "매출과 한 주당 이익이 모두 예상치 상회",
        detail: "3분기 실적 발표에서 수익과 매출이 모두 증권사가 예상한 수준을 넘어섰습니다. 연간 20%대 성장을 이어 갈 수 있다는 자신감을 다시 확인했습니다.",
        tone: "positive",
    },
    {
        title: "VNav 드론 테스트 완료",
        date: "2025.10.27",
        summary: "방산 파트너십 확장",
        detail: "Red Cat Holdings와 협력해 Palantir의 항법 소프트웨어가 들어간 Black Widow™ 드론 시험 비행을 마쳤습니다. 국방 분야에서 제품 신뢰도를 높이는 사건이었습니다.",
        tone: "positive",
    },
    {
        title: "헬스케어 AI 랩 R37 출시",
        date: "2025.03.14",
        summary: "AIP 의료 워크플로 가속",
        detail: "R1과 함께 ‘R37’ AI 랩을 공개해 병원 재무 흐름을 자동화하는 사례를 보여 줬습니다. Palantir AIP가 산업별로 어떻게 쓰일 수 있는지 증명했습니다.",
        tone: "neutral",
    },
];

export const actionSteps: ActionStep[] = [
    {
        heading: "1) 리포트 수동 작성",
        context:
            "노션이나 워드로 직접 쓰면서 말투를 다듬고, 핵심 메시지를 잡습니다.",
        tasks: [
            "사업 설명 — “인공지능 셰프” 비유 활용",
            "최근 뉴스 3건 요약 (쉬운 말)",
            "재무 지표 3개 + 의미 해석",
        ],
    },
    {
        heading: "2) 10명에게 보여주기",
        context:
            "가족·친구·커뮤니티 독자에게 공유해 이해도와 흥미를 확인합니다.",
        tasks: [
            "“이해됐나요?” “다음 것도 보고 싶나요?” 질문",
            "피드백 메모 템플릿 기록",
            "어디서 막혔는지 바로 추적",
        ],
    },
];

export const decisionRule = {
    go: "✅ “이해 잘 됨” 7명 이상 → Phase 1 자동화 실험 진행",
    pivot: "❌ 5명 이하 → 콘셉트와 말투 재설계",
    reminder:
        "숫자뿐 아니라 어떤 표현이 통했는지, 어디서 막혔는지를 꼭 기록해 주세요.",
};
