import { Card } from '@/components/ui/card';
import { timelineItems } from '@/data/palantir';
import { cn } from '@/lib/utils';

const toneStyles = {
  positive: 'border-success/50 bg-success dark:border-success/60 dark:bg-success',
  neutral: 'border-info/50 bg-info dark:border-info/60 dark:bg-info',
  attention: 'border-warning/60 bg-warning dark:border-warning/60 dark:bg-warning',
} as const;

const badgeStyles = {
  positive:
    "border-success/40 bg-success/10 text-success dark:bg-success/20 dark:text-success-foreground",
  neutral:
    "border-info/40 bg-info/10 text-info dark:bg-info/20 dark:text-info-foreground",
  attention:
    "border-warning/40 bg-warning/10 text-warning dark:bg-warning/20 dark:text-warning-foreground",
} as const;

export function TimelineSection(): JSX.Element {
  return (
    <Card
      className="space-y-6 bg-card p-8 shadow-lg dark:bg-slate-900/70 dark:shadow-2xl"
      id="section-2-0"
    >
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">주가 & 최근 이슈</h2>
        <p className="text-base text-muted-foreground">최근 한 달간의 주요 뉴스 흐름을 Impact별로 정리했습니다.</p>
      </header>
      <div className="space-y-4">
        {timelineItems.map((event) => (
          <article key={event.title} className="grid grid-cols-[auto_1fr] items-stretch gap-4">
            <span className={cn('mt-3 h-3 w-3 rounded-full border-2 shadow ring-4 ring-white/5', toneStyles[event.tone])} />
            <div className="rounded-3xl border border-border/40 bg-white/85 p-5 shadow-lg backdrop-blur dark:bg-slate-950/60 dark:shadow-black/30">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">{event.date}</span>
                <span className={cn('rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide', badgeStyles[event.tone])}>
                  {event.summary}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{event.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{event.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}
