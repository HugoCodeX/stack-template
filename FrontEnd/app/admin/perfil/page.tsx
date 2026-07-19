import { DashboardShell } from '@/components/layout/dashboard-shell'

export default function PerfilPage() {
  return (
    <DashboardShell>
      <main className="flex flex-col gap-6 p-4 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nexo Fitness · Perfil</p>
        <p className="text-sm text-muted-foreground">Página de perfil.</p>
      </main>
    </DashboardShell>
  )
}
