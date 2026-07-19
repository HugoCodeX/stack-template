import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { IUserServiceClient } from '../../common/interfaces';

@Injectable()
export class UserService implements IUserServiceClient {
  private readonly logger = new Logger(UserService.name);
  private readonly userServiceUrl: string;

  constructor(
    private readonly httpService: HttpService,
    configService: ConfigService,
  ) {
    this.userServiceUrl = configService.get<string>('services.user', 'http://localhost:3001');
  }

  async findAll(query: any) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.userServiceUrl}/users`, { params: query })
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en findAll: ${error.message}`, error.stack);
      throw new HttpException(
        'Error al obtener usuarios del microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async findOne(id: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.userServiceUrl}/users/${id}`)
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en findOne (${id}): ${error.message}`, error.stack);
      if (error.response?.status === 404) {
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Error al obtener usuario del microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async create(createUserDto: any) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.userServiceUrl}/users`, createUserDto)
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en create: ${error.message}`, error.stack);
      if (error.response?.status === 400) {
        throw new HttpException(error.response.data.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        'Error al crear usuario en el microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async update(id: string, updateUserDto: any) {
    try {
      const response = await firstValueFrom(
        this.httpService.put(`${this.userServiceUrl}/users/${id}`, updateUserDto)
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en update (${id}): ${error.message}`, error.stack);
      if (error.response?.status === 404) {
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Error al actualizar usuario en el microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async remove(id: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.delete(`${this.userServiceUrl}/users/${id}`)
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en remove (${id}): ${error.message}`, error.stack);
      if (error.response?.status === 404) {
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Error al eliminar usuario del microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }
}
