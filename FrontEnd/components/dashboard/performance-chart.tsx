'use client'

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { chartData } from '@/lib/dashboard-data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function PerformanceChart() {
  return <Card><CardHeader><div className="flex items-start justify-between gap-4"><div><CardTitle>Actividad semanal</CardTitle><CardDescription>Sesiones completadas durante los últimos 7 días</CardDescription></div><span className="rounded-lg bg-muted px-2.5 py-1 text-xs text-muted-foreground">Esta semana</span></div></CardHeader><CardContent><div className="h-72 w-full"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData} margin={{ left: -20, right: 8, top: 12 }}><defs><linearGradient id="currentFill" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="var(--primary)" stopOpacity={0.25}/><stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)"/><XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}/><YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}/><Tooltip contentStyle={{ background: 'var(--popover)', border: '1px solid var(--border)', borderRadius: 12 }}/><Area type="monotone" dataKey="previous" stroke="var(--muted-foreground)" fill="transparent" strokeDasharray="4 4"/><Area type="monotone" dataKey="current" stroke="var(--primary)" strokeWidth={2.5} fill="url(#currentFill)"/></AreaChart></ResponsiveContainer></div></CardContent></Card>
}
