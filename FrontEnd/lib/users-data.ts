export interface User {
  id: string
  name: string
  email: string
  rol: 'Essential' | 'Flexible' | 'Performance'
  status: 'Activo' | 'Pendiente' | 'Inactivo'
  registered: string
  lastAccess: string
  progress: number
}

export const users: User[] = [
  { id: '#US-2841', name: 'Marina Soto', email: 'marina@ejemplo.com', rol: 'Performance', status: 'Activo', registered: '15 jul 2026', lastAccess: 'Hace 2 min', progress: 100 },
  { id: '#US-2840', name: 'Carlos Vega', email: 'carlos@ejemplo.com', rol: 'Essential', status: 'Pendiente', registered: '14 jul 2026', lastAccess: 'Hace 1 hora', progress: 72 },
  { id: '#US-2839', name: 'Lucía Torres', email: 'lucia@ejemplo.com', rol: 'Performance', status: 'Activo', registered: '12 jul 2026', lastAccess: 'Hace 15 min', progress: 100 },
  { id: '#US-2838', name: 'Diego Ruiz', email: 'diego@ejemplo.com', rol: 'Flexible', status: 'Activo', registered: '10 jul 2026', lastAccess: 'Hace 3 horas', progress: 52 },
  { id: '#US-2837', name: 'Ana María Flores', email: 'ana@ejemplo.com', rol: 'Essential', status: 'Inactivo', registered: '8 jul 2026', lastAccess: 'Hace 7 días', progress: 36 },
  { id: '#US-2836', name: 'Pedro Sánchez', email: 'pedro@ejemplo.com', rol: 'Performance', status: 'Activo', registered: '5 jul 2026', lastAccess: 'Hace 1 hora', progress: 100 },
  { id: '#US-2835', name: 'Sofia Morales', email: 'sofia@ejemplo.com', rol: 'Flexible', status: 'Activo', registered: '3 jul 2026', lastAccess: 'Hace 30 min', progress: 100 },
  { id: '#US-2834', name: 'Jorge Castillo', email: 'jorge@ejemplo.com', rol: 'Essential', status: 'Pendiente', registered: '1 jul 2026', lastAccess: 'Hace 1 día', progress: 48 },
  { id: '#US-2833', name: 'Valentina Ríos', email: 'valentina@ejemplo.com', rol: 'Performance', status: 'Activo', registered: '28 jun 2026', lastAccess: 'Hace 45 min', progress: 100 },
  { id: '#US-2832', name: 'Mateo Herrera', email: 'mateo@ejemplo.com', rol: 'Essential', status: 'Activo', registered: '25 jun 2026', lastAccess: 'Hace 2 horas', progress: 100 },
  { id: '#US-2831', name: 'Camila Ortega', email: 'camila@ejemplo.com', rol: 'Flexible', status: 'Inactivo', registered: '22 jun 2026', lastAccess: 'Hace 14 días', progress: 64 },
  { id: '#US-2830', name: 'Gabriel Navarro', email: 'gabriel@ejemplo.com', rol: 'Performance', status: 'Activo', registered: '20 jun 2026', lastAccess: 'Hace 10 min', progress: 100 },
  { id: '#US-2829', name: 'Isabella Peña', email: 'isabella@ejemplo.com', rol: 'Essential', status: 'Pendiente', registered: '18 jun 2026', lastAccess: 'Hace 3 días', progress: 55 },
  { id: '#US-2828', name: 'Santiago Cruz', email: 'santiago@ejemplo.com', rol: 'Flexible', status: 'Activo', registered: '15 jun 2026', lastAccess: 'Hace 20 min', progress: 100 },
  { id: '#US-2827', name: 'Luna Vargas', email: 'luna@ejemplo.com', rol: 'Performance', status: 'Activo', registered: '12 jun 2026', lastAccess: 'Hace 5 min', progress: 100 },
  { id: '#US-2826', name: 'Emilio Delgado', email: 'emilio@ejemplo.com', rol: 'Essential', status: 'Inactivo', registered: '10 jun 2026', lastAccess: 'Hace 20 días', progress: 30 },
  { id: '#US-2825', name: 'Zoe Castro', email: 'zoe@ejemplo.com', rol: 'Flexible', status: 'Activo', registered: '8 jun 2026', lastAccess: 'Hace 1 hora', progress: 100 },
  { id: '#US-2824', name: 'Benjamín Rojas', email: 'benjamin@ejemplo.com', rol: 'Performance', status: 'Pendiente', registered: '5 jun 2026', lastAccess: 'Hace 5 días', progress: 68 },
  { id: '#US-2823', name: 'Martina Guzmán', email: 'martina@ejemplo.com', rol: 'Essential', status: 'Activo', registered: '3 jun 2026', lastAccess: 'Hace 2 horas', progress: 100 },
  { id: '#US-2822', name: 'Sebastián Mendoza', email: 'sebastian@ejemplo.com', rol: 'Flexible', status: 'Activo', registered: '1 jun 2026', lastAccess: 'Hace 4 horas', progress: 100 },
]

export const roles = ['Todos', 'Essential', 'Flexible', 'Performance'] as const
export const statuses = ['Todos', 'Activo', 'Pendiente', 'Inactivo'] as const
