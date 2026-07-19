import { UsersMetricCards } from '@/components/dashboard/users-metric-cards'
import { UsersTable } from '@/components/dashboard/users-table'
import { DashboardShell } from '@/components/layout/dashboard-shell'

const PageHeader = (
  <div className="flex items-center justify-between">
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nexo Fitness · Administración</p>
      <h1 className="mt-1 text-balance text-3xl font-semibold tracking-tight">Miembros</h1>
      <p className="mt-1 text-sm text-muted-foreground">Gestiona los miembros registrados en tu plataforma.</p>
    </div>
  </div>
)

const TableHeader = (
  <div className="mb-4 flex items-center justify-between">
    <div>
      <h2 className="text-lg font-semibold">Todos los miembros</h2>
      <p className="text-sm text-muted-foreground">Listado completo de miembros registrados en el sistema.</p>
    </div>
  </div>
)

export default function MiembrosPage() {
  return (
    <DashboardShell>
      <main className="flex flex-col gap-6 p-4 md:p-8">
        {PageHeader}
        <UsersMetricCards />
        <div>
          {TableHeader}
          <UsersTable />
        </div>
      </main>
    </DashboardShell>
  )
}
