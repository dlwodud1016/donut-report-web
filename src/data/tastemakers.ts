export type TastemakerMetricKey =
    | "impact"
    | "accuracy"
    | "engagement"
    | "transparency"
    | "credibility";

export type TastemakerMetrics = Record<TastemakerMetricKey, number>;

export type TastemakerSocialLink = {
    label: string;
    url: string;
};

export type TastemakerNewsItem = {
    title: string;
    source: string;
    url: string;
    published: string;
};

export type TastemakerProfile = {
    id: string;
    name: string;
    tagline: string;
    focus: string;
    metrics: TastemakerMetrics;
    socials: TastemakerSocialLink[];
    latestNews: TastemakerNewsItem[];
};

const makeProfile = (
    profile: TastemakerProfile
): TastemakerProfile => profile;

export const tastemakerProfiles: TastemakerProfile[] = [
    makeProfile({
        id: "warren-buffett",
        name: "워렌 버핏(Warren Buffett)",
        tagline: "버크셔 해서웨이의 장기 가치 투자의 대명사",
        focus: "가치 투자 · 버크셔 해서웨이",
        metrics: {
            impact: 95,
            accuracy: 92,
            engagement: 65,
            transparency: 88,
            credibility: 98,
        },
        socials: [
            {
                label: "연례 주주서한",
                url: "https://www.berkshirehathaway.com/letters/letters.html",
            },
            {
                label: "CNBC 인터뷰 아카이브",
                url: "https://www.cnbc.com/warren-buffett/",
            },
        ],
        latestNews: [
            {
                title: "버크셔 해서웨이, 현금 보유액 사상 최대 경신",
                source: "WSJ",
                url: "https://www.wsj.com/",
                published: "2025-01-28",
            },
            {
                title: "버핏: AI 투자 열풍, “안전마진 중요성 잊지 말자”",
                source: "CNBC",
                url: "https://www.cnbc.com/",
                published: "2025-02-04",
            },
        ],
    }),
    makeProfile({
        id: "michael-burry",
        name: "마이클 버리(Michael Burry)",
        tagline: "빅 쇼트의 주인공, 매크로 리스크 경고로 유명",
        focus: "매크로 숏 전략 · 사욘 자산운용",
        metrics: {
            impact: 80,
            accuracy: 75,
            engagement: 58,
            transparency: 60,
            credibility: 72,
        },
        socials: [
            {
                label: "X @michaeljburry",
                url: "https://twitter.com/michaeljburry",
            },
            {
                label: "13F 공시",
                url: "https://www.sec.gov/edgar/browse/?CIK=0001167483",
            },
        ],
        latestNews: [
            {
                title: "버리, 반도체 레버리지 ETF에 숏 포지션 확대",
                source: "Bloomberg",
                url: "https://www.bloomberg.com/",
                published: "2025-01-20",
            },
            {
                title: "Scion, 디플레이션 시나리오 대비 프레젠테이션 공개",
                source: "FT",
                url: "https://www.ft.com/",
                published: "2025-02-02",
            },
        ],
    }),
    makeProfile({
        id: "ray-dalio",
        name: "레이 달리오(Ray Dalio)",
        tagline: "브리지워터 창업자, 빅사이클 프레임워크 제시",
        focus: "거시 올웨더 전략 · 브리지워터 어소시에이츠",
        metrics: {
            impact: 90,
            accuracy: 82,
            engagement: 70,
            transparency: 76,
            credibility: 85,
        },
        socials: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/raydalio/",
            },
            {
                label: "Principles YouTube",
                url: "https://www.youtube.com/@principlesbyraydalio",
            },
        ],
        latestNews: [
            {
                title: "달리오, 미중 관계는 '장기 균형 단계'로 진입 전망",
                source: "Bloomberg",
                url: "https://www.bloomberg.com/",
                published: "2025-01-17",
            },
            {
                title: "브리지워터, 차세대 Co-CIO 체제 발표",
                source: "Reuters",
                url: "https://www.reuters.com/",
                published: "2025-02-05",
            },
        ],
    }),
    makeProfile({
        id: "cathie-wood",
        name: "캐시 우드(Cathie Wood)",
        tagline: "ARK Invest의 혁신 기술 포트폴리오 리더",
        focus: "파괴적 혁신 투자 · ARK 인베스트",
        metrics: {
            impact: 88,
            accuracy: 62,
            engagement: 85,
            transparency: 82,
            credibility: 68,
        },
        socials: [
            {
                label: "X @CathieDWood",
                url: "https://twitter.com/CathieDWood",
            },
            {
                label: "ARK Blog",
                url: "https://ark-invest.com/news-insights/",
            },
        ],
        latestNews: [
            {
                title: "ARK, 차세대 로보틱스 ETF 신규 론칭",
                source: "TechCrunch",
                url: "https://techcrunch.com/",
                published: "2025-02-01",
            },
            {
                title: "캐시 우드, 비트코인 2030년 150만 달러 전망 유지",
                source: "CoinDesk",
                url: "https://www.coindesk.com/",
                published: "2025-01-26",
            },
        ],
    }),
    makeProfile({
        id: "jim-cramer",
        name: "짐 크레이머(Jim Cramer)",
        tagline: "CNBC Mad Money 진행자, 실시간 시장 코멘터리",
        focus: "실시간 시장 코멘터리 · CNBC",
        metrics: {
            impact: 75,
            accuracy: 55,
            engagement: 92,
            transparency: 70,
            credibility: 54,
        },
        socials: [
            {
                label: "CNBC Mad Money",
                url: "https://www.cnbc.com/mad-money/",
            },
            {
                label: "X @jimcramer",
                url: "https://twitter.com/jimcramer",
            },
        ],
        latestNews: [
            {
                title: "크레이머, AI 관련주 조정 “매수 기회” 발언",
                source: "CNBC",
                url: "https://www.cnbc.com/",
                published: "2025-02-03",
            },
            {
                title: "Mad Money, 시청자 참여형 포트폴리오 실험 발표",
                source: "Variety",
                url: "https://variety.com/",
                published: "2025-01-22",
            },
        ],
    }),
    makeProfile({
        id: "seth-klarman",
        name: "세스 클라먼(Seth Klarman)",
        tagline: "보우포스트의 가치 투자자, 위험 관리에 집중",
        focus: "가치 투자 · 보우포스트 그룹",
        metrics: {
            impact: 78,
            accuracy: 88,
            engagement: 42,
            transparency: 55,
            credibility: 90,
        },
        socials: [
            {
                label: "보우포스트 투자서한 모음",
                url: "https://www.valuewalk.com/seth-klarman-letters/",
            },
        ],
        latestNews: [
            {
                title: "클라먼, 디스트레스 자산 비중 확대 시사",
                source: "Bloomberg",
                url: "https://www.bloomberg.com/",
                published: "2025-01-29",
            },
        ],
    }),
    makeProfile({
        id: "kenneth-griffin",
        name: "케네스 그리핀(Kenneth C. Griffin)",
        tagline: "시타델 창업자, 마켓 메이킹과 헤지 전략 리더",
        focus: "멀티 전략 헤지 · 시타델",
        metrics: {
            impact: 92,
            accuracy: 86,
            engagement: 60,
            transparency: 65,
            credibility: 88,
        },
        socials: [
            {
                label: "시타델 공식 사이트",
                url: "https://www.citadel.com/",
            },
            {
                label: "사회 공헌 소식",
                url: "https://www.citadel.com/news-and-insights/",
            },
        ],
        latestNews: [
            {
                title: "시타델, 런던 AI 트레이딩 센터 확장 계획 발표",
                source: "Reuters",
                url: "https://www.reuters.com/",
                published: "2025-02-06",
            },
            {
                title: "그리핀, 미 공립 교육 후원 1억 달러 기부",
                source: "NYTimes",
                url: "https://www.nytimes.com/",
                published: "2025-01-15",
            },
        ],
    }),
    makeProfile({
        id: "chamath-palihapitiya",
        name: "샴스 팔리하피티야(Chamath Palihapitiya)",
        tagline: "소셜캐피털 창업자, 초기 성장 투자자",
        focus: "벤처 투자 · 소셜 캐피털",
        metrics: {
            impact: 82,
            accuracy: 58,
            engagement: 87,
            transparency: 66,
            credibility: 62,
        },
        socials: [
            {
                label: "X @chamath",
                url: "https://twitter.com/chamath",
            },
            {
                label: "All-In Podcast",
                url: "https://www.allinpodcast.co/",
            },
        ],
        latestNews: [
            {
                title: "샴스, 기후 테크 펀드 규모 20억 달러로 확대",
                source: "Bloomberg",
                url: "https://www.bloomberg.com/",
                published: "2025-01-31",
            },
            {
                title: "All-In, AI 규제 관련 특별 에피소드 공개",
                source: "The Verge",
                url: "https://www.theverge.com/",
                published: "2025-02-07",
            },
        ],
    }),
    makeProfile({
        id: "sallie-krawcheck",
        name: "샐리 크로우첵(Sallie Krawcheck)",
        tagline: "Ellevest CEO, 여성 투자와 재무 교육 강조",
        focus: "포용적 투자 · 엘레베스트",
        metrics: {
            impact: 74,
            accuracy: 70,
            engagement: 79,
            transparency: 84,
            credibility: 82,
        },
        socials: [
            {
                label: "LinkedIn 프로필",
                url: "https://www.linkedin.com/in/salliekrawcheck/",
            },
            {
                label: "엘레베스트 인사이트",
                url: "https://www.ellevest.com/magazine",
            },
        ],
        latestNews: [
            {
                title: "엘레베스트, 여성 창업자 투자 프로그램 3기 선발",
                source: "Forbes",
                url: "https://www.forbes.com/",
                published: "2025-01-18",
            },
            {
                title: "크로우첵, 연말 투자 워크숍 ‘Money Reset’ 진행",
                source: "Fortune",
                url: "https://fortune.com/",
                published: "2025-02-03",
            },
        ],
    }),
    makeProfile({
        id: "ian-cassel",
        name: "이안 캐슬(Ian Cassel)",
        tagline: "MIcroCapClub 설립자, 마이크로캡 투자에 특화",
        focus: "마이크로캡 투자 · 인텔리전트 팬애틱스",
        metrics: {
            impact: 62,
            accuracy: 74,
            engagement: 68,
            transparency: 72,
            credibility: 76,
        },
        socials: [
            {
                label: "X @iancassel",
                url: "https://twitter.com/iancassel",
            },
            {
                label: "MicroCapClub 공식 사이트",
                url: "https://microcapclub.com/",
            },
        ],
        latestNews: [
            {
                title: "마이크로캡클럽, 연 2회 글로벌 스톡 피치 개최",
                source: "MarketWatch",
                url: "https://www.marketwatch.com/",
                published: "2025-01-27",
            },
        ],
    }),
];
