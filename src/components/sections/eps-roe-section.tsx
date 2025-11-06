import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function EpsRoeSection(): JSX.Element {
  return (
    <Card id="section-2-3" className="grid gap-8 bg-card p-8 shadow-lg dark:bg-slate-900/70 lg:grid-cols-2">
      <CardContent className="space-y-5 p-0">
        <CardHeader className="space-y-2 p-0">
          <CardTitle className="text-2xl font-semibold text-foreground">2.3 한 주당 벌어들일 돈(EPS)</CardTitle>
          <p className="text-base text-muted-foreground">
            스톡옵션 비용이 줄고 고정비가 분산되면서 한 주당 벌어들이는 돈이 빠르게 늘어납니다. 현금을 쌓는 속도가 얼마나 빨라지는지에 주목해 주세요.
          </p>
        </CardHeader>
        <div className="rounded-3xl border border-success/40 bg-success/10 p-6 shadow-lg backdrop-blur dark:border-success/40 dark:bg-success/15 dark:shadow-xl dark:shadow-black/30">
          <h3 className="text-lg font-semibold text-foreground">EPS 성장 궤적</h3>
          <p className="mt-3 text-sm text-emerald-700 dark:text-emerald-100/80">FY23 EPS 0.09달러 → FY27E EPS 0.35달러 (연평균 성장률 +41%).</p>
          <p className="mt-2 text-sm text-emerald-700/80 dark:text-emerald-100/70">현금흐름이 증가하고 주식 보상 희석이 둔화되며 순이익이 빠르게 쌓입니다.</p>
          <ul className="mt-4 space-y-2 rounded-2xl border border-emerald-400/20 bg-secondary/70 p-4 text-sm text-muted-foreground dark:bg-slate-950/50">
            <li>• 주식 보상(SBC) 비용 비중: FY21 28% → FY27E 14%</li>
            <li>• 잉여현금흐름(FCF) 마진: FY23 22% → FY27E 30%</li>
            <li>• 순현금 포지션을 유지해 금리 변동 리스크가 낮습니다.</li>
          </ul>
        </div>
      </CardContent>
      <CardContent className="space-y-5 p-0" id="section-2-4">
        <CardHeader className="space-y-2 p-0">
          <CardTitle className="text-2xl font-semibold text-foreground">2.4 자본을 얼마나 잘 굴리나(ROE)</CardTitle>
          <p className="text-base text-muted-foreground">
            아직은 낮은 편이지만 매출 총이익률이 78% 수준이라 규모가 커질수록 자본을 쓰는 효율이 빠르게 좋아질 여지가 있습니다.
          </p>
        </CardHeader>
        <div className="rounded-3xl border border-primary/30 bg-primary/10 p-6 shadow-lg backdrop-blur dark:border-primary/40 dark:bg-primary/15 dark:shadow-xl dark:shadow-black/30">
          <h3 className="text-lg font-semibold text-foreground">예상 ROE</h3>
          <p className="mt-3 text-sm text-purple-700 dark:text-purple-100/80">FY24 ROE 9% → FY27E 18% 예상.</p>
          <p className="mt-2 text-sm text-purple-700/80 dark:text-purple-100/70">무차입 구조라 레버리지에 의존하지 않아 안전성이 높습니다.</p>
          <ul className="mt-4 space-y-2 rounded-2xl border border-purple-400/20 bg-secondary/70 p-4 text-sm text-muted-foreground dark:bg-slate-950/50">
            <li>• 총자산 대비 현금성 자산 35% → 가동 가능한 M&amp;A 및 R&amp;D 예산 확보</li>
            <li>• 고객 온보딩 비용이 줄며 매출총이익률 78%선 유지</li>
            <li>• 중장기 ROE 목표: 20%대 초반 (경영진 언급)</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
