import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const configService = app.get(ConfigService);
  
  // Habilitar CORS
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
  
  // Filtro de excepciones global
  app.useGlobalFilters(new HttpExceptionFilter());
  
  const port = configService.get<number>('port', 3002);
  await app.listen(port);
  
  logger.log(`Product Service ejecutándose en puerto ${port}`);
}

bootstrap();
