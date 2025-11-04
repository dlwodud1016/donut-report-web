import { Card } from '@/components/ui/card';
import { comparisonCards } from '@/data/palantir';

export function ComparablesSection(): JSX.Element {
  return (
    <Card id="section-2-5" className="space-y-6 bg-gradient-to-br from-slate-900/70 via-indigo-900/40 to-slate-950/60 p-8 shadow-2xl">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">2.5 비교할 성장주</h2>
        <p className="text-base text-muted-foreground">동일한 “데이터 + AI” 테마에서 주목할 만한 두 곳을 함께 살펴보세요.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {comparisonCards.map((card) => (
          <article key={card.name} className="flex flex-col rounded-3xl border border-border/40 bg-slate-950/55 p-6 shadow-xl shadow-black/30 backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-foreground">{card.name}</h3>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
                Peer
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{card.description}</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-emerald-100">
                <dt className="text-xs uppercase tracking-[0.18em] text-emerald-200/80">Upside Signal</dt>
                <dd className="mt-1 font-medium text-emerald-100">{card.upside}</dd>
              </div>
              <div className="rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-rose-100">
                <dt className="text-xs uppercase tracking-[0.18em] text-rose-200/80">Risk Watch</dt>
                <dd className="mt-1 font-medium text-rose-100">{card.risk}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Card>
  );
}
