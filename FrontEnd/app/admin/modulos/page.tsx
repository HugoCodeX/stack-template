import { Box } from 'lucide-react'
import { DashboardShell } from '@/components/layout/dashboard-shell'

const PageContent = (
  <>
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nexo Fitness · Administración</p>
      <h1 className="mt-1 text-balance text-3xl font-semibold tracking-tight">Módulos</h1>
      <p className="mt-1 text-sm text-muted-foreground">Administra los módulos y funcionalidades del sistema.</p>
    </div>
    <div className="flex flex-1 items-center justify-center rounded-xl border-2 border-dashed p-16">
      <div className="text-center">
        <Box className="mx-auto mb-4 size-12 text-muted-foreground/30" />
        <p className="text-lg font-medium text-muted-foreground">Próximamente</p>
        <p className="mt-1 text-sm text-muted-foreground/60">Esta sección está en desarrollo.</p>
      </div>
    </div>
  </>
)

export default function ModulosPage() {
  return (
    <DashboardShell>
      <main className="flex flex-col gap-6 p-4 md:p-8">
        {PageContent}
      </main>
    </DashboardShell>
  )
}
