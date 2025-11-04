import { Card } from '@/components/ui/card';
import { timelineItems } from '@/data/palantir';
import { cn } from '@/lib/utils';

const toneStyles = {
  positive: 'border-emerald-400/50 bg-emerald-400',
  neutral: 'border-sky-300/60 bg-sky-300',
  attention: 'border-amber-400/60 bg-amber-400',
} as const;

const toneBadges = {
  positive: 'border-emerald-400/40 bg-emerald-500/15 text-emerald-100',
  neutral: 'border-sky-400/40 bg-sky-500/15 text-sky-100',
  attention: 'border-amber-400/40 bg-amber-500/15 text-amber-100',
} as const;

export function TimelineSection(): JSX.Element {
  return (
    <Card className="space-y-6 bg-gradient-to-br from-slate-900/80 via-slate-950/60 to-blue-950/50 p-8 shadow-2xl" id="section-2-0">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">주가 & 최근 이슈</h2>
        <p className="text-base text-muted-foreground">최근 한 달간의 주요 뉴스 흐름을 Impact별로 정리했습니다.</p>
      </header>
      <div className="space-y-4">
        {timelineItems.map((event) => (
          <article key={event.title} className="grid grid-cols-[auto_1fr] items-stretch gap-4">
            <span className={cn('mt-3 h-3 w-3 rounded-full border-2 shadow ring-4 ring-white/5', toneStyles[event.tone])} />
            <div className="rounded-3xl border border-border/40 bg-slate-950/50/80 p-5 shadow-lg shadow-black/30 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">{event.date}</span>
                <span className={cn('rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide', toneBadges[event.tone])}>
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
