import { DashboardShell } from '@/components/layout/dashboard-shell'

export default function InicioPage() {
  return (
    <DashboardShell>
      <main className="flex flex-col gap-6 p-4 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nexo Fitness · Inicio</p>
        <p className="text-sm text-muted-foreground">Página de inicio.</p>
      </main>
    </DashboardShell>
  )
}
