import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function DiversificationSection(): JSX.Element {
  const verticalMix = [
    { label: '정부 · 국방', value: 50, color: 'rgba(56,189,248,0.85)' },
    { label: '제조 · 에너지', value: 35, color: 'rgba(45,212,191,0.85)' },
    { label: '금융 · 헬스 등 규제 산업', value: 15, color: 'rgba(168,85,247,0.8)' },
  ] as const;

  const arpuTrend = [
    { label: 'FY21', value: 1.0 },
    { label: 'FY22', value: 1.08 },
    { label: 'FY23', value: 1.16 },
    { label: 'FY24E', value: 1.23 },
    { label: 'FY25E', value: 1.38 },
  ] as const;

  const mixTotal = verticalMix.reduce((sum, segment) => sum + segment.value, 0);
  let angleCursor = 0;
  const mixGradient = `conic-gradient(from -90deg, ${verticalMix
    .map((segment) => {
      const start = angleCursor;
      const end = angleCursor + (segment.value / mixTotal) * 360;
      angleCursor = end;
      return `${segment.color} ${start}deg ${end}deg`;
    })
    .join(', ')})`;

  const chartWidth = 320;
  const chartHeight = 160;
  const paddingX = 36;
  const paddingY = 26;
  const arpuValues = arpuTrend.map((point) => point.value);
  const minValue = Math.min(...arpuValues);
  const maxValue = Math.max(...arpuValues);
  const valueRange = Math.max(maxValue - minValue, 0.0001);
  const xStep =
    arpuTrend.length > 1
      ? (chartWidth - paddingX * 2) / (arpuTrend.length - 1)
      : 0;

  const arpuPoints = arpuTrend.map((point, index) => {
    const x = paddingX + index * xStep;
    const normalized = (point.value - minValue) / valueRange;
    const y =
      chartHeight - paddingY - normalized * (chartHeight - paddingY * 2);
    return { ...point, x, y, percent: Math.round(point.value * 100) };
  });

  const linePath = arpuPoints
    .map((point, index) =>
      index === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`
    )
    .join(' ');

  const areaPath = `${linePath} L ${
    arpuPoints[arpuPoints.length - 1]?.x ?? paddingX
  } ${chartHeight - paddingY} L ${arpuPoints[0]?.x ?? paddingX} ${
    chartHeight - paddingY
  } Z`;

  const baseValue = arpuPoints[0]?.value ?? 1;
  const latestValue = arpuPoints[arpuPoints.length - 1]?.value ?? baseValue;
  const totalGrowth = Math.round(((latestValue - baseValue) / baseValue) * 100);

  return (
    <Card id="section-2-2" className="space-y-8 bg-gradient-to-br from-indigo-900/30 via-slate-950/70 to-blue-900/40 p-8 shadow-2xl">
      <CardHeader className="space-y-3">
        <CardTitle className="text-2xl text-foreground">2.2 수익 다변화 계획</CardTitle>
        <p className="text-base text-muted-foreground">
          정부·국방 50%, 제조·에너지 35%, 규제 산업 15%로 포트폴리오를 쌓고 있습니다. 안정적인 정부 수요에, 민간 ARPU 성장까지 더해진 구조를 확인해 보세요.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="space-y-4 rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-500/20 via-slate-900/70 to-slate-950/70 p-6 shadow-xl shadow-black/30 backdrop-blur">
            <header>
              <h3 className="text-lg font-semibold text-foreground">산업별 매출 비중</h3>
              <p className="mt-1 text-sm text-sky-100/80">방위·민간 수요가 함께 성장하면서 수익 안정성과 업셀 파이프라인 모두를 확보했습니다.</p>
            </header>
            <div className="relative flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/20 via-slate-950/70 to-slate-950/90 px-6 py-6">
              <div
                className="relative h-32 w-32 rounded-full border border-white/10 shadow-inner shadow-black/40"
                style={{ backgroundImage: mixGradient }}
                aria-hidden="true"
              >
                <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100/80">
                  <span>Revenue</span>
                  <span className="mt-1 text-xs tracking-normal text-slate-100/75">Mix</span>
                </div>
              </div>
              <ul className="grid w-full grid-cols-1 gap-3 text-[11px] uppercase tracking-wide text-slate-100/80 sm:grid-cols-3">
                {verticalMix.map((segment) => (
                  <li key={segment.label} className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-2 text-center shadow-inner">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: segment.color }}
                      aria-hidden="true"
                    />
                    <span className="text-[10px] text-slate-100/70">{segment.label}</span>
                    <span className="text-sm font-semibold text-slate-100">{Math.round((segment.value / mixTotal) * 100)}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="space-y-2 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200/80">
              <li>• 정부·국방 프로젝트로 전체 매출의 절반을 안정적으로 확보</li>
              <li>• 제조·에너지 고객에게 “예지 정비” 모듈을 패키지로 판매 중</li>
            </ul>
          </article>
          <article className="space-y-4 rounded-3xl border border-purple-400/30 bg-gradient-to-br from-purple-500/20 via-slate-900/70 to-slate-950/70 p-6 shadow-xl shadow-black/30 backdrop-blur">
            <header>
              <h3 className="text-lg font-semibold text-foreground">고객당 평균 매출 증감 (YoY)</h3>
              <p className="mt-1 text-sm text-purple-100/80">기존 고객이 AIP 모듈을 덧붙이며 연평균 18%씩 지출이 늘고 있습니다.</p>
            </header>
            <div className="relative min-h-[13rem] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/20 via-slate-950/80 to-slate-950 px-4 py-6">
              <div className="absolute left-5 top-5 flex flex-col gap-1 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-slate-100">
                <span className="uppercase tracking-[0.18em] text-slate-300">NRR Trend</span>
                <span className="text-sm font-semibold text-white">
                  {totalGrowth >= 0 ? '+' : ''}
                  {totalGrowth}% vs FY21
                </span>
              </div>
              <svg
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                className="h-full w-full text-purple-300"
                role="img"
                aria-label="ARPU growth trend from FY21 to FY25E"
              >
                <defs>
                  <linearGradient id="arpu-area" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(192,132,252,0.45)" />
                    <stop offset="100%" stopColor="rgba(56,189,248,0.05)" />
                  </linearGradient>
                  <linearGradient id="arpu-line" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="rgba(192,132,252,0.9)" />
                    <stop offset="100%" stopColor="rgba(56,189,248,0.9)" />
                  </linearGradient>
                </defs>
                <g opacity={0.3} stroke="rgba(148,163,184,0.35)" strokeDasharray="4 6">
                  {[0, 1, 2].map((level) => {
                    const y =
                      paddingY + (level / 3) * (chartHeight - paddingY * 2);
                    return (
                      <line
                        key={y}
                        x1={paddingX}
                        x2={chartWidth - paddingX}
                        y1={y}
                        y2={y}
                      />
                    );
                  })}
                </g>
                <path d={areaPath} fill="url(#arpu-area)" stroke="none" />
                <path
                  d={linePath}
                  fill="none"
                  stroke="url(#arpu-line)"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
                {arpuPoints.map((point) => (
                  <g key={point.label}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={4.5}
                      fill="rgba(255,255,255,0.9)"
                      stroke="rgba(192,132,252,0.9)"
                      strokeWidth={1.5}
                    />
                    <text
                      x={point.x}
                      y={point.y - 12}
                      textAnchor="middle"
                      className="fill-slate-100 text-[11px] font-semibold"
                    >
                      {point.percent}
                    </text>
                    <text
                      x={point.x}
                      y={chartHeight - paddingY + 18}
                      textAnchor="middle"
                      className="fill-slate-300 text-[10px] uppercase tracking-[0.18em]"
                    >
                      {point.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <ul className="space-y-2 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm text-slate-200/80">
              <li>• FY25 기존 고객 순증가율(NRR) 113% → 업셀 효과 지속</li>
              <li>• AIP 워크플로 구축 건수 YoY +32%로 ARPU 확대를 견인</li>
            </ul>
          </article>
        </section>
        <ul className="space-y-3 rounded-3xl border border-border/40 bg-slate-950/60 p-6 text-sm text-muted-foreground">
          <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400/80 shadow"></span>미국 국방부·NATO 등 대형 정부 고객과의 장기 계약으로 기본 현금흐름이 확보돼 있습니다.</li>
          <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400/80 shadow"></span>제조·에너지 고객의 “예지 정비” 성공 사례가 민간 레퍼런스로 축적되고 있습니다.</li>
          <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-purple-400/80 shadow"></span>금융권 사기 탐지, 헬스케어 수요 예측 등 고마진 산업으로 범위를 넓히고 있습니다.</li>
          <li className="flex gap-3 text-amber-200"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400/80 shadow"></span>경쟁사(스노우플레이크, 데이터브릭스)의 AI 제안도 빠르게 진화 중이라 “실제 고객 사례” 확보가 관건입니다.</li>
        </ul>
      </CardContent>
    </Card>
  );
}
