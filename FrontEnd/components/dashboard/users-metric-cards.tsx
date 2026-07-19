import { Ban, TrendingDown, TrendingUp, UserCheck, UserX, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { users } from '@/lib/users-data'

const active = users.filter(u => u.status === 'Activo').length
const pending = users.filter(u => u.status === 'Pendiente').length
const inactive = users.filter(u => u.status === 'Inactivo').length

const cards = [
  {
    label: 'Usuarios totales',
    value: users.length,
    change: '+12,5%',
    note: 'vs. mes anterior',
    icon: Users,
    accent: 'bg-primary',
    direction: 'up' as const,
  },
  {
    label: 'Usuarios activos',
    value: active,
    change: `+${((active / (users.length - active)) * 100).toFixed(1)}%`,
    note: 'del total',
    icon: UserCheck,
    accent: 'bg-emerald-500',
    direction: 'up' as const,
  },
  {
    label: 'Usuarios baneados',
    value: pending,
    change: `${((pending / users.length) * 100).toFixed(0)}%`,
    note: 'del total',
    icon: Ban,
    accent: 'bg-amber-500',
    direction: 'neutral' as const,
  },
  {
    label: 'Usuarios inactivos',
    value: inactive,
    change: `-${((inactive / (users.length - inactive)) * 100).toFixed(1)}%`,
    note: 'vs. activos',
    icon: UserX,
    accent: 'bg-destructive',
    direction: 'down' as const,
  },
]

export function UsersMetricCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Métricas de usuarios">
      {cards.map(({ label, value, change, note, icon: Icon, accent, direction }) => (
        <Card key={label} className="relative overflow-hidden transition-shadow hover:shadow-md">
          <div className={`absolute inset-x-0 top-0 h-1 ${accent}`} />
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
              <div className={`flex size-8 items-center justify-center rounded-lg ${direction === 'up' ? 'bg-primary/10 text-primary' : direction === 'down' ? 'bg-destructive/10 text-destructive' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'}`}>
                <Icon className="size-4" />
              </div>
            </div>
            <p className="mt-3 text-3xl font-bold tracking-tight tabular-nums">{value}</p>
            <div className="mt-3 flex items-center gap-1.5 text-xs">
              {direction === 'up' && <TrendingUp className="size-3 text-primary" />}
              {direction === 'down' && <TrendingDown className="size-3 text-destructive" />}
              {direction === 'neutral' && <Ban className="size-3 text-amber-500" />}
              <span className={`font-semibold ${direction === 'up' ? 'text-primary' : direction === 'down' ? 'text-destructive' : 'text-amber-600 dark:text-amber-400'}`}>
                {change}
              </span>
              <span className="text-muted-foreground">{note}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
