import { Card } from '@/components/ui/card';
import { hero } from '@/data/palantir';

export function HeroSummary(): JSX.Element {
  return (
    <Card className="space-y-6 bg-slate-900/80 p-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{hero.industry}</p>
        <h1 className="text-4xl font-semibold text-foreground">{hero.name}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="rounded-full border border-border/40 bg-slate-950/60 px-4 py-1">{hero.ticker}</span>
          <span className="rounded-full border border-border/40 bg-slate-950/60 px-4 py-1">{hero.price}</span>
          <span className="text-muted-foreground/70">{hero.updated}</span>
        </div>
      </header>
      <p className="max-w-3xl text-base text-muted-foreground">{hero.summary}</p>
      <ul className="grid gap-3 text-sm text-muted-foreground lg:grid-cols-3">
        {hero.heroPoints.map((point) => (
          <li key={point} className="rounded-2xl border border-border/40 bg-slate-950/50 px-4 py-3">
            {point}
          </li>
        ))}
      </ul>
    </Card>
  );
}
