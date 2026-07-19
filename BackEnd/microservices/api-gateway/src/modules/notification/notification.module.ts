import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { NOTIFICATION_SERVICE_CLIENT } from '../../common/tokens';

@Module({
  imports: [HttpModule],
  controllers: [NotificationController],
  providers: [
    NotificationService,
    { provide: NOTIFICATION_SERVICE_CLIENT, useClass: NotificationService },
  ],
  exports: [NotificationService, NOTIFICATION_SERVICE_CLIENT],
})
export class NotificationModule {}
