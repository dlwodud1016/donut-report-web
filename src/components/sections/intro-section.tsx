import { Card } from '@/components/ui/card';
import { metricChips } from '@/data/palantir';
import { cn } from '@/lib/utils';

const chipClasses = {
  positive: 'border-emerald-300/40 from-emerald-500/25 via-emerald-500/10 to-teal-400/10 text-emerald-100',
  neutral: 'border-sky-300/40 from-sky-500/20 via-slate-900/50 to-sky-400/15 text-sky-100',
  attention: 'border-amber-300/40 from-amber-500/25 via-amber-500/10 to-orange-400/10 text-amber-100',
} as const;

export function IntroSection(): JSX.Element {
  return (
    <Card id="section-2" className="border-primary/40 bg-gradient-to-br from-blue-600/25 via-blue-400/10 to-slate-900/60 p-8 shadow-2xl">
      <header className="space-y-4 text-foreground">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">2. Palantir Technologies의 미래 성장</p>
        <h2 className="text-3xl font-semibold leading-tight">“인공지능 셰프”가 만드는 데이터 성장 스토리</h2>
        <p className="max-w-3xl text-base text-muted-foreground">
          팔란티어는 정부·민간 고객의 복잡한 데이터를 정리하고, AI가 바로 활용할 수 있게 만들어 주는 플랫폼입니다. 이번 실험에서는 리포트를 쉬운 말투로 재구성하고, 실제 독자
          반응을 통해 Phase 1 진행 여부를 판단합니다.
        </p>
      </header>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metricChips.map((chip) => (
          <div
            key={chip.label}
            className={cn(
              'rounded-3xl border bg-gradient-to-br px-5 py-6 shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:shadow-xl',
              chipClasses[chip.tone],
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">{chip.label}</p>
            <p className="mt-3 text-2xl font-semibold text-white">{chip.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
