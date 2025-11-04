import { Card } from '@/components/ui/card';
import { highlightCards } from '@/data/palantir';

export function BusinessHighlightsSection(): JSX.Element {
  return (
    <Card className="space-y-6 bg-gradient-to-br from-slate-900/70 via-slate-950/50 to-slate-900/60 p-8 shadow-2xl">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">3. 비즈니스 핵심 포인트</h2>
        <p className="text-base text-muted-foreground">투자자에게 중요한 지표와 우리가 수집한 데이터를 정리했어요.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {highlightCards.map((card) => (
          <article key={card.title} className="rounded-3xl border border-border/40 bg-slate-950/55 p-6 shadow-xl shadow-black/30 backdrop-blur">
            <div className="text-3xl drop-shadow">{card.icon}</div>
            <h3 className="mt-3 text-lg font-semibold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
          </article>
        ))}
      </div>
    </Card>
  );
}
