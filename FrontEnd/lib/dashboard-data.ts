import { CalendarCheck, Dumbbell, UserPlus, Users } from 'lucide-react'

export const metrics = [
  { label: 'Sesiones', value: '1.284', change: '+14,2%', note: 'este mes', icon: CalendarCheck },
  { label: 'Usuarios activos', value: '8.642', change: '+8,7%', note: 'este mes', icon: Users },
  { label: 'Nuevos registros', value: '428', change: '+21,4%', note: 'este mes', icon: UserPlus },
  { label: 'Clases activas', value: '36', change: '+4,0%', note: 'este mes', icon: Dumbbell },
]

export const chartData = [
  { day: 'Lun', current: 148, previous: 112 }, { day: 'Mar', current: 182, previous: 134 },
  { day: 'Mié', current: 164, previous: 142 }, { day: 'Jue', current: 226, previous: 158 },
  { day: 'Vie', current: 208, previous: 176 }, { day: 'Sáb', current: 264, previous: 192 },
  { day: 'Dom', current: 238, previous: 204 },
]

export const registrations = [
  { id: '#US-2841', name: 'Marina Soto', email: 'marina@ejemplo.com', plan: 'Performance', status: 'Activo' },
  { id: '#US-2840', name: 'Carlos Vega', email: 'carlos@ejemplo.com', plan: 'Essential', status: 'Pendiente' },
  { id: '#US-2839', name: 'Lucía Torres', email: 'lucia@ejemplo.com', plan: 'Performance', status: 'Activo' },
  { id: '#US-2838', name: 'Diego Ruiz', email: 'diego@ejemplo.com', plan: 'Flexible', status: 'Activo' },
]

export interface CountrySession {
  name: string; code: string; value: number; percentage: number; coordinates: [number, number]
}

export const countrySessions: CountrySession[] = [
  { name: 'España', code: 'ES', value: 684, percentage: 100, coordinates: [-3.7, 40.4] },
  { name: 'México', code: 'MX', value: 492, percentage: 72, coordinates: [-99.1, 19.4] },
  { name: 'Argentina', code: 'AR', value: 358, percentage: 52, coordinates: [-58.4, -34.6] },
  { name: 'Colombia', code: 'CO', value: 246, percentage: 36, coordinates: [-74.1, 4.7] },
  { name: 'Chile', code: 'CL', value: 215, percentage: 31, coordinates: [-70.6, -33.4] },
  { name: 'Perú', code: 'PE', value: 172, percentage: 25, coordinates: [-77.0, -12.0] },
  { name: 'Venezuela', code: 'VE', value: 98, percentage: 14, coordinates: [-66.9, 10.4] },
]
