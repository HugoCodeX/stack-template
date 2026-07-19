'use client'

import { useState, useEffect } from 'react'
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const TABS = [
  { id: 'role', label: 'Role' },
  { id: 'usuarios', label: 'Usuarios' },
  { id: 'aplicaciones', label: 'Aplicaciones' },
] as const

type TabId = (typeof TABS)[number]['id']

interface RoleModalProps {
  open: boolean
  onClose: () => void
  roleName: string | null
}

export function RoleModal({ open, onClose, roleName }: RoleModalProps) {
  const [activeTab, setActiveTab] = useState<TabId>('role')
  const [name, setName] = useState(() => roleName || '')

  useEffect(() => {
    if (open) {
      setName(roleName || '')
      setActiveTab('role')
    }
  }, [open, roleName])

  return (
    <DialogPrimitive.Root open={open} onOpenChange={(v: boolean) => { if (!v) onClose() }}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/20 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <DialogPrimitive.Popup className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-popover shadow-lg transition-all data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
          <div className="flex items-center justify-between px-6 py-4">
            <DialogPrimitive.Title className="text-lg font-semibold">{'Editar Rol'}</DialogPrimitive.Title>
            <DialogPrimitive.Close render={<Button variant="ghost" size="icon-sm" />}>
              <X className="size-4" />
            </DialogPrimitive.Close>
          </div>
          <div className="flex px-6">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-6">
            {activeTab === 'role' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="role-name" className="text-xs font-medium text-muted-foreground">Nombre del rol</label>
                  <Input
                    id="role-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1.5 h-11"
                  />
                </div>
              </div>
            )}
            {activeTab === 'usuarios' && (
              <p className="text-sm text-muted-foreground">Usuarios asignados a este rol.</p>
            )}
            {activeTab === 'aplicaciones' && (
              <p className="text-sm text-muted-foreground">Aplicaciones asociadas a este rol.</p>
            )}
          </div>
          <div className="flex items-center justify-between border-t px-6 py-4">
            <div className="flex items-center gap-2">
              <Button>Guardar</Button>
              <Button variant="destructive">Eliminar</Button>
            </div>
            <Button variant="outline" onClick={onClose}>Cerrar</Button>
          </div>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
