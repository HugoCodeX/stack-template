import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MetricCards } from '@/components/dashboard/metric-cards'
import { RecentRegistrations } from '@/components/dashboard/recent-registrations'
import { DynamicPerformanceChart as PerformanceChart, DynamicCitySessions as CitySessions } from '@/components/dashboard/dynamic-charts'
import { DashboardShell } from '@/components/layout/dashboard-shell'

const PageHeader = (
  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nexo Fitness · Administración</p>
      <h1 className="mt-1 text-balance text-3xl font-semibold tracking-tight">Rendimiento del centro</h1>
      <p className="mt-1 text-sm text-muted-foreground">Actividad, usuarios y crecimiento de tu comunidad.</p>
    </div>
    <Button variant="outline" size="sm"><Download className="size-3.5" />Exportar</Button>
  </div>
)

export default function DashboardPage() {
  return <DashboardShell><main className="flex flex-col gap-6 p-4 md:p-8">
    {PageHeader}
    <MetricCards />
    <section className="grid gap-4 lg:grid-cols-2">
      <PerformanceChart />
      <CitySessions />
    </section>
    <RecentRegistrations />
  </main></DashboardShell>
}
