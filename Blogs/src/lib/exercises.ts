import exercisesData from '../data/exercises.json';
import { translate } from './translations';

export interface Exercise {
  id: string;
  name: string;
  category: string;
  body_part: string;
  equipment: string;
  instructions: Record<string, string>;
  instruction_steps: Record<string, string[]>;
  muscle_group: string;
  secondary_muscles: string[];
  target: string;
  media_id: string | null;
  image: string | null;
  gif_url: string | null;
  attribution: string;
  created_at: string;
}

const exercises = exercisesData as Exercise[];

const byId = new Map<string, Exercise>();
exercises.forEach((ex) => byId.set(ex.id, ex));

export function getAllExercises(): Exercise[] {
  return exercises;
}

export function getExerciseById(id: string): Exercise | undefined {
  return byId.get(id);
}

export function getExerciseCount(): number {
  return exercises.length;
}

export function getCategories(): string[] {
  return Array.from(new Set(exercises.map((ex) => ex.category))).sort();
}

export function getEquipment(): string[] {
  return Array.from(new Set(exercises.map((ex) => ex.equipment))).sort();
}

export function getMuscleGroups(): string[] {
  return Array.from(new Set(exercises.map((ex) => ex.muscle_group))).sort();
}

export function getBodyParts(): string[] {
  return Array.from(new Set(exercises.map((ex) => ex.body_part))).sort();
}

export function getTargets(): string[] {
  return Array.from(new Set(exercises.map((ex) => ex.target))).sort();
}

export function getMediaUrl(mediaPath: string | null | undefined, kind: 'image' | 'gif'): string | null {
  if (!mediaPath) return null;
  const filename = mediaPath.split('/').pop();
  if (!filename) return null;
  return kind === 'image' ? `/ejercicios-images/${filename}` : `/ejercicios-videos/${filename}`;
}

export function getCategoryLabel(value: string): string {
  return translate('category', value);
}

export function getEquipmentLabel(value: string): string {
  return translate('equipment', value);
}

export function getMuscleGroupLabel(value: string): string {
  return translate('muscle_group', value);
}

export function getTargetLabel(value: string): string {
  return translate('target', value);
}

export interface ExerciseCardData {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  equipment: string;
  equipmentLabel: string;
  target: string;
  targetLabel: string;
  image: string | null;
}

export function toCardData(ex: Exercise): ExerciseCardData {
  return {
    id: ex.id,
    name: ex.name,
    category: ex.category,
    categoryLabel: translate('category', ex.category),
    equipment: ex.equipment,
    equipmentLabel: translate('equipment', ex.equipment),
    target: ex.target,
    targetLabel: translate('target', ex.target),
    image: getMediaUrl(ex.image, 'image'),
  };
}

export function getAllCardData(): ExerciseCardData[] {
  return exercises.map(toCardData);
}

export function getRelatedExercises(currentId: string, category: string, limit = 6): ExerciseCardData[] {
  return exercises
    .filter((ex) => ex.id !== currentId && ex.category === category)
    .slice(0, limit)
    .map(toCardData);
}

export interface CategoryStat {
  key: string;
  label: string;
  count: number;
}

export function getCategoryStats(): CategoryStat[] {
  const map = new Map<string, number>();
  exercises.forEach((ex) => {
    map.set(ex.category, (map.get(ex.category) ?? 0) + 1);
  });
  return Array.from(map.entries())
    .map(([key, count]) => ({
      key,
      label: translate('category', key),
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function getFeaturedExercises(limit = 8): ExerciseCardData[] {
  const popularIds = [
    '0025', '0032', '0043', '0652', '0294', '0334', '0140', '0007',
    '0026', '0050', '0600', '0142', '0110', '0123', '0008', '0011',
  ];
  const result: ExerciseCardData[] = [];
  for (const id of popularIds) {
    const ex = byId.get(id);
    if (ex) result.push(toCardData(ex));
    if (result.length >= limit) break;
  }
  return result;
}
