export const SITE_TITLE = 'Vigorize';
export const SITE_DESCRIPTION = 'Transforma tu cuerpo, transforma tu vida. Rutinas, nutrición y estilo de vida fitness.';
export const SITE_URL = 'https://vigorize.fit';

export const NAV_ITEMS = [
  { href: '/', label: 'Inicio' },
  { href: '/blog', label: 'Blog' },
  { href: '/ejercicios', label: 'Ejercicios' },
  { href: '/herramientas', label: 'Herramientas' },
  { href: '/about', label: 'Nosotros' },
  { href: '/contact', label: 'Contacto' },
] as const;

export type FeatureKey = 'workout' | 'nutrition' | 'lifestyle';

export interface Feature {
  key: FeatureKey;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    key: 'workout',
    title: 'Rutinas Efectivas',
    description: 'Entrenamientos diseñados por profesionales para todos los niveles, desde principiante hasta avanzado.',
  },
  {
    key: 'nutrition',
    title: 'Nutrición Inteligente',
    description: 'Planes alimenticios y consejos de nutrición basados en ciencia para potenciar tus resultados.',
  },
  {
    key: 'lifestyle',
    title: 'Estilo de Vida',
    description: 'Tips de recuperación, sueño, suplementación y hábitos para un estilo de vida fitness sostenible.',
  },
];

export const STATS = [
  { value: '50+', label: 'Rutinas' },
  { value: '200+', label: 'Artículos' },
  { value: '10K+', label: 'Lectores' },
] as const;
