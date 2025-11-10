export type CompanyMetricKey =
    | "growth"
    | "profitability"
    | "stability"
    | "momentum"
    | "valuation"
    | "innovation"
    | "investorReturn";

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
    koreanName: string;
    brandLabel: string;
    logoUrl?: string;
    homepageUrl?: string; // Added homepageUrl field
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
        koreanName: "팔란티어 테크놀로지스",
        brandLabel: "데이터·AI 플랫폼",
        logoUrl: "/companies/palantir.jpeg",
        homepageUrl: "https://www.palantir.com/",
        industry: "소프트웨어 · 미국 나스닥",
        ticker: "NYSE: PLTR",
        summary:
            "정부·민간 고객 대상 데이터 통합과 AI 오케스트레이션을 제공하는 플랫폼 기업. 장기 계약 기반의 안정성과 AIP Upsell을 통한 확장 모멘텀이 동시에 작동합니다.",
        focus: ["데이터 인프라", "AI 오케스트레이션", "정부 계약"],
        revenueScale: "2024년 매출 25.3억 달러",
        headquarters: "미국 콜로라도",
        metrics: {
            growth: 92,
            profitability: 75,
            stability: 80,
            momentum: 90,
            valuation: 20,
            innovation: 95,
            investorReturn: 92,
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
        koreanName: "스노우플레이크",
        brandLabel: "데이터 클라우드",
        logoUrl: "/companies/snowflake.png",
        homepageUrl: "https://www.snowflake.com/",
        industry: "소프트웨어 · 미국 뉴욕증권거래소",
        ticker: "NYSE: SNOW",
        summary:
            "기업 데이터 저장·분석 플랫폼에서 AI 워크로드로 확장 중. 파트너 생태계 기반의 확장성이 강점이지만 사용량 변동에 따른 실적 변동성이 존재합니다.",
        focus: ["데이터 웨어하우스", "AI 워크로드", "파트너 생태계"],
        revenueScale: "2024 회계연도 매출 30.0억 달러",
        headquarters: "미국 몬태나",
        metrics: {
            growth: 78,
            profitability: 45,
            stability: 70,
            momentum: 55,
            valuation: 40,
            innovation: 88,
            investorReturn: 62,
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
        koreanName: "크라우드스트라이크",
        brandLabel: "사이버 보안 플랫폼",
        logoUrl: "/companies/crowdstrike.png",
        homepageUrl: "https://www.crowdstrike.com/",
        industry: "사이버 보안 · 미국 나스닥",
        ticker: "NASDAQ: CRWD",
        summary:
            "엔드포인트 보안에서 시작해 클라우드, 아이덴티티, 데이터 보호까지 확장한 통합 보안 플랫폼. 재무 체질과 고객 락인이 모두 우수합니다.",
        focus: ["엔드포인트 보안", "클라우드 보안", "구독"],
        revenueScale: "2024 회계연도 매출 36.6억 달러",
        headquarters: "미국 텍사스",
        metrics: {
            growth: 82,
            profitability: 68,
            stability: 75,
            momentum: 70,
            valuation: 35,
            innovation: 85,
            investorReturn: 78,
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
    {
        id: "cisco",
        name: "Cisco Systems",
        koreanName: "시스코 시스템즈",
        brandLabel: "AI 네트워킹 스택",
        logoUrl: "/companies/cisco.jpeg",
        homepageUrl: "https://www.cisco.com/",
        industry: "통신장비 · 미국 나스닥",
        ticker: "NASDAQ: CSCO",
        summary:
            "AI 팩토리를 뒷받침하는 스위치·라우터·보안 소프트웨어를 통합 제공. 실리콘원 칩과 광 모듈 번들로 하이퍼스케일 고객 침투율을 높이고 있습니다.",
        focus: ["AI 팩토리", "데이터센터 네트워크", "서비스 구독"],
        revenueScale: "2024 회계연도 매출 523억 달러",
        headquarters: "미국 캘리포니아",
        metrics: {
            growth: 42,
            profitability: 78,
            stability: 87,
            momentum: 58,
            valuation: 72,
            innovation: 55,
            investorReturn: 68,
        },
        metricDetails: [
            {
                label: "AI 스위치 백로그",
                value: "150억 달러",
                context:
                    "Hyperscaler 수주가 4분기 연속 증가하며 기록적인 수주잔고 확보",
                tone: "positive",
            },
            {
                label: "서비스 ARR",
                value: "360억 달러",
                context: "소프트웨어·보안 구독 비중이 44%까지 확대",
                tone: "positive",
            },
            {
                label: "영업이익률",
                value: "27%",
                context: "하이브리드 제조/서비스 믹스 개선으로 수익성 방어",
                tone: "positive",
            },
            {
                label: "EPS 성장",
                value: "YoY +5%",
                context: "AI 주문 인도 지연으로 단기 실적은 완만",
                tone: "neutral",
            },
            {
                label: "밸류에이션",
                value: "EV/EBITDA 11배",
                context: "대형 장비주 평균 수준으로 리레이팅 여지는 제한적",
                tone: "attention",
            },
        ],
        highlights: [
            {
                title: "실리콘원 기반 AI 패브릭",
                description:
                    "400G/800G 스위치와 광 모듈을 번들링해 고객당 TCV를 확대 중입니다.",
            },
            {
                title: "서비스형 네트워크",
                description:
                    "ThousandEyes·Meraki 등 구독 매출이 반복 수익 비중을 끌어올립니다.",
            },
        ],
        latestNews: [
            {
                title: "Cisco, 1.6Tbps 광 링크 로드맵 공개",
                source: "Cisco Blog",
                url: "https://blogs.cisco.com/",
                published: "2025-02-10",
            },
            {
                title: "미 국방부, Cisco 보안 스택 대규모 갱신",
                source: "DefenseOne",
                url: "https://www.defenseone.com/",
                published: "2025-01-28",
            },
        ],
    },
    {
        id: "cadence",
        name: "Cadence Design Systems",
        koreanName: "케이던스 디자인 시스템즈",
        brandLabel: "EDA · 시스템 IP",
        logoUrl: "/companies/cadence.jpeg",
        homepageUrl: "https://www.cadence.com/",
        industry: "소프트웨어 · 미국 나스닥",
        ticker: "NASDAQ: CDNS",
        summary:
            "AI 칩과 시스템 설계 자동화를 지원하는 소프트웨어 기업. 텐서 가속기, 패키징, 3D-IC까지 확장하며 AI 팩토리 고객을 선점하고 있습니다.",
        focus: ["EDA", "AI 칩 설계", "시스템 IP"],
        revenueScale: "2024 회계연도 매출 43.3억 달러",
        headquarters: "미국 캘리포니아",
        metrics: {
            growth: 78,
            profitability: 82,
            stability: 86,
            momentum: 76,
            valuation: 42,
            innovation: 88,
            investorReturn: 82,
        },
        metricDetails: [
            {
                label: "EDA 구독 성장",
                value: "YoY +17%",
                context: "AI 및 3D-IC tape-out 증가가 성장세 견인",
                tone: "positive",
            },
            {
                label: "조정 영업이익률",
                value: "41%",
                context: "고마진 소프트웨어 매출 비중이 90% 이상",
                tone: "positive",
            },
            {
                label: "시스템 IP 백로그",
                value: "24개월",
                context: "고객 설계 주기의 장기 계약화로 가시성 확대",
                tone: "positive",
            },
            {
                label: "순현금",
                value: "13억 달러",
                context: "무차입 구조로 인수·R&D 여력 충분",
                tone: "positive",
            },
            {
                label: "밸류에이션",
                value: "PER 48배",
                context: "성장 프리미엄이 이미 반영된 수준",
                tone: "attention",
            },
        ],
        highlights: [
            {
                title: "AI 팩토리 설계툴 표준화",
                description:
                    "고객 워크로드별 최적화된 전력·열 설계를 가속합니다.",
            },
            {
                title: "IP + 클라우드 번들",
                description:
                    "보드·패키지까지 포함한 설계 SaaS로 ARPU를 높이고 있습니다.",
            },
        ],
        latestNews: [
            {
                title: "Cadence, AWS와 AI 칩 공동 레퍼런스 공개",
                source: "AWS",
                url: "https://aws.amazon.com/",
                published: "2025-02-06",
            },
            {
                title: "삼성 파운드리, Cadence와 2nm 설계 협력 확대",
                source: "ET News",
                url: "https://www.etnews.com/",
                published: "2025-01-18",
            },
        ],
    },
    {
        id: "vertiv",
        name: "Vertiv Holdings",
        koreanName: "버티브 홀딩스",
        brandLabel: "데이터센터 전력·냉각",
        logoUrl: "/companies/vertiv.jpeg",
        homepageUrl: "https://www.vertiv.com/",
        industry: "산업재 · 뉴욕증권거래소",
        ticker: "NYSE: VRT",
        summary:
            "액침 냉각, 전력변환, 배터리 백업까지 AI 팩토리 인프라에 필수인 열·전력 솔루션을 공급. GPU 팜 증설 사이클의 직접 수혜주입니다.",
        focus: ["액침 냉각", "전력변환", "서비스"],
        revenueScale: "2024년 매출 90억 달러",
        headquarters: "미국 오하이오",
        metrics: {
            growth: 88,
            profitability: 72,
            stability: 72,
            momentum: 85,
            valuation: 45,
            innovation: 75,
            investorReturn: 90,
        },
        metricDetails: [
            {
                label: "액침 냉각 주문",
                value: "YoY +120%",
                context: "AI 데이터센터 전환 수요로 주문잔고 급증",
                tone: "positive",
            },
            {
                label: "조정 EBITDA 마진",
                value: "19%",
                context: "가격 인상과 믹스 개선으로 3년 연속 확장",
                tone: "positive",
            },
            {
                label: "순부채/EBITDA",
                value: "2.1배",
                context: "M&A 이후 레버리지 관리 필요",
                tone: "neutral",
            },
            {
                label: "서비스 백로그",
                value: "140억 달러",
                context: "장기 유지보수 계약으로 가시성 확보",
                tone: "positive",
            },
            {
                label: "밸류에이션",
                value: "EV/EBITDA 17배",
                context: "AI 모멘텀 기대치가 높은 편",
                tone: "attention",
            },
        ],
        highlights: [
            {
                title: "AI 팩토리 파워트레인",
                description:
                    "고효율 전력 모듈과 UPS로 전체 시스템 전력 효율을 높입니다.",
            },
            {
                title: "서비스 매출 확대",
                description:
                    "냉각·전력 유지보수 계약이 반복 매출을 키우고 있습니다.",
            },
        ],
        latestNews: [
            {
                title: "Vertiv, 액침 냉각 신규 공장 가동",
                source: "Vertiv",
                url: "https://www.vertiv.com/",
                published: "2025-02-03",
            },
            {
                title: "Nvidia, Vertiv와 AI 팩토리 레퍼런스 공개",
                source: "Reuters",
                url: "https://www.reuters.com/",
                published: "2025-01-20",
            },
        ],
    },
    {
        id: "hpe",
        name: "Hewlett Packard Enterprise",
        koreanName: "휴렛 팩커드 엔터프라이즈",
        brandLabel: "하이브리드 클라우드 & HPC",
        logoUrl: "/companies/hpe.png",
        homepageUrl: "https://www.hpe.com/",
        industry: "IT 인프라 · 뉴욕증권거래소",
        ticker: "NYSE: HPE",
        summary:
            "GreenLake 구독과 Cray 슈퍼컴으로 AI 팩토리 구축을 지원. 컴퓨팅, 스토리지, 서비스형 모델을 결합해 고객 락인을 강화하고 있습니다.",
        focus: ["GreenLake", "AI 팩토리", "슈퍼컴퓨팅"],
        revenueScale: "2024 회계연도 매출 299억 달러",
        headquarters: "미국 텍사스",
        metrics: {
            growth: 58,
            profitability: 67,
            stability: 77,
            momentum: 62,
            valuation: 68,
            innovation: 62,
            investorReturn: 65,
        },
        metricDetails: [
            {
                label: "GreenLake ARR",
                value: "YoY +35%",
                context: "서비스형 IT 매출이 전체의 24% 차지",
                tone: "positive",
            },
            {
                label: "AI 서버 매출",
                value: "분기 10억 달러",
                context: "Nvidia Grace Hopper 기반 솔루션 출하 확대",
                tone: "positive",
            },
            {
                label: "영업이익률",
                value: "9%",
                context: "하드웨어 비중 탓에 아직 낮은 편",
                tone: "neutral",
            },
            {
                label: "FCF",
                value: "18억 달러",
                context: "서비스 구독 증가로 현금 창출력 개선",
                tone: "positive",
            },
            {
                label: "밸류에이션",
                value: "EV/S 1.3배",
                context: "전통 IT 멀티플에 머물러 리레이팅 여지 있음",
                tone: "positive",
            },
        ],
        highlights: [
            {
                title: "AI 슈퍼컴 레퍼런스",
                description:
                    "Cray EX, Frontier 후속 대형 슈퍼컴 수주 경험을 AI 워크로드에 이식합니다.",
            },
            {
                title: "서비스형 인프라",
                description:
                    "GreenLake로 온·오프프리미스 인프라를 하나의 구독으로 묶어 제공합니다.",
            },
        ],
        latestNews: [
            {
                title: "HPE, Nvidia와 AI 팩토리 공조 확대",
                source: "HPE Newsroom",
                url: "https://www.hpe.com/us/en/newsroom.html",
                published: "2025-02-14",
            },
            {
                title: "GreenLake, SAP RISE와 통합 발표",
                source: "SAP",
                url: "https://www.sap.com/",
                published: "2025-01-27",
            },
        ],
    },
    {
        id: "uber",
        name: "Uber Technologies",
        koreanName: "우버 테크놀로지스",
        brandLabel: "모빌리티 · 배달 슈퍼앱",
        logoUrl: "/companies/uber.jpeg",
        homepageUrl: "https://www.uber.com/",
        industry: "모빌리티 · 미국 뉴욕증권거래소",
        ticker: "NYSE: UBER",
        summary:
            "승차호출과 배달, 물류를 하나의 플랫폼으로 묶고 자율주행 파트너십으로 단위 경제성을 개선 중입니다.",
        focus: ["모빌리티", "배달", "자율주행"],
        revenueScale: "2024년 매출 403억 달러",
        headquarters: "미국 캘리포니아",
        metrics: {
            growth: 72,
            profitability: 62,
            stability: 68,
            momentum: 72,
            valuation: 48,
            innovation: 78,
            investorReturn: 75,
        },
        metricDetails: [
            {
                label: "총예약(GMV)",
                value: "YoY +20%",
                context: "모빌리티·배달 모두 두 자릿수 성장",
                tone: "positive",
            },
            {
                label: "조정 EBITDA",
                value: "분기 14억 달러",
                context: "규모 확대로 마진이 4%포인트 개선",
                tone: "positive",
            },
            {
                label: "프리캐시플로우",
                value: "연 35억 달러",
                context: "수수료 선결제 구조로 현금 창출력 확대",
                tone: "positive",
            },
            {
                label: "자율주행 파트너십",
                value: "Waymo · Motional",
                context: "도심 자율주행 실증이 진행 중",
                tone: "neutral",
            },
            {
                label: "밸류에이션",
                value: "EV/매출 3.5배",
                context: "수익성 재평가 국면으로 변동성 존재",
                tone: "attention",
            },
        ],
        highlights: [
            {
                title: "수요·공급 매칭 알고리즘",
                description:
                    "AI 배차가 대기 시간을 단축해 고객 충성도를 높입니다.",
            },
            {
                title: "수익성 중심 성장",
                description: "배달·광고 조합으로 take-rate를 끌어올립니다.",
            },
        ],
        latestNews: [
            {
                title: "Uber, Waymo 자율주행 택시 샌프란 확대",
                source: "The Verge",
                url: "https://www.theverge.com/",
                published: "2025-02-11",
            },
            {
                title: "Uber Eats, Instacart와 제휴 체결",
                source: "CNBC",
                url: "https://www.cnbc.com/",
                published: "2025-01-29",
            },
        ],
    },
    {
        id: "stellantis",
        name: "Stellantis",
        koreanName: "스텔란티스",
        brandLabel: "소프트웨어 정의 OEM",
        logoUrl: "/companies/stellantis.png",
        homepageUrl: "https://www.stellantis.com/",
        industry: "자동차 · 유로넥스트",
        ticker: "NYSE: STLA",
        summary:
            "14개 브랜드를 가진 글로벌 OEM. 소프트웨어 정의 차량(STLA Brain)과 자율주행 파트너십으로 모빌리티 구독 매출을 확대하고 있습니다.",
        focus: ["EV", "소프트웨어 플랫폼", "자율주행"],
        revenueScale: "2024년 매출 1,890억 유로",
        headquarters: "네덜란드 암스테르담",
        metrics: {
            growth: 35,
            profitability: 52,
            stability: 58,
            momentum: 28,
            valuation: 88,
            innovation: 45,
            investorReturn: 35,
        },
        metricDetails: [
            {
                label: "소프트웨어 매출",
                value: "2024년 60억 유로",
                context: "구독형 서비스 매출이 YoY +20%",
                tone: "positive",
            },
            {
                label: "조정 EBIT 마진",
                value: "12%",
                context: "다중 브랜드 믹스에도 두 자릿수 유지",
                tone: "positive",
            },
            {
                label: "EV 출하",
                value: "YoY +28%",
                context: "유럽 EV 점유율 15% 돌파",
                tone: "positive",
            },
            {
                label: "자율주행 로드맵",
                value: "Waymo · Mobileye",
                context: "로보택시·상용 밴 실증 진행",
                tone: "neutral",
            },
            {
                label: "밸류에이션",
                value: "PER 4배",
                context: "저평가 상태로 배당+자사주 매입 여력 큼",
                tone: "positive",
            },
        ],
        highlights: [
            {
                title: "STLA Brain 플랫폼",
                description:
                    "차량 내 OTA·앱 스토어로 데이터 수익화를 노립니다.",
            },
            {
                title: "모듈형 EV 라인업",
                description:
                    "다양한 세그먼트를 한 배터리/모터 플랫폼으로 커버합니다.",
            },
        ],
        latestNews: [
            {
                title: "Stellantis, 중국 로보택시 합작 발표",
                source: "Reuters",
                url: "https://www.reuters.com/",
                published: "2025-02-07",
            },
            {
                title: "STLA Large 플랫폼 생산 돌입",
                source: "Automotive News",
                url: "https://www.autonews.com/",
                published: "2025-01-26",
            },
        ],
    },
    {
        id: "lucid",
        name: "Lucid Group",
        koreanName: "루시드 그룹",
        brandLabel: "프리미엄 EV",
        logoUrl: "/companies/lucid.png",
        homepageUrl: "https://www.lucidmotors.com/",
        industry: "전기차 · 미국 나스닥",
        ticker: "NASDAQ: LCID",
        summary:
            "고효율 드라이브트레인과 차세대 배터리를 강점으로 하는 프리미엄 EV 브랜드. 자율주행 센서셋과 OTA 기반 좌석 경험을 차별화 중입니다.",
        focus: ["전기차", "E-모터", "자율주행"],
        revenueScale: "2024년 매출 8.5억 달러",
        headquarters: "미국 캘리포니아",
        metrics: {
            growth: 55,
            profitability: 15,
            stability: 35,
            momentum: 40,
            valuation: 55,
            innovation: 82,
            investorReturn: 25,
        },
        metricDetails: [
            {
                label: "생산량",
                value: "24,000대",
                context: "사우디 공장 램프업 진행 중",
                tone: "neutral",
            },
            {
                label: "브랜드드 모터 사업",
                value: "포뮬러 E 공급",
                context: "고효율 모터 기술 ROI 확인",
                tone: "positive",
            },
            {
                label: "현금 보유",
                value: "42억 달러",
                context: "PIF 투자로 재무 버퍼 유지",
                tone: "positive",
            },
            {
                label: "영업손실",
                value: "-22억 달러",
                context: "규모의 경제 전까지 적자 지속",
                tone: "attention",
            },
            {
                label: "자율주행 스택",
                value: "DreamDrive Pro",
                context: "레이더+라이다 센서 융합, OTA 업데이트 확대",
                tone: "positive",
            },
        ],
        highlights: [
            {
                title: "고효율 파워트레인 외부 판매",
                description:
                    "모터·배터리 시스템을 타 OEM에 공급해 추가 수익원을 만듭니다.",
            },
            {
                title: "사우디 조인트 팩토리",
                description:
                    "중동 럭셔리 EV 수요를 선점하기 위해 현지 생산을 확대합니다.",
            },
        ],
        latestNews: [
            {
                title: "Lucid, Gravity SUV 양산 일정 공개",
                source: "Lucid Motors",
                url: "https://www.lucidmotors.com/",
                published: "2025-02-13",
            },
            {
                title: "PIF, Lucid 추가 지분투자 검토",
                source: "Bloomberg",
                url: "https://www.bloomberg.com/",
                published: "2025-01-21",
            },
        ],
    },
    {
        id: "tesla",
        name: "Tesla",
        koreanName: "테슬라",
        brandLabel: "AI 제조 · 에너지",
        logoUrl: "/companies/tesla.png",
        homepageUrl: "https://www.tesla.com/",
        industry: "전기차 · 미국 나스닥",
        ticker: "NASDAQ: TSLA",
        summary:
            "AI 주행 소프트웨어와 기가팩토리 제조 자동화를 결합한 전기차/에너지 기업. 로보택시·Dojo 계산 인프라로 소프트웨어 수익 비중 확대를 노립니다.",
        focus: ["자율주행", "기가팩토리", "에너지 저장"],
        revenueScale: "2024년 매출 967억 달러",
        headquarters: "미국 텍사스",
        metrics: {
            growth: 70,
            profitability: 62,
            stability: 68,
            momentum: 75,
            valuation: 32,
            innovation: 92,
            investorReturn: 68,
        },
        metricDetails: [
            {
                label: "차량 인도",
                value: "193만 대",
                context: "공급망 안정을 바탕으로 연간 인도량 YoY +18%",
                tone: "positive",
            },
            {
                label: "자동차 마진",
                value: "18%",
                context: "가격 인하 영향에도 공정 효율화로 마진 방어",
                tone: "neutral",
            },
            {
                label: "에너지 저장",
                value: "YoY +80%",
                context: "메가팩 수주와 그리드 프로젝트 확대로 고성장",
                tone: "positive",
            },
            {
                label: "FCF",
                value: "30억 달러",
                context: "CAPEX 확대에도 플러스 유지",
                tone: "positive",
            },
            {
                label: "밸류에이션",
                value: "EV/EBITDA 34배",
                context: "자율주행 기대감이 여전히 프리미엄을 형성",
                tone: "attention",
            },
        ],
        highlights: [
            {
                title: "Dojo & 로보택시",
                description:
                    "자체 학습 클러스터로 FSD 데이터 루프를 가속하고 로보택시 상용화를 준비합니다.",
            },
            {
                title: "기가팩토리 확장",
                description:
                    "멕시코·인도 공장 계획으로 지역 다변화와 비용 절감을 추진합니다.",
            },
        ],
        latestNews: [
            {
                title: "Tesla, FSD v13 베타 글로벌 확대",
                source: "Tesla",
                url: "https://www.tesla.com/",
                published: "2025-02-10",
            },
            {
                title: "기가멕시코 착공 승인 확보",
                source: "Bloomberg",
                url: "https://www.bloomberg.com/",
                published: "2025-01-28",
            },
        ],
    },
    {
        id: "ionq",
        name: "IonQ",
        koreanName: "아이온큐",
        brandLabel: "트랩드 이온 양자 클라우드",
        logoUrl: "/companies/ionq.png",
        homepageUrl: "https://ionq.com/",
        industry: "양자컴퓨팅 · 미국 뉴욕증권거래소",
        ticker: "NYSE: IONQ",
        summary:
            "트랩드 이온 기반 양자처리장치를 클라우드 API로 제공. 하드웨어와 소프트웨어 스택을 통합해 산업용 양자 시범 사업을 리드하고 있습니다.",
        focus: ["양자 하드웨어", "클라우드 API", "AI 팩토리"],
        revenueScale: "2024년 매출 9300만 달러",
        headquarters: "미국 메릴랜드",
        metrics: {
            growth: 95,
            profitability: 25,
            stability: 50,
            momentum: 82,
            valuation: 12,
            innovation: 98,
            investorReturn: 88,
        },
        metricDetails: [
            {
                label: "QPU 백로그",
                value: "2.1억 달러",
                context: "정부·엔터프라이즈 장기 계약 확대",
                tone: "positive",
            },
            {
                label: "시스템 성능",
                value: "AQ 36",
                context: "연 2회 성능 업그레이드 목표",
                tone: "positive",
            },
            {
                label: "현금 보유",
                value: "11억 달러",
                context: "대규모 설비 투자 여력 보유",
                tone: "positive",
            },
            {
                label: "조정 EBITDA",
                value: "-1.8억 달러",
                context: "상용화 전까지 적자 지속",
                tone: "attention",
            },
            {
                label: "채널 파트너",
                value: "MS · AWS",
                context: "클라우드 마켓플레이스 기반 수요 확대",
                tone: "positive",
            },
        ],
        highlights: [
            {
                title: "양자 + AI 결합",
                description:
                    "재료 탐색·물류 최적화 PoC를 통해 초기 레퍼런스를 확보했습니다.",
            },
            {
                title: "Fabless 운영 모델",
                description: "외부 파운드리와 협업해 자본지출을 최소화합니다.",
            },
        ],
        latestNews: [
            {
                title: "IonQ, Hyundai와 배터리 재료 연구 계약",
                source: "IonQ",
                url: "https://ionq.com/",
                published: "2025-02-04",
            },
            {
                title: "해군연구소, IonQ QPU 추가 도입",
                source: "DoD",
                url: "https://www.defense.gov/",
                published: "2025-01-16",
            },
        ],
    },
    {
        id: "rigetti",
        name: "Rigetti Computing",
        koreanName: "리게티 컴퓨팅",
        brandLabel: "초전도 양자 서비스",
        logoUrl: "/companies/rigetti.jpeg",
        homepageUrl: "https://www.rigetti.com/",
        industry: "양자컴퓨팅 · 미국 나스닥",
        ticker: "NASDAQ: RGTI",
        summary:
            "초전도 큐비트 기반 양자 시스템과 QCS 소프트웨어를 제공. 맞춤형 하드웨어 서비스로 산업 파트너 PoC를 확보 중입니다.",
        focus: ["초전도 QPU", "클라우드 서비스", "정부 계약"],
        revenueScale: "2024년 매출 4,700만 달러",
        headquarters: "미국 캘리포니아",
        metrics: {
            growth: 88,
            profitability: 20,
            stability: 45,
            momentum: 78,
            valuation: 8,
            innovation: 95,
            investorReturn: 85,
        },
        metricDetails: [
            {
                label: "큐비트 로드맵",
                value: "84Q 시스템",
                context: "오류보정용 모듈형 아키텍처 검증",
                tone: "positive",
            },
            {
                label: "정부 계약",
                value: "DARPA · AFRL",
                context: "국방 시험 사업으로 안정적 매출 확보",
                tone: "positive",
            },
            {
                label: "현금",
                value: "2.2억 달러",
                context: "신주 발행으로 자금 조달 완료",
                tone: "neutral",
            },
            {
                label: "영업손실",
                value: "-1.1억 달러",
                context: "규모의 경제 전까지 손실 지속",
                tone: "attention",
            },
            {
                label: "양자-클래식 하이브리드",
                value: "QCS 플랫폼",
                context: "클라우드 API로 개발자 접근성 제고",
                tone: "positive",
            },
        ],
        highlights: [
            {
                title: "모듈형 초전도 칩",
                description:
                    "큐비트 칩을 다층 패키지로 연결해 확장성을 높입니다.",
            },
            {
                title: "정부 파트너십",
                description:
                    "국가 연구소와 공동 개발을 통해 수주 파이프라인을 확보합니다.",
            },
        ],
        latestNews: [
            {
                title: "Rigetti, AWS Braket에 최신 QPU 등록",
                source: "AWS",
                url: "https://aws.amazon.com/braket/",
                published: "2025-02-09",
            },
            {
                title: "미 공군연구소, Rigetti 시스템 업그레이드 발표",
                source: "AFRL",
                url: "https://www.afrl.af.mil/",
                published: "2025-01-19",
            },
        ],
    },
    {
        id: "keysight",
        name: "Keysight Technologies",
        koreanName: "키사이트 테크놀로지스",
        brandLabel: "차세대 계측 · 양자 테스트",
        logoUrl: "/companies/keysight.png",
        homepageUrl: "https://www.keysight.com/",
        industry: "테스트계측 · 미국 뉴욕증권거래소",
        ticker: "NYSE: KEYS",
        summary:
            "고주파 계측과 양자 테스트 장비를 제공해 AI 팩토리 및 6G 연구 개발에 필수 장비를 공급합니다.",
        focus: ["6G 테스트", "양자 계측", "전자 설계 자동화"],
        revenueScale: "2024 회계연도 매출 53억 달러",
        headquarters: "미국 캘리포니아",
        metrics: {
            growth: 68,
            profitability: 76,
            stability: 82,
            momentum: 66,
            valuation: 58,
            innovation: 80,
            investorReturn: 72,
        },
        metricDetails: [
            {
                label: "통신 테스트 수주",
                value: "백로그 YoY +22%",
                context: "6G 연구 프로젝트 확대로 수요 증가",
                tone: "positive",
            },
            {
                label: "영업이익률",
                value: "27%",
                context: "고마진 소프트웨어 옵션 비중이 확대",
                tone: "positive",
            },
            {
                label: "양자 테스트",
                value: "고객 45곳",
                context: "양자 스타트업·국가 연구소 납품 확대",
                tone: "positive",
            },
            {
                label: "현금 흐름",
                value: "FCF 12억 달러",
                context: "탄탄한 반복 매출 구조",
                tone: "positive",
            },
            {
                label: "밸류에이션",
                value: "EV/EBITDA 14배",
                context: "성장 둔화 국면으로 리레이팅 지연",
                tone: "neutral",
            },
        ],
        highlights: [
            {
                title: "6G 레퍼런스 플랫폼",
                description:
                    "테라헤르츠 대역 테스트 솔루션으로 조기 표준화를 주도합니다.",
            },
            {
                title: "양자 측정 턴키",
                description:
                    "양자 스타트업용 원스톱 측정 장비 공급으로 잠재 고객을 묶습니다.",
            },
        ],
        latestNews: [
            {
                title: "Keysight, 6G 테라헤르츠 테스트 베드 공개",
                source: "Keysight",
                url: "https://www.keysight.com/",
                published: "2025-02-05",
            },
            {
                title: "IonQ-Rigetti, Keysight 측정 장비 채택",
                source: "EE Times",
                url: "https://www.eetimes.com/",
                published: "2025-01-23",
            },
        ],
    },
    {
        id: "eli-lilly",
        name: "Eli Lilly and Company",
        koreanName: "일라이 릴리 앤드 컴퍼니",
        brandLabel: "대사·면역 바이오파마",
        logoUrl: "/companies/eli-lilly.png",
        homepageUrl: "https://www.lilly.com/",
        industry: "제약 · 미국 뉴욕증권거래소",
        ticker: "NYSE: LLY",
        summary:
            "GLP-1 계열 비만·당뇨 치료제와 자가면역 파이프라인으로 고성장을 지속. 제조 증설과 디지털 세일즈로 글로벌 점유율을 확대하고 있습니다.",
        focus: ["대사질환", "면역학", "디지털 세일즈"],
        revenueScale: "2024년 매출 430억 달러",
        headquarters: "미국 인디애나",
        metrics: {
            growth: 93,
            profitability: 86,
            stability: 86,
            momentum: 88,
            valuation: 35,
            innovation: 92,
            investorReturn: 94,
        },
        metricDetails: [
            {
                label: "GLP-1 매출",
                value: "YoY +130%",
                context: "Zepbound·Mounjaro가 글로벌 수요를 견인",
                tone: "positive",
            },
            {
                label: "조정 EPS",
                value: "YoY +74%",
                context: "고마진 바이오 매출 믹스로 수익성 급등",
                tone: "positive",
            },
            {
                label: "공장 증설 CAPEX",
                value: "연 30억 달러",
                context: "GLP-1 생산능력 두 배 확대 계획",
                tone: "attention",
            },
            {
                label: "R&D 파이프라인",
                value: "30+ 3상",
                context: "자가면역·알츠하이머에서 후속 파이프라인 진행",
                tone: "positive",
            },
            {
                label: "밸류에이션",
                value: "PER 65배",
                context: "고성장 프리미엄으로 밸류 부담 존재",
                tone: "attention",
            },
        ],
        highlights: [
            {
                title: "비만 치료제 선두",
                description:
                    "공급망 투자로 경쟁사 대비 가용 물량을 확대합니다.",
            },
            {
                title: "디지털 세일즈",
                description:
                    "원격 처방 플랫폼과 연계해 처방 확장을 가속화합니다.",
            },
        ],
        latestNews: [
            {
                title: "Eli Lilly, GLP-1 생산공장 독일 증설",
                source: "Lilly",
                url: "https://investor.lilly.com/",
                published: "2025-02-08",
            },
            {
                title: "FDA, 알츠하이머 치료제 패스트트랙 부여",
                source: "FDA",
                url: "https://www.fda.gov/",
                published: "2025-01-24",
            },
        ],
    },
    {
        id: "johnson-johnson",
        name: "Johnson & Johnson",
        koreanName: "존슨앤드존슨",
        brandLabel: "글로벌 헬스케어",
        logoUrl: "/companies/johnson-johnson.png",
        homepageUrl: "https://www.jnj.com/",
        industry: "제약 · 미국 뉴욕증권거래소",
        ticker: "NYSE: JNJ",
        summary:
            "의약품과 메드테크 양대 축을 가진 헬스케어 그룹. 안정적인 현금흐름으로 배당과 M&A를 병행합니다.",
        focus: ["면역·종양", "메드테크", "배당"],
        revenueScale: "2024년 매출 878억 달러",
        headquarters: "미국 뉴저지",
        metrics: {
            growth: 48,
            profitability: 76,
            stability: 92,
            momentum: 62,
            valuation: 72,
            innovation: 70,
            investorReturn: 78,
        },
        metricDetails: [
            {
                label: "의약품 매출",
                value: "YoY +9%",
                context: "Darzalex, Stelara가 성장 견인",
                tone: "positive",
            },
            {
                label: "메드테크 성장",
                value: "YoY +7%",
                context: "로봇 수술 플랫폼 Monarch 확장",
                tone: "positive",
            },
            {
                label: "조정 EPS",
                value: "YoY +6%",
                context: "비용 통제로 안정적인 성장",
                tone: "neutral",
            },
            {
                label: "현금 배당",
                value: "연 12.4조 원",
                context: "62년 연속 배당 증가",
                tone: "positive",
            },
            {
                label: "법적 리스크",
                value: "탈크 소송",
                context: "합의금 불확실성이 남아 있음",
                tone: "attention",
            },
        ],
        highlights: [
            {
                title: "메드테크 자동화",
                description: "로봇 수술·모션 캡처로 외과 수요를 선점합니다.",
            },
            {
                title: "면역·종양 포트폴리오",
                description:
                    "Blockbuster 약물 수명을 연장할 바이오시밀러 방어 전략을 전개 중입니다.",
            },
        ],
        latestNews: [
            {
                title: "J&J, 탈크 소송 25억 달러 합의안 제시",
                source: "WSJ",
                url: "https://www.wsj.com/",
                published: "2025-02-02",
            },
            {
                title: "Monarch 로봇 수술, FDA 적응증 확대",
                source: "MedTech Dive",
                url: "https://www.medtechdive.com/",
                published: "2025-01-17",
            },
        ],
    },
    {
        id: "novo-nordisk",
        name: "Novo Nordisk",
        koreanName: "노보 노디스크",
        brandLabel: "대사질환 바이오",
        logoUrl: "/companies/novo-nordisk.jpeg",
        homepageUrl: "https://www.novonordisk.com/",
        industry: "제약 · 덴마크 코펜하겐",
        ticker: "NYSE: NVO",
        summary:
            "GLP-1 비만·당뇨 치료제 선두주자. 생산 자동화와 디지털 처방 플랫폼으로 글로벌 수요 폭증에 대응중입니다.",
        focus: ["비만 치료", "디지털 헬스", "글로벌 공급망"],
        revenueScale: "2024년 매출 390억 달러",
        headquarters: "덴마크 바그스바르",
        metrics: {
            growth: 88,
            profitability: 92,
            stability: 92,
            momentum: 82,
            valuation: 38,
            innovation: 90,
            investorReturn: 92,
        },
        metricDetails: [
            {
                label: "Wegovy 수요",
                value: "YoY +160%",
                context: "미국·유럽 동시 증설로 공급 확대",
                tone: "positive",
            },
            {
                label: "조정 영업이익률",
                value: "48%",
                context: "고마진 바이오 제품 덕에 수익성 최고 수준",
                tone: "positive",
            },
            {
                label: "CAPEX",
                value: "연 50억 달러",
                context: "페닝고 공장 증설에 집중 투자",
                tone: "attention",
            },
            {
                label: "R&D 파이프라인",
                value: "암페프라모트",
                context: "차세대 경구형 GLP-1 임상 진행 중",
                tone: "positive",
            },
            {
                label: "밸류에이션",
                value: "PER 42배",
                context: "성장 프리미엄 반영으로 진입장벽 존재",
                tone: "attention",
            },
        ],
        highlights: [
            {
                title: "글로벌 생산 허브",
                description:
                    "미·덴마크·프랑스에 걸친 자동화를 통해 병목을 해소합니다.",
            },
            {
                title: "디지털 처방 파트너십",
                description: "원격의료 플랫폼과 제휴해 처방 접근성을 높입니다.",
            },
        ],
        latestNews: [
            {
                title: "Novo, 프랑스 Chartres 공장 증설 착수",
                source: "Novo Nordisk",
                url: "https://www.novonordisk.com/",
                published: "2025-02-12",
            },
            {
                title: "미국 CMS, 비만 치료제 급여 확대 검토",
                source: "Politico",
                url: "https://www.politico.com/",
                published: "2025-01-30",
            },
        ],
    },
    {
        id: "oracle",
        name: "Oracle",
        koreanName: "오라클",
        brandLabel: "클라우드 · 슈퍼컴퓨팅",
        logoUrl: "/companies/oracle.png",
        homepageUrl: "https://www.oracle.com/",
        industry: "소프트웨어 · 미국 뉴욕증권거래소",
        ticker: "NYSE: ORCL",
        summary:
            "OCI 클라우드와 Exadata/컴퓨트 인프라를 묶어 AI 슈퍼컴을 서비스형으로 제공. Cerner와 데이터 자산을 결합해 산업별 AI 팩토리를 제안합니다.",
        focus: ["OCI", "슈퍼컴", "산업 데이터"],
        revenueScale: "2024 회계연도 매출 532억 달러",
        headquarters: "미국 텍사스",
        metrics: {
            growth: 72,
            profitability: 85,
            stability: 88,
            momentum: 78,
            valuation: 55,
            innovation: 75,
            investorReturn: 85,
        },
        metricDetails: [
            {
                label: "OCI 매출",
                value: "YoY +49%",
                context: "AI 인스턴스와 데이터베이스 클라우드가 성장을 견인",
                tone: "positive",
            },
            {
                label: "영업이익률",
                value: "31%",
                context: "고마진 소프트웨어와 클라우드가 믹스를 개선",
                tone: "positive",
            },
            {
                label: "AI Supercluster",
                value: "Nvidia GH200 2,000대",
                context: "서비스형 슈퍼컴 수요를 선점",
                tone: "positive",
            },
            {
                label: "Cerner 통합",
                value: "시너지 진행",
                context: "의료 데이터 전환 비용이 단기 부담",
                tone: "attention",
            },
            {
                label: "밸류에이션",
                value: "EV/EBITDA 15배",
                context: "성장 대비 합리적 수준",
                tone: "neutral",
            },
        ],
        highlights: [
            {
                title: "서비스형 슈퍼컴",
                description:
                    "고성능 컴퓨팅을 구독 모델로 제공해 초기 CAPEX를 낮춥니다.",
            },
            {
                title: "산업 데이터 클라우드",
                description:
                    "Cerner EHR와 NetSuite 데이터를 결합해 수직 특화 AI를 제공합니다.",
            },
        ],
        latestNews: [
            {
                title: "Oracle, Nvidia와 GH200 기반 슈퍼컴 출시",
                source: "Oracle",
                url: "https://www.oracle.com/",
                published: "2025-02-15",
            },
            {
                title: "Cerner, 미국 VA 프로젝트 추가 전환",
                source: "FierceHealthcare",
                url: "https://www.fiercehealthcare.com/",
                published: "2025-01-31",
            },
        ],
    },
    {
        id: "caterpillar",
        name: "Caterpillar",
        koreanName: "캐터필러",
        brandLabel: "자율 건설 로봇",
        logoUrl: "/companies/caterpillar.png",
        homepageUrl: "https://www.cat.com/",
        industry: "산업재 · 뉴욕증권거래소",
        ticker: "NYSE: CAT",
        summary:
            "중장비에 자율주행·원격제어·전동화를 결합해 스마트 로보틱스 솔루션을 제공. 광산·건설 현장의 생산성 향상을 돕습니다.",
        focus: ["자율중장비", "전동화", "서비스"],
        revenueScale: "2024년 매출 675억 달러",
        headquarters: "미국 일리노이",
        metrics: {
            growth: 58,
            profitability: 77,
            stability: 82,
            momentum: 68,
            valuation: 62,
            innovation: 65,
            investorReturn: 75,
        },
        metricDetails: [
            {
                label: "서비스 매출",
                value: "YoY +18%",
                context: "연결장비 기반 구독형 솔루션 확대",
                tone: "positive",
            },
            {
                label: "조정 운영마진",
                value: "21%",
                context: "가격 인상과 믹스 효과 반영",
                tone: "positive",
            },
            {
                label: "자율장비 가동",
                value: "광산 620대",
                context: "Autonomy retrofit로 설치기반 확대",
                tone: "positive",
            },
            {
                label: "재고회전",
                value: "3.4회",
                context: "사이클 변동에 따라 변동성 존재",
                tone: "neutral",
            },
            {
                label: "밸류에이션",
                value: "PER 15배",
                context: "산업재 평균 대비 프리미엄 유지",
                tone: "neutral",
            },
        ],
        highlights: [
            {
                title: "자율 굴삭 솔루션",
                description:
                    "센서+소프트웨어 번들로 건설 현장의 인력 부족을 해소합니다.",
            },
            {
                title: "서비스 구독화",
                description: "장비 모니터링·예지보전을 구독 모델로 판매합니다.",
            },
        ],
        latestNews: [
            {
                title: "Caterpillar, 자율 덤프 트럭 호주 프로젝트 수주",
                source: "Mining Weekly",
                url: "https://www.miningweekly.com/",
                published: "2025-02-01",
            },
            {
                title: "CAT, 전동 굴착기 양산 계획 발표",
                source: "Electrek",
                url: "https://electrek.co/",
                published: "2025-01-18",
            },
        ],
    },
    {
        id: "belden",
        name: "Belden",
        koreanName: "벨덴",
        brandLabel: "산업 네트워킹 · 로보틱스",
        logoUrl: "/companies/belden.jpeg",
        homepageUrl: "https://www.belden.com/",
        industry: "산업재 · 뉴욕증권거래소",
        ticker: "NYSE: BDC",
        summary:
            "산업 자동화용 네트워크·케이블과 보안 솔루션을 공급. 공장 로봇, 물류 자동화 수요가 성장 동력입니다.",
        focus: ["산업 네트워크", "로봇", "보안"],
        revenueScale: "2024년 매출 26억 달러",
        headquarters: "미국 미주리",
        metrics: {
            growth: 62,
            profitability: 72,
            stability: 76,
            momentum: 67,
            valuation: 68,
            innovation: 68,
            investorReturn: 70,
        },
        metricDetails: [
            {
                label: "산업 자동화 매출",
                value: "YoY +14%",
                context: "스마트팩토리 업그레이드가 견인",
                tone: "positive",
            },
            {
                label: "조정 EBIT 마진",
                value: "15%",
                context: "솔루션 매출 비중 확대로 개선",
                tone: "positive",
            },
            {
                label: "서비스형 보안",
                value: "ARR +32%",
                context: "OT 보안 수요가 빠르게 증가",
                tone: "positive",
            },
            {
                label: "재고 조정",
                value: "H2 정상화",
                context: "단기 주문 변동성 관리 필요",
                tone: "neutral",
            },
            {
                label: "밸류에이션",
                value: "EV/EBITDA 12배",
                context: "산업 자동화 동종업 대비 합리적",
                tone: "neutral",
            },
        ],
        highlights: [
            {
                title: "산업용 TSN 네트워크",
                description: "시간민감형 네트워크로 로봇 제어 지연을 줄입니다.",
            },
            {
                title: "OT 보안 플랫폼",
                description:
                    "네트워크 장비와 보안을 번들링해 고객 락인을 강화합니다.",
            },
        ],
        latestNews: [
            {
                title: "Belden, 산업용 5G 게이트웨이 출시",
                source: "Belden",
                url: "https://www.belden.com/",
                published: "2025-02-09",
            },
            {
                title: "독일 공장 자동화 프로젝트 수주",
                source: "Handelsblatt",
                url: "https://www.handelsblatt.com/",
                published: "2025-01-27",
            },
        ],
    },
    {
        id: "nokia",
        name: "Nokia",
        koreanName: "노키아",
        brandLabel: "6G 네트워크 장비",
        logoUrl: "/companies/nokia.jpeg",
        homepageUrl: "https://www.nokia.com/",
        industry: "통신장비 · 핀란드 헬싱키",
        ticker: "NYSE: NOK",
        summary:
            "5G/6G 무선·광 네트워크 장비와 Open RAN 소프트웨어를 제공. 6G 표준화를 선도하며 산업용 사설망 수요를 선점하고 있습니다.",
        focus: ["6G", "Open RAN", "산업 사설망"],
        revenueScale: "2024년 매출 235억 유로",
        headquarters: "핀란드 에스포",
        metrics: {
            growth: 48,
            profitability: 62,
            stability: 72,
            momentum: 52,
            valuation: 78,
            innovation: 72,
            investorReturn: 55,
        },
        metricDetails: [
            {
                label: "6G 연구 계약",
                value: "40+ 파트너",
                context: "유럽·미국 정부 프로젝트 다수 참여",
                tone: "positive",
            },
            {
                label: "네트워크 인프라 매출",
                value: "YoY +6%",
                context: "광 네트워크 장비 수요 회복",
                tone: "positive",
            },
            {
                label: "모바일 네트워크",
                value: "YoY -8%",
                context: "인도 등 일부 지역 CAPEX 둔화",
                tone: "attention",
            },
            {
                label: "영업이익률",
                value: "11%",
                context: "가격 경쟁 탓에 두 자릿수 초반",
                tone: "neutral",
            },
            {
                label: "밸류에이션",
                value: "PER 9배",
                context: "턴어라운드 기대가 반영되지 않은 수준",
                tone: "positive",
            },
        ],
        highlights: [
            {
                title: "6G 연구 컨소시엄",
                description: "Hexa-X II 프로젝트를 리드하며 표준을 주도합니다.",
            },
            {
                title: "산업용 사설망",
                description:
                    "공장·항만용 5G/6G 프라이빗 네트워크로 반복 매출 확보.",
            },
        ],
        latestNews: [
            {
                title: "Nokia, 6G 테스트베드 독일 구축",
                source: "Nokia",
                url: "https://www.nokia.com/",
                published: "2025-02-05",
            },
            {
                title: "미 국방부, Open RAN 시험망에 Nokia 선정",
                source: "Breaking Defense",
                url: "https://breakingdefense.com/",
                published: "2025-01-25",
            },
        ],
    },
];
