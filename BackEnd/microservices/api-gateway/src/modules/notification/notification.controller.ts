import { Controller, Get, Post, Body, Param, UseGuards, Request, Inject } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { NOTIFICATION_SERVICE_CLIENT } from '../../common/tokens';
import { INotificationServiceClient } from '../../common/interfaces';
import { SendNotificationDto } from './dto';

@Controller('notifications')
export class NotificationController {
  constructor(
    @Inject(NOTIFICATION_SERVICE_CLIENT) private readonly notificationService: INotificationServiceClient,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Request() req: any) {
    return this.notificationService.findAll(req.user.id);
  }

  @Post('send')
  @UseGuards(JwtAuthGuard)
  async send(@Body() sendNotificationDto: SendNotificationDto) {
    return this.notificationService.send(sendNotificationDto);
  }

  @Post(':id/read')
  @UseGuards(JwtAuthGuard)
  async markAsRead(@Param('id') id: string, @Request() req: any) {
    return this.notificationService.markAsRead(id, req.user.id);
  }

  @Get('unread-count')
  @UseGuards(JwtAuthGuard)
  async getUnreadCount(@Request() req: any) {
    return this.notificationService.getUnreadCount(req.user.id);
  }
}
