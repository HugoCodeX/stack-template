import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtConfigModule } from './common/jwt-config.module';
import { AuthListener } from './common/listeners/auth.listener';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './modules/user/entities/user.entity';
import { configuration } from './common/config/configuration';
import { envValidationSchema } from './common/config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: envValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('database.host'),
        port: config.get('database.port'),
        username: config.get('database.username'),
        password: config.get('database.password'),
        database: config.get('database.name'),
        entities: [User],
        synchronize: config.get('nodeEnv') === 'development',
        logging: config.get('nodeEnv') === 'development',
      }),
    }),
    EventEmitterModule.forRoot(),
    PassportModule,
    JwtConfigModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthListener],
})
export class AppModule {}
