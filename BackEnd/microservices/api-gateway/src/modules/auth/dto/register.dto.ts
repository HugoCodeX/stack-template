import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'El email no es válido' })
  @IsNotEmpty({ message: 'El email es requerido' })
  email: string;

  @IsString({ message: 'La contraseña debe ser un texto' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  password: string;

  @IsString({ message: 'El nombre debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre es requerido' })
  name: string;

  @IsString({ message: 'El apellido debe ser un texto' })
  @IsOptional()
  lastName?: string;

  @IsString({ message: 'El teléfono debe ser un texto' })
  @IsOptional()
  phone?: string;
}
