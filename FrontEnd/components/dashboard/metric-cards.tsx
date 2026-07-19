import { TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { metrics } from '@/lib/dashboard-data'

const accents = ['bg-primary', 'bg-emerald-500', 'bg-amber-500', 'bg-sky-500']

export function MetricCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Métricas principales">
      {metrics.map(({ label, value, change, note, icon: Icon }, i) => (
        <Card key={label} className="relative overflow-hidden transition-shadow hover:shadow-md">
          <div className={`absolute inset-x-0 top-0 h-1 ${accents[i]}`} />
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4" />
              </div>
            </div>
            <p className="mt-3 text-3xl font-bold tracking-tight tabular-nums">{value}</p>
            <div className="mt-3 flex items-center gap-1.5 text-xs">
              <TrendingUp className="size-3 text-primary" />
              <span className="font-semibold text-primary">{change}</span>
              <span className="text-muted-foreground">{note}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
