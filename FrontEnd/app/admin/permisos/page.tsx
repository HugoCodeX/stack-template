import { Check, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { DashboardShell } from '@/components/layout/dashboard-shell'
import { permissions, roles } from '@/lib/roles-data'

const moduleColors = new Map<string, string>([
  ['Miembros', 'bg-blue-500/10 text-blue-600 dark:text-blue-400'],
  ['Roles', 'bg-purple-500/10 text-purple-600 dark:text-purple-400'],
  ['Permisos', 'bg-amber-500/10 text-amber-600 dark:text-amber-400'],
  ['Sesiones', 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'],
  ['Configuración', 'bg-slate-500/10 text-slate-600 dark:text-slate-400'],
])

const PageHeader = (
  <div>
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nexo Fitness · Administración</p>
    <h1 className="mt-1 text-balance text-3xl font-semibold tracking-tight">Permisos</h1>
    <p className="mt-1 text-sm text-muted-foreground">Matriz de permisos por rol del sistema.</p>
  </div>
)

export default function PermisosPage() {
  return (
    <DashboardShell>
      <main className="flex flex-col gap-6 p-4 md:p-8">
        {PageHeader}

        <div className="overflow-hidden rounded-xl border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="sticky left-0 bg-muted/40 px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Permiso
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Módulo
                  </th>
                  <th className="hidden px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:table-cell">
                    Descripción
                  </th>
                  {roles.map(role => (
                    <th key={role.id} className="min-w-[100px] px-4 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {role.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {permissions.map((perm, i) => (
                  <tr key={perm.id} className={`border-b last:border-0 transition-colors hover:bg-muted/20 ${i % 2 === 0 ? 'bg-background' : 'bg-muted/10'}`}>
                    <td className="sticky left-0 bg-[inherit] px-5 py-4">
                      <span className="text-sm font-medium">{perm.name}</span>
                    </td>
                    <td className="px-4 py-4">
                      <Badge variant="secondary" className={`text-[10px] font-normal ${moduleColors.get(perm.module) || ''}`}>
                        {perm.module}
                      </Badge>
                    </td>
                    <td className="hidden max-w-[200px] truncate px-4 py-4 text-sm text-muted-foreground sm:table-cell">
                      {perm.description}
                    </td>
                    {roles.map(role => {
                      const hasIt = role.permissions[0] === 'all' || role.permissions.includes(perm.slug)
                      return (
                        <td key={role.id} className="px-4 py-4 text-center">
                          {hasIt ? (
                            <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Check className="size-3.5" />
                            </span>
                          ) : (
                            <span className="inline-flex size-6 items-center justify-center rounded-full bg-muted text-muted-foreground/30">
                              <X className="size-3.5" />
                            </span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          {permissions.length} permisos · {roles.length} roles
        </p>
      </main>
    </DashboardShell>
  )
}
