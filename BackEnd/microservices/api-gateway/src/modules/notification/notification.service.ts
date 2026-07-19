import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { INotificationServiceClient } from '../../common/interfaces';

@Injectable()
export class NotificationService implements INotificationServiceClient {
  private readonly logger = new Logger(NotificationService.name);
  private readonly notificationServiceUrl: string;

  constructor(
    private readonly httpService: HttpService,
    configService: ConfigService,
  ) {
    this.notificationServiceUrl = configService.get<string>('services.notification', 'http://localhost:3003');
  }

  async findAll(userId: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.notificationServiceUrl}/notifications`, {
          params: { userId }
        })
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en findAll (${userId}): ${error.message}`, error.stack);
      throw new HttpException(
        'Error al obtener notificaciones del microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async send(sendNotificationDto: any) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.notificationServiceUrl}/notifications/send`, sendNotificationDto)
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en send: ${error.message}`, error.stack);
      if (error.response?.status === 400) {
        throw new HttpException(error.response.data.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        'Error al enviar notificación en el microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async markAsRead(id: string, userId: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.notificationServiceUrl}/notifications/${id}/read`, { userId })
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en markAsRead (${id}): ${error.message}`, error.stack);
      if (error.response?.status === 404) {
        throw new HttpException('Notificación no encontrada', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Error al marcar notificación como leída',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async getUnreadCount(userId: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.notificationServiceUrl}/notifications/unread-count`, {
          params: { userId }
        })
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en getUnreadCount (${userId}): ${error.message}`, error.stack);
      throw new HttpException(
        'Error al obtener contador de notificaciones no leídas',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }
}
