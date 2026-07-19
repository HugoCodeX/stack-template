import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PassportModule } from '@nestjs/passport';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtConfigModule } from './common/jwt-config.module';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { NotificationModule } from './modules/notification/notification.module';
import { AuthModule } from './modules/auth/auth.module';
import { configuration } from './common/config/configuration';
import { envValidationSchema } from './common/config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: envValidationSchema,
    }),
    HttpModule,
    PassportModule,
    EventEmitterModule.forRoot(),
    JwtConfigModule,
    UserModule,
    ProductModule,
    NotificationModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
