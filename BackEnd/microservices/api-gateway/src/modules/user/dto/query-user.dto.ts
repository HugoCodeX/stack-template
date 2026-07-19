import { IsOptional, IsString, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryUserDto {
  @IsString({ message: 'La búsqueda debe ser un texto' })
  @IsOptional()
  search?: string;

  @IsString({ message: 'El rol debe ser un texto' })
  @IsOptional()
  role?: string;

  @Type(() => Number)
  @IsInt({ message: 'El límite debe ser un número entero' })
  @Min(1, { message: 'El límite mínimo es 1' })
  @IsOptional()
  limit?: number;

  @Type(() => Number)
  @IsInt({ message: 'El offset debe ser un número entero' })
  @Min(0, { message: 'El offset mínimo es 0' })
  @IsOptional()
  offset?: number;
}
