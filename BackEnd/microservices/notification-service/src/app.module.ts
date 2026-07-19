import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './modules/notification/notification.module';
import { WebsocketModule } from './modules/websocket/websocket.module';
import { RedisModule } from './modules/redis/redis.module';
import { configuration } from './common/config/configuration';
import { envValidationSchema } from './common/config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: envValidationSchema,
    }),
    RedisModule,
    NotificationModule,
    WebsocketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
