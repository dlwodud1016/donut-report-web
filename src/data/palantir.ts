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
    price: "$205.04",
    updated: "업데이트: 2025년 11월 03일",
    summary:
        "정부와 대기업이 쌓아 둔 데이터를 연결하고, 인공지능이 바로 활용할 수 있는 형태로 다듬어 주는 데이터 플랫폼 기업입니다. Donut Report 에서는 “쉬운 말로 설명하는 리포트” 를 제공중입니다.",
    heroPoints: [
        "정부·민간 매출 비중이 5:5로 안정적인 구조",
        "기존 고객 NRR 113% → 쓰면 쓸수록 지출이 늘어나는 제품",
        '"인공지능 셰프" 비유로 복잡한 사업을 쉽게 전달',
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
    { label: "연 매출 성장률", value: "+21%", tone: "positive" },
    { label: "기존 고객 NRR", value: "113%", tone: "positive" },
    { label: "영업이익률", value: "16%", tone: "attention" },
    { label: "현금 및 투자 여력", value: "12억 달러", tone: "positive" },
];

export const highlightCards: HighlightCard[] = [
    {
        icon: "🧑‍🍳",
        title: "비즈니스 모델",
        body: "팔란티어는 데이터를 손질해주는 “인공지능 셰프”예요. 복잡한 데이터를 정리하고 AI가 바로 활용할 수 있게 레시피를 짜줍니다.",
    },
    {
        icon: "🏛️",
        title: "고객 구조",
        body: "정부 50% · 민간 50% 비중으로 균형 잡힌 매출 구조를 보유합니다. 국방부 계약이 안정적인 현금흐름을 제공합니다.",
    },
    {
        icon: "🧱",
        title: "AI 플랫폼 전략",
        body: "AIP(AI Platform)를 통해 고객이 직접 워크플로를 조립할 수 있도록 “레고 블록” 형태로 기능을 제공합니다.",
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
        value: "75.6억 달러",
        detail: "FY24 대비 +164%, 연평균 성장률(CAGR) 26%",
        tone: "positive",
    },
    {
        label: "FY27 예상 영업이익",
        value: "21.8억 달러",
        detail: "규모의 경제로 영업이익률 28%까지 확대",
        tone: "positive",
    },
    {
        label: "애널리스트 커버리지",
        value: "27명의 전망",
        detail: "커버리지 확대로 수익·매출 추정 업데이트가 매달 발생",
        tone: "neutral",
    },
];

export const futureChecks: FutureCheck[] = [
    {
        label: "성장률이 안전자산을 웃돔",
        description:
            "예상 EPS 성장률(31.6%)이 미국 10년물 채권 수익률(3.1%)을 크게 상회합니다.",
        status: "pass",
    },
    {
        label: "시장 평균 대비 높은 성장",
        description:
            "앞으로 3년간 연평균 EPS 성장률이 글로벌 소프트웨어 업계 평균을 두 배 이상 앞섭니다.",
        status: "pass",
    },
    {
        label: "고성장 요건 충족",
        description:
            "애널리스트 전망 기준 매출·이익이 모두 연 20% 이상 증가하는 “High Growth” 조건에 부합합니다.",
        status: "pass",
    },
    {
        label: "매출 성장과 산업 추세",
        description:
            "데이터 인프라·AI 산업 평균(10.5%)보다 빠른 25.1% 매출 성장률을 예상합니다.",
        status: "pass",
    },
];

export const recentGrowthUpdates: RecentGrowthUpdate[] = [
    {
        title: "2025년 가이던스 상향 — 매출 +21%, 영업이익 +18%",
        date: "2025.08.05",
        tag: "실적",
        summary:
            "2분기 실적 발표에서 올해 가이던스를 재차 상향했습니다. 경기 둔화 우려에도 정부·민간 계약 모두 견조합니다.",
    },
    {
        title: "AIP 2.0 출시 — 고객이 직접 워크플로 설계",
        date: "2025.07.18",
        tag: "제품",
        summary:
            "데이터 연결부터 보고서 자동화까지 한 화면에서 설계할 수 있게 되면서 신규 PoC 요청이 늘고 있습니다.",
    },
    {
        title: "미 국방부 프로젝트 3년 연장 확정",
        date: "2025.06.30",
        tag: "계약",
        summary:
            "연 4억 달러 규모의 국방부 계약이 2028년까지 연장돼 향후 투자 비용을 떠받쳐줄 현금흐름이 확보됐습니다.",
    },
];

export const timelineItems: TimelineItem[] = [
    {
        title: "미 국방부 계약 3년 연장",
        date: "2025.10.28",
        summary: "전체 매출의 15% 안전판 확보",
        detail: "수년째 담당하던 군 정보 분석 프로젝트가 3년 추가 연장됐습니다. 약 4억 달러 규모라 향후 실험과 성장을 뒷받침할 현금흐름이 생깁니다.",
        tone: "positive",
    },
    {
        title: "AI Platform(AIP) 대규모 업데이트",
        date: "2025.10.15",
        summary: "고객이 직접 워크플로 조립",
        detail: "데이터 연결부터 보고서 자동화까지 한 화면에서 설계하도록 지원합니다. 경쟁사도 유사 기능을 내고 있어 차별화가 과제로 남아 있습니다.",
        tone: "neutral",
    },
    {
        title: "주가 급등 후 숨 고르기",
        date: "2025.10.01",
        summary: "AI 테마 랠리 후 15% 조정",
        detail: "실적보다는 투자 심리 요인이 컸습니다. 단기 변동성은 높지만 장기적으론 계약 지속성·고객 유지율이 관건입니다.",
        tone: "attention",
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
