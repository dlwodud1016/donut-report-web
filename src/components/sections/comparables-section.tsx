import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { comparisonCards } from '@/data/palantir';

export function ComparablesSection(): JSX.Element {
  return (
    <Card id="section-2-5" className="bg-card p-8 shadow-lg dark:bg-slate-900/70 dark:shadow-2xl">
      <CardHeader className="space-y-2 p-0">
        <CardTitle className="text-2xl font-semibold text-foreground">
          2.5 비슷한 성장주와 비교
        </CardTitle>
        <p className="text-base text-muted-foreground">
          같은 “데이터 + AI” 흐름에서 자주 언급되는 기업 두 곳을 나란히 보면서 팔란티어의 위치를 가늠해 보세요.
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid gap-4 md:grid-cols-2">
          {comparisonCards.map((card) => (
            <article key={card.name} className="flex flex-col rounded-3xl border border-border/40 bg-card p-6 shadow-lg dark:bg-slate-950/55 dark:shadow-xl dark:shadow-black/30">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">{card.name}</h3>
                <span className="rounded-full border border-border/40 bg-secondary/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground dark:border-white/10 dark:bg-white/10 dark:text-muted-foreground/80">
                  Peer
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{card.description}</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-100 px-4 py-3 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-100">
                  <dt className="text-xs uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-200/80">Upside Signal</dt>
                  <dd className="mt-1 font-medium text-current dark:text-emerald-100">{card.upside}</dd>
                </div>
                <div className="rounded-2xl border border-rose-400/30 bg-rose-100 px-4 py-3 text-rose-800 dark:bg-rose-500/10 dark:text-rose-100">
                  <dt className="text-xs uppercase tracking-[0.18em] text-rose-600 dark:text-rose-200/80">Risk Watch</dt>
                  <dd className="mt-1 font-medium text-current dark:text-rose-100">{card.risk}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
