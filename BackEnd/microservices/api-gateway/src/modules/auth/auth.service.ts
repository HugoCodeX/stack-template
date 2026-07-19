import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { firstValueFrom } from 'rxjs';
import { AuthLoginEvent, AuthRegisterEvent } from '../../common/events';
import { LoginDto, RegisterDto } from './dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly userServiceUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
    private readonly eventEmitter: EventEmitter2,
    configService: ConfigService,
  ) {
    this.userServiceUrl = configService.get<string>('services.user', 'http://localhost:3001');
  }

  async login(loginDto: LoginDto) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.userServiceUrl}/auth/login`, loginDto)
      );

      const user = response.data.user;
      const payload = { email: user.email, sub: user.id, roles: user.roles };

      this.eventEmitter.emit(
        'auth.login',
        new AuthLoginEvent(user.id, user.email),
      );

      return {
        access_token: this.jwtService.sign(payload),
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          roles: user.roles,
        },
      };
    } catch (error) {
      this.logger.error(`Error en login: ${error.message}`, error.stack);
      if (error.response?.status === 401) {
        throw new HttpException('Credenciales inválidas', HttpStatus.UNAUTHORIZED);
      }
      throw new HttpException(
        'Error en el servicio de autenticación',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async register(registerDto: RegisterDto) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.userServiceUrl}/auth/register`, registerDto)
      );

      const user = response.data.user;
      const payload = { email: user.email, sub: user.id, roles: user.roles };

      this.eventEmitter.emit(
        'auth.register',
        new AuthRegisterEvent(user.id, user.email, user.name),
      );

      return {
        access_token: this.jwtService.sign(payload),
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          roles: user.roles,
        },
      };
    } catch (error) {
      this.logger.error(`Error en register: ${error.message}`, error.stack);
      if (error.response?.status === 400) {
        throw new HttpException(error.response.data.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        'Error al registrar usuario',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async getProfile(userId: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.userServiceUrl}/users/${userId}`)
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en getProfile: ${error.message}`, error.stack);
      throw new HttpException(
        'Error al obtener perfil de usuario',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async refreshToken(user: any) {
    const payload = { email: user.email, sub: user.id, roles: user.roles };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
