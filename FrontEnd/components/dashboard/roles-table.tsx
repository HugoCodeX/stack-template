'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Pencil, Search, Shield, ShieldPlus, Trash2, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { roles } from '@/lib/roles-data'

const ITEMS_PER_PAGE = 10

export function RolesTable() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)

  const filtered = roles.filter(r => {
    const q = search.toLowerCase()
    if (q && ![r.name, r.description, r.id].some(f => f.toLowerCase().includes(q))) return false
    return true
  })

  const total = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const p = Math.min(page, Math.max(0, total - 1))
  const rows = filtered.slice(p * ITEMS_PER_PAGE, (p + 1) * ITEMS_PER_PAGE)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar rol..."
            className="h-9 pl-8 text-sm"
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(0) }}
          />
        </div>
        <Button><ShieldPlus className="size-4" />Nuevo rol</Button>
      </div>

      <div className="overflow-hidden rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40">
              <TableHead className="pl-5"><div className="flex items-center gap-1.5"><Shield className="size-3.5 text-muted-foreground" />Rol</div></TableHead>
              <TableHead><div className="flex items-center gap-1.5"><User className="size-3.5 text-muted-foreground" />Miembros</div></TableHead>
              <TableHead className="hidden md:table-cell">Permisos</TableHead>
              <TableHead className="w-28"><div className="flex items-center gap-1.5">Acciones</div></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map(role => (
              <TableRow key={role.id} className="group transition-colors hover:bg-muted/30">
                <TableCell className="pl-5 py-4">
                  <div>
                    <p className="font-medium">{role.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{role.description}</p>
                  </div>
                </TableCell>
                <TableCell className="py-4">
                  <span className="inline-flex items-center gap-1.5 text-sm tabular-nums text-muted-foreground">
                    <User className="size-3.5 text-muted-foreground/40" />
                    {role.members}
                  </span>
                </TableCell>
                <TableCell className="hidden py-4 md:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {role.permissions[0] === 'all' ? (
                      <Badge variant="default" className="text-[10px] font-normal">Todos los permisos</Badge>
                    ) : (
                      role.permissions.map(p => (
                        <Badge key={p} variant="secondary" className="text-[10px] font-normal">{p.split('.')[1]}</Badge>
                      ))
                    )}
                  </div>
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="icon-sm" aria-label={`Editar ${role.name}`}>
                      <Pencil className="size-4" />
                    </Button>
                    <Button variant="outline" size="icon-sm" className="text-destructive hover:bg-destructive/10 hover:text-destructive" aria-label={`Eliminar ${role.name}`}>
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm tabular-nums text-muted-foreground">
          {filtered.length === 0
            ? '0 resultados'
            : `${p * ITEMS_PER_PAGE + 1}–${Math.min((p + 1) * ITEMS_PER_PAGE, filtered.length)} de ${filtered.length}`}
        </p>
        <nav className="flex items-center gap-2" aria-label="Paginación">
          <Button variant="outline" size="sm" disabled={p === 0} onClick={() => setPage(x => x - 1)} className="gap-1.5">
            <ChevronLeft className="size-3.5" />Anterior
          </Button>
          {Array.from({ length: total }, (_, i) => (
            <Button key={i} variant={p === i ? 'default' : 'outline'} size="icon-xs" onClick={() => setPage(i)} className="min-w-7 font-medium">
              {i + 1}
            </Button>
          ))}
          <Button variant="outline" size="sm" disabled={p >= total - 1} onClick={() => setPage(x => x + 1)} className="gap-1.5">
            Siguiente<ChevronRight className="size-3.5" />
          </Button>
        </nav>
      </div>
    </div>
  )
}
