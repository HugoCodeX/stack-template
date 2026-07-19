import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class AddReviewDto {
  @IsNumber({}, { message: 'La calificación debe ser un número' })
  @Min(1, { message: 'La calificación mínima es 1' })
  @Max(5, { message: 'La calificación máxima es 5' })
  @IsNotEmpty({ message: 'La calificación es requerida' })
  rating: number;

  @IsString({ message: 'El comentario debe ser un texto' })
  @IsNotEmpty({ message: 'El comentario es requerido' })
  comment: string;
}
