import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { USER_SERVICE_CLIENT } from '../../common/tokens';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [
    UserService,
    { provide: USER_SERVICE_CLIENT, useClass: UserService },
  ],
  exports: [UserService, USER_SERVICE_CLIENT],
})
export class UserModule {}
