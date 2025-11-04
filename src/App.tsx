import './App.css';

interface NavSection {
  label: string;
  anchor: string;
}

interface MetricChip {
  label: string;
  value: string;
  tone: 'positive' | 'neutral' | 'attention';
}

interface HighlightCard {
  title: string;
  body: string;
  icon: string;
}

interface ComparisonCard {
  name: string;
  description: string;
  upside: string;
  risk: string;
}

const navSections: NavSection[] = [
  { label: '2. 팔란티어 미래 성장', anchor: '#section-2' },
  { label: '2.1 수익 및 매출 성장 전망', anchor: '#section-2-1' },
  { label: '2.2 수익 다변화 계획', anchor: '#section-2-2' },
  { label: '2.3 주당순이익(EPS) 전망', anchor: '#section-2-3' },
  { label: '2.4 자기자본이익률(ROE)', anchor: '#section-2-4' },
  { label: '2.5 비교할 성장주', anchor: '#section-2-5' },
];

const metricChips: MetricChip[] = [
  { label: '연 매출 성장률', value: '+21%', tone: 'positive' },
  { label: '기존 고객 NRR', value: '113%', tone: 'positive' },
  { label: '영업이익률', value: '16%', tone: 'attention' },
  { label: '현금 및 투자 여력', value: '12억 달러', tone: 'positive' },
];

const highlightCards: HighlightCard[] = [
  {
    icon: '🧑‍🍳',
    title: '비즈니스 모델',
    body: '팔란티어는 데이터를 손질해주는 “인공지능 셰프”예요. 복잡한 데이터를 정리하고 AI가 바로 활용할 수 있게 레시피를 짜줍니다.',
  },
  {
    icon: '🏛️',
    title: '고객 구조',
    body: '정부 50% · 민간 50% 비중으로 균형 잡힌 매출 구조를 보유합니다. 국방부 계약이 안정적인 현금흐름을 제공합니다.',
  },
  {
    icon: '🧱',
    title: 'AI 플랫폼 전략',
    body: 'AIP(AI Platform)를 통해 고객이 직접 워크플로를 조립할 수 있도록 “레고 블록” 형태로 기능을 제공합니다.',
  },
];

const comparisonCards: ComparisonCard[] = [
  {
    name: 'Snowflake (SNOW)',
    description: '데이터 클라우드 강자로, 대기업 데이터 파이프라인에서 경쟁 중.',
    upside: '대규모 클라우드 파트너십으로 빠른 고객 확장',
    risk: '사용량 기반 모델이라 경기 둔화 시 매출 변동성이 큼',
  },
  {
    name: 'C3.ai (AI)',
    description: '산업별 맞춤 AI 솔루션을 제공하는 중견 소프트웨어 기업.',
    upside: '에너지·제조 특화 모델로 신규 계약 확대 중',
    risk: '수익성 악화와 고객 집중도가 높아 리스크 존재',
  },
];

export default function App(): JSX.Element {
  return (
    <div className="app">
      <div className="dashboard">
        <header className="topbar">
          <div className="topbar__brand">
            <div className="logo-circle">🍩</div>
            <div>
              <span className="brand-name">Donut Report</span>
              <span className="brand-sub">Phase 0 실험</span>
            </div>
          </div>
          <div className="topbar__search">
            <input type="text" placeholder="회사명 또는 티커 검색" />
          </div>
          <div className="topbar__actions">
            <button className="ghost-button">뉴스레터 구독</button>
            <button className="primary-button">로그인</button>
          </div>
        </header>

        <div className="content">
          <aside className="sidebar">
            <div className="company-card">
              <div className="company-card__badge">성장주</div>
              <div className="company-card__logo">PL</div>
              <h1>Palantir Technologies</h1>
              <p className="company-card__ticker">NASDAQ: PLTR</p>
              <p className="company-card__price">$9.50</p>
              <p className="company-card__caption">AI 데이터 플랫폼 · 정부 & 민간 고객</p>
              <button className="primary-button">Phase 0 체크리스트 보기</button>
              <div className="company-card__metrics">
                <div>
                  <span className="metric-label">시가총액</span>
                  <span className="metric-value">$20.3B</span>
                </div>
                <div>
                  <span className="metric-label">업데이트</span>
                  <span className="metric-value">2025.10.30</span>
                </div>
              </div>
            </div>

            <nav className="sidebar-nav">
              <h2>리포트 목차</h2>
              <ul>
                {navSections.map((item) => (
                  <li key={item.anchor}>
                    <a href={item.anchor}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="sidebar-list">
              <h3>최근 본 리포트</h3>
              <ul>
                <li>Snowflake · 데이터 클라우드</li>
                <li>CrowdStrike · 보안 SaaS</li>
                <li>ServiceNow · 워크플로 플랫폼</li>
              </ul>
            </div>
          </aside>

          <main className="main">
            <section className="panel panel--intro" id="section-2">
              <header className="panel__header">
                <div>
                  <span className="panel__eyebrow">2. Palantir Technologies의 미래 성장</span>
                  <h2>“인공지능 셰프”가 만드는 데이터 성장 스토리</h2>
                </div>
                <p className="panel__summary">
                  팔란티어는 정부·민간 고객의 복잡한 데이터를 정리하고, AI가 바로 활용할 수 있게 만들어 주는 플랫폼입니다.
                  이번 실험에서는 리포트를 쉬운 말투로 재구성하고, 실제 독자 반응을 통해 Phase 1 진행 여부를 판단합니다.
                </p>
              </header>
              <div className="metric-chip-row">
                {metricChips.map((chip) => (
                  <div key={chip.label} className={`metric-chip metric-chip--${chip.tone}`}>
                    <span className="metric-chip__label">{chip.label}</span>
                    <span className="metric-chip__value">{chip.value}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel" id="section-2-1">
              <header className="panel__header">
                <h2>2.1 수익 및 매출 성장 전망</h2>
                <p>정부 계약이 안정성을, AIP 업셀이 성장성을 책임지는 구조입니다.</p>
              </header>
              <div className="chart-card">
                <div className="chart-card__header">
                  <span>매출 & 영업이익 전망 (FY21-FY27E)</span>
                  <div className="legend">
                    <span className="legend__item legend__item--blue">매출</span>
                    <span className="legend__item legend__item--teal">영업이익</span>
                  </div>
                </div>
                <div className="chart-placeholder">
                  <span>Chart Placeholder</span>
                </div>
                <ul className="chart-insights">
                  <li>FY24 가이던스: 매출 +21%, 영업이익 +18% 예상</li>
                  <li>정부 계약 연장으로 FY25 매출의 15%가 이미 확보됨</li>
                  <li>Foundry/AIP 업셀로 민간 고객 매출 비중이 꾸준히 상승 중</li>
                </ul>
              </div>
            </section>

            <section className="panel" id="section-2-2">
              <header className="panel__header">
                <h2>2.2 수익 다변화 계획</h2>
                <p>핵심 산업에서의 사용 사례를 늘려 “쓰면 쓸수록 요금이 늘어나는” 모델을 완성하고 있어요.</p>
              </header>
              <div className="dual-chart">
                <div className="bar-chart">
                  <h3>산업별 매출 비중</h3>
                  <div className="bar-chart__placeholder">
                    <span>Vertical Mix Chart</span>
                  </div>
                  <p className="bar-chart__caption">정부, 국방, 제조, 금융, 헬스케어 등으로 균형 있게 분산돼 있습니다.</p>
                </div>
                <div className="bar-chart">
                  <h3>고객당 평균 매출 (YoY)</h3>
                  <div className="bar-chart__placeholder bar-chart__placeholder--pink">
                    <span>ARPU Trend</span>
                  </div>
                  <p className="bar-chart__caption">기존 고객이 더 많은 워크로드를 맡기면서 ARPU가 꾸준히 상승 중입니다.</p>
                </div>
              </div>
              <ul className="checklist">
                <li>✅ 미국 국방부·NATO 등 대형 정부 고객은 장기 계약 구조</li>
                <li>✅ 제조·에너지 기업에서 “예지 정비” 레퍼런스 확보</li>
                <li>✅ 금융권 사기 탐지, 헬스케어 수요 예측 등 신규 산업 케이스 확대</li>
                <li>⚠️ 경쟁사(스노우플레이크, 데이터브릭스)의 AI 제안이 빠르게 추격 중</li>
              </ul>
            </section>

            <section className="panel panel--split" id="section-2-3">
              <div>
                <header className="panel__header">
                  <h2>2.3 주당순이익(EPS) 전망</h2>
                  <p>스톡옵션 부담이 줄어들면서 EPS가 가파르게 개선될 것으로 예상됩니다.</p>
                </header>
                <div className="info-box">
                  <h3>EPS 성장 궤적</h3>
                  <p>FY23 EPS 0.09달러 → FY27E EPS 0.35달러 (연평균 성장률 +41%).</p>
                  <p>현금흐름이 증가하고 주식 보상 희석이 둔화되며 순이익이 빠르게 쌓입니다.</p>
                </div>
              </div>
              <div>
                <header className="panel__header">
                  <h2 id="section-2-4">2.4 자기자본이익률(ROE)</h2>
                  <p>ROE는 아직 낮지만, 매출 총이익률이 높아 향후 탄력적인 개선이 기대됩니다.</p>
                </header>
                <div className="info-box">
                  <h3>예상 ROE</h3>
                  <p>FY24 ROE 9% → FY27E 18% 예상.</p>
                  <p>무차입 구조라 레버리지에 의존하지 않아 안전성이 높습니다.</p>
                </div>
              </div>
            </section>

            <section className="panel panel--highlights" id="section-2-5">
              <header className="panel__header">
                <h2>2.5 비교할 성장주</h2>
                <p>동일한 “데이터 + AI” 테마에서 주목할 만한 두 곳을 함께 살펴보세요.</p>
              </header>
              <div className="comparison-grid">
                {comparisonCards.map((card) => (
                  <article key={card.name} className="comparison-card">
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                    <div className="comparison-card__pill">Upside · {card.upside}</div>
                    <div className="comparison-card__pill comparison-card__pill--risk">Risk · {card.risk}</div>
                  </article>
                ))}
              </div>
            </section>

            <section className="panel panel--info">
              <header className="panel__header">
                <h2>3. 비즈니스 핵심 포인트</h2>
                <p>투자자에게 중요한 지표와 우리가 수집한 데이터를 정리했어요.</p>
              </header>
              <div className="info-highlights">
                {highlightCards.map((card) => (
                  <article key={card.title}>
                    <div className="highlight-icon">{card.icon}</div>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="panel panel--table">
              <header className="panel__header">
                <h2>Company Analysis and Financial Data Status</h2>
                <p>리포트에서 사용한 데이터와 출처를 투명하게 공유합니다.</p>
              </header>
              <div className="data-table">
                <div className="data-table__row data-table__row--header">
                  <span>지표</span>
                  <span>타입</span>
                  <span>업데이트</span>
                  <span>출처</span>
                </div>
                <div className="data-table__row">
                  <span>주가 / 시총</span>
                  <span>마켓 데이터</span>
                  <span>2025-10-30</span>
                  <span>NASDAQ, KRX</span>
                </div>
                <div className="data-table__row">
                  <span>재무제표</span>
                  <span>10-K, 10-Q</span>
                  <span>2024-12-31</span>
                  <span>SEC EDGAR</span>
                </div>
                <div className="data-table__row">
                  <span>컨센서스 전망</span>
                  <span>애널리스트 추정</span>
                  <span>2025-10-25</span>
                  <span>Bloomberg, FactSet</span>
                </div>
                <div className="data-table__row">
                  <span>고객 사례</span>
                  <span>기자재 조사</span>
                  <span>2025-10-20</span>
                  <span>팔란티어 고객 인터뷰</span>
                </div>
              </div>
              <div className="data-footnotes">
                <p>
                  모든 숫자는 공개 자료를 바탕으로 재구성했습니다. Phase 0에서는 리포트 문체와 정보 구조를 검증하는 데
                  집중합니다.
                </p>
                <p>피드백은 notion.so/donut-report/feedback 으로 보내주세요.</p>
              </div>
            </section>
          </main>
        </div>

        <footer className="footer">
          <div className="footer__brand">
            <div className="logo-circle logo-circle--footer">🍩</div>
            <div>
              <span className="brand-name">Donut Report</span>
              <span className="brand-sub">이해하기 쉬운 투자 리포트</span>
            </div>
          </div>
          <div className="footer__links">
            <div>
              <h4>Product</h4>
              <ul>
                <li>Phase 0 실험</li>
                <li>Phase 1 자동화</li>
                <li>가격 안내</li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>About</li>
                <li>채용</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li>FAQ</li>
                <li>피드백 보내기</li>
                <li>개인정보 처리방침</li>
              </ul>
            </div>
          </div>
          <p className="footer__copyright">© 2025 Donut Report. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
