'use client'

import { Bell, ChevronLeft, Menu, Search } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ColorPalettePicker } from './color-palette-picker'
import { ThemeToggle } from './theme-toggle'
import { SidebarContent } from './sidebar-content'
import { useSidebar } from './sidebar-context'
import { cn } from '@/lib/utils'

const UserInfo = (
  <div className="hidden text-right md:block">
    <p className="text-sm font-medium leading-none">Alex Morgan</p>
    <p className="mt-0.5 text-xs text-muted-foreground">Administrador</p>
  </div>
)

export function DashboardHeader() {
  const { collapsed, toggle } = useSidebar()

  return <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur-lg md:px-8">
    <Sheet><SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir navegación"><Menu /></Button>} /><SheetContent side="left" className="w-72 p-0"><SheetTitle className="sr-only">Navegación</SheetTitle><SidebarContent /></SheetContent></Sheet>
    <Button variant="ghost" size="icon" onClick={toggle} aria-label={collapsed ? 'Expandir sidebar' : 'Colapsar sidebar'} className="hidden text-muted-foreground hover:text-foreground lg:inline-flex">
      <ChevronLeft className={cn('size-4 transition-transform', collapsed && 'rotate-180')} />
    </Button>
    <div className="relative hidden max-w-xs flex-1 sm:block">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/60" />
      <Input aria-label="Buscar" placeholder="Buscar en el panel..." className="h-9 border-none bg-muted/50 pl-9 text-sm placeholder:text-muted-foreground/50 focus-visible:bg-background" />
    </div>
    <div className="ml-auto flex items-center gap-1">
      <ThemeToggle />
      <ColorPalettePicker />
      <Button variant="ghost" size="icon" aria-label="Notificaciones" className="relative text-muted-foreground hover:text-foreground"><Bell className="size-4" /><span className="absolute right-2 top-2 size-2 rounded-full bg-primary ring-2 ring-background" /></Button>
      <div className="mx-2 h-6 w-px bg-border" />
      <Avatar className="size-8"><AvatarFallback className="text-xs font-medium">AM</AvatarFallback></Avatar>
      {UserInfo}
    </div>
  </header>
}
