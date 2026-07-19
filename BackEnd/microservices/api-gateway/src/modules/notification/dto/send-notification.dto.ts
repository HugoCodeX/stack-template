import { IsArray, IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class SendNotificationDto {
  @IsString({ message: 'El userId debe ser un texto' })
  @IsOptional()
  userId?: string;

  @IsArray({ message: 'userIds debe ser un arreglo' })
  @IsOptional()
  userIds?: string[];

  @IsString({ message: 'El título debe ser un texto' })
  @IsNotEmpty({ message: 'El título es requerido' })
  title: string;

  @IsString({ message: 'El mensaje debe ser un texto' })
  @IsNotEmpty({ message: 'El mensaje es requerido' })
  message: string;

  @IsString({ message: 'El tipo debe ser un texto' })
  @IsNotEmpty({ message: 'El tipo es requerido' })
  type: string;

  @IsObject({ message: 'data debe ser un objeto' })
  @IsOptional()
  data?: Record<string, any>;

  @IsBoolean({ message: 'broadcast debe ser un booleano' })
  @IsOptional()
  broadcast?: boolean;
}
