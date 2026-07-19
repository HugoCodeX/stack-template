'use client'

import { DashboardHeader } from './dashboard-header'
import { SidebarContent } from './sidebar-content'
import { useSidebar } from './sidebar-context'

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar()
  return <div className="min-h-screen bg-muted/30">
    <SidebarContent className="fixed inset-y-0 left-0 hidden border-r lg:flex" />
    <div className={`transition-all duration-200 ${collapsed ? 'lg:pl-16' : 'lg:pl-56'}`}>
      <DashboardHeader />
      {children}
    </div>
  </div>
}
