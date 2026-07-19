'use client'

import { useState } from 'react'
import {
  ChevronLeft, ChevronRight,
  Circle, Clock, Eye, Mail, Pencil, Search,
  Shield, ShieldBan, SlidersHorizontal, User, UserPlus,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { users, roles, statuses } from '@/lib/users-data'

const ITEMS_PER_PAGE = 10

const statusConfig = {
  Activo: { variant: 'default' as const, dot: 'bg-primary' },
  Pendiente: { variant: 'secondary' as const, dot: 'bg-amber-400' },
  Inactivo: { variant: 'destructive' as const, dot: 'bg-destructive' },
}

function initials(name: string) {
  const parts = name.split(' ')
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? ''
  return parts[0][0].toUpperCase() + parts[1][0].toUpperCase()
}

export function UsersTable() {
  const [search, setSearch] = useState('')
  const [rol, setRol] = useState('Todos')
  const [status, setStatus] = useState('Todos')
  const [page, setPage] = useState(0)

  const filtered = users.filter(u => {
    const q = search.toLowerCase()
    if (q && ![u.name, u.email, u.id].some(f => f.toLowerCase().includes(q))) return false
    if (rol !== 'Todos' && u.rol !== rol) return false
    if (status !== 'Todos' && u.status !== status) return false
    return true
  })

  const total = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const p = Math.min(page, Math.max(0, total - 1))
  const rows = filtered.slice(p * ITEMS_PER_PAGE, (p + 1) * ITEMS_PER_PAGE)

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar nombre, email o ID..."
            className="h-9 pl-8 text-sm"
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(0) }}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Shield className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <select
              aria-label="Filtrar por rol"
              className="h-9 appearance-none rounded-lg border border-input bg-background py-1 pl-7 pr-7 text-sm text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={rol}
              onChange={e => { setRol(e.target.value); setPage(0) }}
            >
              {roles.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            <ChevronRight className="absolute right-2 top-1/2 size-3 -translate-y-1/2 rotate-90 text-muted-foreground pointer-events-none" />
          </div>
          <div className="relative">
            <Circle className="absolute left-2.5 top-1/2 size-3 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <select
              aria-label="Filtrar por estado"
              className="h-9 appearance-none rounded-lg border border-input bg-background py-1 pl-7 pr-7 text-sm text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={status}
              onChange={e => { setStatus(e.target.value); setPage(0) }}
            >
              {statuses.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronRight className="absolute right-2 top-1/2 size-3 -translate-y-1/2 rotate-90 text-muted-foreground pointer-events-none" />
          </div>
          <Button><UserPlus className="size-4" />Añadir miembro</Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40">
              <TableHead className="pl-5"><div className="flex items-center gap-1.5"><User className="size-3.5 text-muted-foreground" />Miembro</div></TableHead>
              <TableHead><div className="flex items-center gap-1.5"><Mail className="size-3.5 text-muted-foreground" />Correo</div></TableHead>
              <TableHead><div className="flex items-center gap-1.5"><Circle className="size-3 text-muted-foreground" />Estado</div></TableHead>
              <TableHead><div className="flex items-center gap-1.5"><Shield className="size-3.5 text-muted-foreground" />Rol</div></TableHead>
              <TableHead><div className="flex items-center gap-1.5"><Clock className="size-3.5 text-muted-foreground" />Último acceso</div></TableHead>
              <TableHead className="w-28"><div className="flex items-center gap-1.5"><SlidersHorizontal className="size-3.5 text-muted-foreground" />Acciones</div></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="py-20 text-center">
                  <User className="mx-auto mb-3 size-10 text-muted-foreground/30" />
                  <p className="text-sm font-medium">No se encontraron miembros</p>
                  <p className="mt-1 text-xs text-muted-foreground">Probá con otros filtros o términos de búsqueda.</p>
                </TableCell>
              </TableRow>
            ) : (
              rows.map(user => (
                <TableRow key={user.id} className="group transition-colors hover:bg-muted/30">
                  <TableCell className="pl-5 py-4">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback className="text-xs font-semibold">{initials(user.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="mt-0.5 text-[11px] text-muted-foreground/60">{user.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 text-sm text-muted-foreground">
                    {user.email}
                  </TableCell>
                  <TableCell className="py-4">
                    <Badge variant={statusConfig[user.status].variant} className="gap-1.5 pl-1.5 font-normal">
                      <span className={`size-1.5 rounded-full ${statusConfig[user.status].dot}`} />
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-sm font-medium">{user.rol}</span>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="size-3 text-muted-foreground/40" />
                      {user.lastAccess}
                    </span>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center gap-1">
                      <Button variant="outline" size="icon-sm" aria-label={`Ver ${user.name}`}>
                        <Eye className="size-4" />
                      </Button>
                      <Button variant="outline" size="icon-sm" aria-label={`Editar ${user.name}`}>
                        <Pencil className="size-4" />
                      </Button>
                      <Button variant="outline" size="icon-sm" className="text-destructive hover:bg-destructive/10 hover:text-destructive" aria-label={`Banear ${user.name}`}>
                        <ShieldBan className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
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
          <Button
            variant="outline"
            size="sm"
            disabled={p === 0}
            onClick={() => setPage(x => x - 1)}
            className="gap-1.5"
          >
            <ChevronLeft className="size-3.5" />
            Anterior
          </Button>
          <div className="flex items-center gap-1">
            {Array.from({ length: total }, (_, i) => (
              <Button
                key={i}
                variant={p === i ? 'default' : 'outline'}
                size="icon-xs"
                onClick={() => setPage(i)}
                className="min-w-7 font-medium"
              >
                {i + 1}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            disabled={p >= total - 1}
            onClick={() => setPage(x => x + 1)}
            className="gap-1.5"
          >
            Siguiente
            <ChevronRight className="size-3.5" />
          </Button>
        </nav>
      </div>
    </div>
  )
}
