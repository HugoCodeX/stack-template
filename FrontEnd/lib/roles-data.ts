export interface Role {
  id: string
  name: string
  description: string
  members: number
  permissions: string[]
  parentId: string | null
}

export interface Permission {
  id: string
  name: string
  description: string
  module: 'Miembros' | 'Roles' | 'Permisos' | 'Sesiones' | 'Configuración'
  slug: string
}

export const roles: Role[] = [
  {
    id: 'ROOT',
    name: 'ROOT',
    description: 'Raíz del sistema de roles.',
    members: 0,
    permissions: [],
    parentId: null,
  },
  {
    id: 'ROL-001',
    name: 'SYSADMIN',
    description: 'Administrador del sistema con acceso completo.',
    members: 3,
    permissions: ['all'],
    parentId: 'ROOT',
  },
  {
    id: 'ROL-002',
    name: 'Entrenador',
    description: 'Gestión de miembros y sesiones de entrenamiento.',
    members: 12,
    permissions: ['members.view', 'members.edit', 'sessions.view', 'sessions.edit'],
    parentId: 'ROL-001',
  },
  {
    id: 'ROL-003',
    name: 'Recepcionista',
    description: 'Registro de miembros y gestión de pagos básicos.',
    members: 5,
    permissions: ['members.view', 'members.create', 'sessions.view'],
    parentId: 'ROL-002',
  },
  {
    id: 'ROL-004',
    name: 'Miembro',
    description: 'Acceso a perfil propio y reserva de clases.',
    members: 842,
    permissions: ['profile.view', 'profile.edit', 'sessions.book'],
    parentId: 'ROL-003',
  },
]

export const permissions: Permission[] = [
  { id: 'PER-001', name: 'Ver miembros', description: 'Visualizar listado y perfiles de miembros.', module: 'Miembros', slug: 'members.view' },
  { id: 'PER-002', name: 'Crear miembros', description: 'Registrar nuevos miembros en el sistema.', module: 'Miembros', slug: 'members.create' },
  { id: 'PER-003', name: 'Editar miembros', description: 'Modificar datos de miembros existentes.', module: 'Miembros', slug: 'members.edit' },
  { id: 'PER-004', name: 'Eliminar miembros', description: 'Dar de baja miembros del sistema.', module: 'Miembros', slug: 'members.delete' },
  { id: 'PER-005', name: 'Ver roles', description: 'Consultar roles y sus permisos.', module: 'Roles', slug: 'roles.view' },
  { id: 'PER-006', name: 'Crear roles', description: 'Crear nuevos roles personalizados.', module: 'Roles', slug: 'roles.create' },
  { id: 'PER-007', name: 'Editar roles', description: 'Modificar roles y sus permisos asociados.', module: 'Roles', slug: 'roles.edit' },
  { id: 'PER-008', name: 'Eliminar roles', description: 'Eliminar roles del sistema.', module: 'Roles', slug: 'roles.delete' },
  { id: 'PER-009', name: 'Ver permisos', description: 'Consultar matriz de permisos del sistema.', module: 'Permisos', slug: 'permissions.view' },
  { id: 'PER-010', name: 'Gestionar permisos', description: 'Asignar y revocar permisos a roles.', module: 'Permisos', slug: 'permissions.manage' },
  { id: 'PER-011', name: 'Ver sesiones', description: 'Visualizar historial de sesiones.', module: 'Sesiones', slug: 'sessions.view' },
  { id: 'PER-012', name: 'Gestionar sesiones', description: 'Crear y modificar sesiones de entrenamiento.', module: 'Sesiones', slug: 'sessions.edit' },
  { id: 'PER-013', name: 'Ver configuracion', description: 'Acceder a la configuración del sistema.', module: 'Configuración', slug: 'config.view' },
  { id: 'PER-014', name: 'Editar configuracion', description: 'Modificar ajustes generales del sistema.', module: 'Configuración', slug: 'config.edit' },
]

export const modules = ['Todos', 'Miembros', 'Roles', 'Permisos', 'Sesiones', 'Configuración'] as const
