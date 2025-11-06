import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { highlightCards } from '@/data/palantir';

export function BusinessHighlightsSection(): JSX.Element {
  return (
    <Card className="bg-card p-8 shadow-lg dark:bg-slate-900/70 dark:shadow-2xl">
      <CardHeader className="space-y-2 p-0">
        <CardTitle className="text-2xl font-semibold text-foreground">
          3. 비즈니스 핵심 포인트
        </CardTitle>
        <p className="text-base text-muted-foreground">
          투자자에게 중요한 지표와 우리가 수집한 데이터를 정리했어요.
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid gap-4 md:grid-cols-3">
          {highlightCards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-border/40 bg-card p-6 shadow-lg dark:bg-slate-950/55 dark:shadow-xl dark:shadow-black/30">
              <div className="text-3xl drop-shadow">{card.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
