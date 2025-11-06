import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { metricChips } from '@/data/palantir';
import { cn } from '@/lib/utils';

const chipClasses = {
  positive: 'border-success/50 bg-success/10 text-success dark:bg-success/15 dark:text-success-foreground',
  neutral: 'border-info/40 bg-info/10 text-info dark:bg-info/15 dark:text-info-foreground',
  attention: 'border-warning/50 bg-warning/10 text-warning dark:bg-warning/15 dark:text-warning-foreground',
} as const;

export function IntroSection(): JSX.Element {
  return (
    <Card id="section-2" className="border border-primary/20 bg-card p-8 shadow-lg dark:border-primary/40">
      <CardHeader className="space-y-4 p-0 text-foreground">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
          2. Palantir Technologies의 미래 성장
        </p>
        <CardTitle className="text-3xl font-semibold leading-tight">
          “인공지능 셰프”가 만드는 데이터 성장 스토리
        </CardTitle>
        <p className="max-w-3xl text-base text-muted-foreground">
          팔란티어는 정부·민간 고객의 복잡한 데이터를 정리하고, AI가 바로 활용할 수 있게 만들어 주는 플랫폼입니다. 이번 실험에서는 리포트를 쉬운 말투로 재구성하고, 실제 독자
          반응을 통해 Phase 1 진행 여부를 판단합니다.
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metricChips.map((chip) => (
            <div
              key={chip.label}
              className={cn(
                'rounded-3xl border px-5 py-6 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl dark:shadow-black/30',
                chipClasses[chip.tone],
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-current opacity-70 dark:text-white/70">{chip.label}</p>
              <p className="mt-3 text-2xl font-semibold text-current dark:text-white">{chip.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
