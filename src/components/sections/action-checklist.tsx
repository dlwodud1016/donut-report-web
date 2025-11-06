import { Card } from '@/components/ui/card';
import { actionSteps, decisionRule } from '@/data/palantir';

export function ActionChecklist(): JSX.Element {
  return (
    <Card className="space-y-6 bg-card p-8 shadow-lg dark:bg-slate-900/70 dark:shadow-2xl">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Phase 0 체크리스트</h2>
        <p className="text-base text-muted-foreground">이 실험에서 해야 할 일과 확인 포인트.</p>
      </header>
      <div className="space-y-4">
        {actionSteps.map((step) => (
          <article key={step.heading} className="rounded-3xl border border-border/40 bg-card p-6 shadow-lg dark:bg-slate-950/55 dark:shadow-xl dark:shadow-black/20">
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
      <div className="rounded-3xl border border-success/40 bg-success/10 p-6 text-sm text-success dark:border-success/40 dark:bg-success/20 dark:text-success-foreground">
        <h3 className="text-lg font-semibold text-success dark:text-success-foreground">판단 기준</h3>
        <p className="mt-2 text-foreground dark:text-success-foreground">{decisionRule.go}</p>
        <p className="mt-1 text-foreground dark:text-success-foreground">{decisionRule.pivot}</p>
        <p className="mt-3 italic text-success/80 dark:text-success-foreground/80">{decisionRule.reminder}</p>
      </div>
    </Card>
  );
}
