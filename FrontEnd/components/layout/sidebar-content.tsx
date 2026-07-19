'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AppWindow, Box, ChevronLeft, Dumbbell, Home, LayoutDashboard, Shield, User, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSidebar } from './sidebar-context'

const items = [
  { label: 'Resumen', icon: LayoutDashboard, href: '/admin' },
  { label: 'Miembros', icon: Users, href: '/admin/miembros' },
  { label: 'Roles', icon: Shield, href: '/admin/roles' },
  { label: 'Aplicaciones', icon: AppWindow, href: '/admin/aplicaciones' },
  { label: 'Módulos', icon: Box, href: '/admin/modulos' },
]

function NavItem({ label, icon: Icon, href, pathname, collapsed }: { label: string; icon: React.ComponentType<{ className?: string }>; href: string; pathname: string; collapsed: boolean }) {
  const active = href !== '/admin' ? pathname.startsWith(href) : pathname === href
  return (
    <Link href={href} className={cn(
      'group relative flex items-center rounded-lg text-sm font-medium transition-all',
      collapsed ? 'justify-center px-2 py-2.5' : 'gap-3 px-3 py-2.5',
      active
        ? 'bg-sidebar-accent text-sidebar-accent-foreground'
        : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
    )}>
      {active && !collapsed && <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-primary" />}
      <Icon className={cn('size-4 shrink-0', active ? 'text-primary' : 'text-sidebar-foreground/50 group-hover:text-sidebar-foreground/70')} />
      {!collapsed && <span className="flex-1">{label}</span>}
    </Link>
  )
}

export function SidebarContent({ className }: { className?: string }) {
  const pathname = usePathname()
  const { collapsed, toggle } = useSidebar()

  return <aside className={cn('flex h-full flex-col bg-sidebar text-sidebar-foreground transition-all duration-200', collapsed ? 'w-16' : 'w-56', className)}>
    <div className={cn('flex h-20 items-center border-b border-sidebar-border', collapsed ? 'justify-center px-0' : 'gap-3 px-6')}>
      <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shrink-0"><Dumbbell className="size-5" /></div>
      {!collapsed && <div><p className="font-semibold tracking-tight">Nexo Fitness</p><p className="text-xs text-sidebar-foreground/60">Centro de rendimiento</p></div>}
    </div>
    <nav className="flex flex-1 flex-col gap-0.5 px-3 pt-4" aria-label="Navegación principal">
      <NavItem {...items[0]} pathname={pathname} collapsed={collapsed} />
      {!collapsed && <p className="mt-4 px-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/40">Pages</p>}
      <NavItem label="Inicio" icon={Home} href="/admin/inicio" pathname={pathname} collapsed={collapsed} />
      <NavItem label="Perfil" icon={User} href="/admin/perfil" pathname={pathname} collapsed={collapsed} />
      {!collapsed && <p className="mt-4 px-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/40">Sistema</p>}
      {items.slice(1).map(item => <NavItem key={item.label} {...item} pathname={pathname} collapsed={collapsed} />)}
    </nav>
    <div className="border-t border-sidebar-border p-2">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-center rounded-lg px-2 py-2 text-sidebar-foreground/50 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
        aria-label={collapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
      >
        <ChevronLeft className={cn('size-4 transition-transform', collapsed && 'rotate-180')} />
      </button>
    </div>
  </aside>
}