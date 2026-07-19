import { IsOptional, IsString, IsNumber, Min, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryProductDto {
  @IsString({ message: 'La búsqueda debe ser un texto' })
  @IsOptional()
  search?: string;

  @IsString({ message: 'La categoría debe ser un texto' })
  @IsOptional()
  category?: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'El precio mínimo debe ser un número' })
  @Min(0)
  @IsOptional()
  minPrice?: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'El precio máximo debe ser un número' })
  @Min(0)
  @IsOptional()
  maxPrice?: number;

  @IsString({ message: 'El tag debe ser un texto' })
  @IsOptional()
  tag?: string;

  @IsBoolean({ message: 'isFeatured debe ser un booleano' })
  @IsOptional()
  isFeatured?: boolean;

  @Type(() => Number)
  @IsNumber({}, { message: 'El límite debe ser un número' })
  @Min(1)
  @IsOptional()
  limit?: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'El offset debe ser un número' })
  @Min(0)
  @IsOptional()
  offset?: number;
}
