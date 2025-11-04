import { Card } from '@/components/ui/card';
import { actionSteps, decisionRule } from '@/data/palantir';

export function ActionChecklist(): JSX.Element {
  return (
    <Card className="space-y-6 bg-gradient-to-br from-slate-900/70 via-slate-950/50 to-teal-900/40 p-8 shadow-2xl">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Phase 0 체크리스트</h2>
        <p className="text-base text-muted-foreground">이 실험에서 해야 할 일과 확인 포인트.</p>
      </header>
      <div className="space-y-4">
        {actionSteps.map((step) => (
          <article key={step.heading} className="rounded-3xl border border-border/40 bg-slate-950/55 p-6 shadow-xl shadow-black/20">
            <h3 className="text-lg font-semibold text-foreground">{step.heading}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.context}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {step.tasks.map((task) => (
                <li key={task}>• {task}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="rounded-3xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/20 via-slate-950/70 to-emerald-500/10 p-6 text-sm text-emerald-100 shadow-lg shadow-black/20">
        <h3 className="text-lg font-semibold text-emerald-50">판단 기준</h3>
        <p className="mt-2">{decisionRule.go}</p>
        <p className="mt-1">{decisionRule.pivot}</p>
        <p className="mt-3 italic text-emerald-100/80">{decisionRule.reminder}</p>
      </div>
    </Card>
  );
}
