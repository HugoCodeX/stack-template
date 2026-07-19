import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'El nombre debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre es requerido' })
  name: string;

  @IsString({ message: 'La descripción debe ser un texto' })
  @IsNotEmpty({ message: 'La descripción es requerida' })
  description: string;

  @IsString({ message: 'El SKU debe ser un texto' })
  @IsNotEmpty({ message: 'El SKU es requerido' })
  sku: string;

  @IsNumber({}, { message: 'El precio debe ser un número' })
  @Min(0, { message: 'El precio mínimo es 0' })
  @IsNotEmpty({ message: 'El precio es requerido' })
  price: number;

  @IsNumber({}, { message: 'El precio comparativo debe ser un número' })
  @Min(0, { message: 'El precio comparativo mínimo es 0' })
  @IsOptional()
  comparePrice?: number;

  @IsNumber({}, { message: 'El stock debe ser un número' })
  @Min(0, { message: 'El stock mínimo es 0' })
  @IsNotEmpty({ message: 'El stock es requerido' })
  stock: number;

  @IsString({ message: 'El categoryId debe ser un texto' })
  @IsNotEmpty({ message: 'La categoría es requerida' })
  categoryId: string;

  @IsArray({ message: 'Las imágenes deben ser un arreglo' })
  @IsOptional()
  images?: string[];

  @IsArray({ message: 'Los tags deben ser un arreglo' })
  @IsOptional()
  tags?: string[];

  @IsBoolean({ message: 'isActive debe ser un booleano' })
  @IsOptional()
  isActive?: boolean;

  @IsBoolean({ message: 'isFeatured debe ser un booleano' })
  @IsOptional()
  isFeatured?: boolean;

  @IsObject({ message: 'specifications debe ser un objeto' })
  @IsOptional()
  specifications?: Record<string, any>;

  @IsObject({ message: 'seoData debe ser un objeto' })
  @IsOptional()
  seoData?: { title?: string; description?: string; keywords?: string };
}
