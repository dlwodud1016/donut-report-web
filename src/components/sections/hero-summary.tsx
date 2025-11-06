import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { hero } from '@/data/palantir';

export function HeroSummary(): JSX.Element {
  return (
    <Card className="bg-white/90 p-8 shadow-lg dark:bg-slate-900/80 dark:shadow-xl">
      <CardHeader className="space-y-3 p-0">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{hero.industry}</p>
        <CardTitle className="text-4xl font-semibold text-foreground">
          {hero.name}
        </CardTitle>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="rounded-full border border-border/30 bg-muted px-4 py-1 dark:border-border/40 dark:bg-slate-950/60">{hero.ticker}</span>
          <span className="rounded-full border border-border/30 bg-muted px-4 py-1 dark:border-border/40 dark:bg-slate-950/60">{hero.price}</span>
          <span className="text-muted-foreground/70">{hero.updated}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 p-0 text-muted-foreground">
        <p className="max-w-3xl text-base">{hero.summary}</p>
        <ul className="grid gap-3 text-sm lg:grid-cols-3">
          {hero.heroPoints.map((point) => (
            <li key={point} className="rounded-2xl border border-border/40 bg-muted px-4 py-3 dark:bg-slate-950/50">
              {point}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
