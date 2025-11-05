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
        "정부와 대기업이 쌓아 둔 데이터를 연결하고, 인공지능이 바로 활용할 수 있는 형태로 다듬어 주는 데이터 플랫폼 기업입니다. 2025년 11월 기준 애널리스트 컨센서스는 향후 3년 매출 26.6%, EPS 25.5% 성장과 ROE 28.9%를 전망하고 있습니다.",
    heroPoints: [
        "미래 성장 체크리스트 6/6 통과 — EPS 성장률 25.5%, ROE 28.9%",
        "정부·민간 매출이 50:50으로 균형 잡혀 장기 계약과 업셀이 공존",
        '"인공지능 셰프" 비유로 복잡한 데이터 파이프라인을 쉽게 설명',
    ],
};

export const navSections: NavSection[] = [
    { label: "2. 팔란티어 미래 성장", anchor: "#section-2" },
    { label: "2.1 수익 및 매출 성장 전망", anchor: "#section-2-1" },
    { label: "2.2 수익 다변화 계획", anchor: "#section-2-2" },
    { label: "2.3 주당순이익(EPS) 전망", anchor: "#section-2-3" },
    { label: "2.4 자기자본이익률(ROE)", anchor: "#section-2-4" },
    { label: "2.5 비교할 성장주", anchor: "#section-2-5" },
];

export const metricChips: MetricChip[] = [
    { label: "예상 매출 성장률", value: "+26.6%", tone: "positive" },
    { label: "예상 EPS 성장률", value: "+25.5%", tone: "positive" },
    { label: "3년 후 ROE", value: "28.9%", tone: "positive" },
    { label: "애널리스트 커버리지", value: "Good · 27명", tone: "neutral" },
    { label: "P/E Ratio", value: "413.0x", tone: "attention" },
    { label: "P/S Ratio", value: "116.1x", tone: "attention" },
];

export const highlightCards: HighlightCard[] = [
    {
        icon: "🧠",
        title: "데이터-중심 AI 플랫폼",
        body: "팔란티어는 복잡한 원천 데이터를 정리하고 AI가 바로 활용할 수 있게 만드는 Foundry·AIP 조합으로 가치 사슬을 통제합니다.",
    },
    {
        icon: "📈",
        title: "3년 성장 궤적",
        body: "애널리스트 전망 기준 향후 3년 매출은 연 26.6%, EPS는 25.5% 성장하며 성장성 체크리스트 6/6을 충족했습니다.",
    },
    {
        icon: "🔐",
        title: "장기 계약 기반",
        body: "미 국방부 등 공공 부문 장기 계약이 매출의 약 15% 안전판을 제공하고, 민간 업셀과 AIP PoC 확대가 성장 엔진을 담당합니다.",
    },
];

export const comparisonCards: ComparisonCard[] = [
    {
        name: "Snowflake (SNOW)",
        description:
            "데이터 클라우드 강자로, 대기업 데이터 파이프라인에서 경쟁 중.",
        upside: "대규모 클라우드 파트너십으로 빠른 고객 확장",
        risk: "사용량 기반 모델이라 경기 둔화 시 매출 변동성이 큼",
    },
    {
        name: "C3.ai (AI)",
        description: "산업별 맞춤 AI 솔루션을 제공하는 중견 소프트웨어 기업.",
        upside: "에너지·제조 특화 모델로 신규 계약 확대 중",
        risk: "수익성 악화와 고객 집중도가 높아 리스크 존재",
    },
];

export const forecastStats: ForecastStat[] = [
    {
        label: "FY27 예상 매출",
        value: "82.5억 달러",
        detail: "FY24 대비 +164%, 연평균 성장률(CAGR) 26.6%",
        tone: "positive",
    },
    {
        label: "FY27 예상 순이익",
        value: "25.1억 달러",
        detail: "이익 CAGR 29.2%로 규모의 경제 가속",
        tone: "positive",
    },
    {
        label: "3년 EPS CAGR",
        value: "+25.5%",
        detail: "소프트웨어 업계 평균 성장률(20%)을 앞지름",
        tone: "positive",
    },
];

export const futureChecks: FutureCheck[] = [
    {
        label: "성장률이 안전자산을 웃돔",
        description:
            "예상 EPS 성장률(29.2%)이 미국 10년물 국채 수익률(3.1%)을 크게 상회합니다.",
        status: "pass",
    },
    {
        label: "시장 평균 대비 높은 성장",
        description:
            "향후 3년 EPS CAGR 25.5%로 미국 시장 평균 성장률(16%)을 뛰어넘습니다.",
        status: "pass",
    },
    {
        label: "고성장 요건 충족",
        description:
            "애널리스트 컨센서스 기준 매출·이익 모두 연 20% 이상 증가하는 “High Growth” 트리거에 부합합니다.",
        status: "pass",
    },
    {
        label: "매출 성장과 산업 추세",
        description:
            "데이터 인프라·AI 산업 평균(10.5%)보다 빠른 26.6% 매출 성장률을 예상합니다.",
        status: "pass",
    },
];

export const recentGrowthUpdates: RecentGrowthUpdate[] = [
    {
        title: "3분기 2025 실적: 매출·EPS 컨센서스 상회",
        date: "2025.11.04",
        tag: "실적",
        summary:
            "3분기 실적에서 매출과 EPS가 모두 전망치를 넘어서며 연간 가이던스를 다시 확인했습니다.",
    },
    {
        title: "Red Cat 드론에 VNav 통합 테스트 성공",
        date: "2025.10.27",
        tag: "계약",
        summary:
            "Black Widow™ 드론에 Palantir의 VNav 소프트웨어를 탑재한 비행 테스트가 완료돼 방산 파트너십이 확대되고 있습니다.",
    },
    {
        title: "헬스케어 AI 랩 ‘R37’ 공동 론칭",
        date: "2025.03.14",
        tag: "제품",
        summary:
            "R1과 함께 Palantir AIP 기반의 ‘R37’ AI 랩을 공개하며 의료 수익 사이클을 자동화하는 워크플로를 선보였습니다.",
    },
];

export const timelineItems: TimelineItem[] = [
    {
        title: "2025년 3분기 실적 서프라이즈",
        date: "2025.11.04",
        summary: "매출·EPS 모두 컨센서스 상회",
        detail: "3분기 실적 발표에서 수익과 매출이 모두 애널리스트 전망치를 넘어섰습니다. 연간 성장률 20%대 전망이 유지되며 가이던스를 재확인했습니다.",
        tone: "positive",
    },
    {
        title: "VNav 드론 테스트 완료",
        date: "2025.10.27",
        summary: "방산 파트너십 확장",
        detail: "Red Cat Holdings와의 협업으로 VNav 소프트웨어를 탑재한 Black Widow™ 드론 시험 비행을 성공적으로 마쳤습니다. 국방 부문의 기술 신뢰도를 높였습니다.",
        tone: "positive",
    },
    {
        title: "헬스케어 AI 랩 R37 출시",
        date: "2025.03.14",
        summary: "AIP 의료 워크플로 가속",
        detail: "R1과 공동으로 ‘R37’ AI 랩을 공개해 헬스케어 재무 사이클 자동화 솔루션을 선보였습니다. AIP의 산업별 응용 범위를 넓히는 계기가 됐습니다.",
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
