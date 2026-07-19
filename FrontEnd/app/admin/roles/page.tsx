'use client'

import { useState } from 'react'
import { RoleTree } from '@/components/dashboard/role-tree'
import { RoleModal } from '@/components/dashboard/role-modal'
import { DashboardShell } from '@/components/layout/dashboard-shell'

const PageBreadcrumb = (
  <div>
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nexo Fitness · Administración</p>
  </div>
)

export default function RolesPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  function handleSelect(name: string) {
    setSelectedRole(name)
    setModalOpen(true)
  }

  return (
    <DashboardShell>
      <main className="flex flex-col gap-6 p-4 md:p-8">
        {PageBreadcrumb}
        <section>
          <div className="rounded-xl border bg-card p-5">
            <RoleTree onSelect={handleSelect} />
          </div>
        </section>
      </main>
      <RoleModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        roleName={selectedRole}
      />
    </DashboardShell>
  )
}
