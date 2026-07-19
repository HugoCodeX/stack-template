import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const configService = app.get(ConfigService);
  
  // Habilitar CORS para permitir conexiones desde diferentes orígenes
  app.enableCors({
    origin: true,
    credentials: true,
  });
  
  // Configurar validación global
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  
  // Filtro y interceptor globales
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  
  // Prefijo global para todas las rutas
  app.setGlobalPrefix('api/v1');
  
  const port = configService.get<number>('port', 3000);
  await app.listen(port);
  
  logger.log(`API Gateway ejecutándose en puerto ${port}`);
}

bootstrap();
