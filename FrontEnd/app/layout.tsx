import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { AnalyticsWrapper } from '@/components/analytics-wrapper'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: { default: 'Nexo Admin', template: '%s · Nexo Admin' },
  description: 'Panel administrativo moderno para gestionar tu operación.',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#f7f8f6' }, { media: '(prefers-color-scheme: dark)', color: '#111a18' }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className="bg-background" suppressHydrationWarning><body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`} suppressHydrationWarning><ThemeProvider>{children}</ThemeProvider><AnalyticsWrapper /></body></html>
}
