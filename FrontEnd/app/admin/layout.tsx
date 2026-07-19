import { SidebarProvider } from '@/components/layout/sidebar-context'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>
}
