import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginDto } from '../user/dto/login.dto';
import { User } from '../user/entities/user.entity';
import { UserRegisteredEvent, UserLoggedInEvent } from '../../common/events';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async register(createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.create(createUserDto);
      const payload = { email: user.email, sub: user.id, roles: user.roles };

      this.eventEmitter.emit(
        'user.registered',
        new UserRegisteredEvent(user.id, user.email, user.name),
      );

      return {
        message: 'Usuario registrado exitosamente',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          lastName: user.lastName,
          roles: user.roles,
          isActive: user.isActive,
          createdAt: user.createdAt,
        },
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      this.logger.error(`Error en register: ${error.message}`, error.stack);
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new ConflictException('Error al registrar usuario');
    }
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);

    if (!user.isActive) {
      throw new UnauthorizedException('Usuario desactivado');
    }

    await this.userService.updateLastLogin(user.id);

    this.eventEmitter.emit(
      'user.logged_in',
      new UserLoggedInEvent(user.id, user.email),
    );

    const payload = { email: user.email, sub: user.id, roles: user.roles };

    return {
      message: 'Login exitoso',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        roles: user.roles,
        isActive: user.isActive,
        lastLogin: new Date(),
      },
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    try {
      const user = await this.userService.findByEmail(email);

      if (user && (await user.validatePassword(password))) {
        return user;
      }

      throw new UnauthorizedException('Credenciales inválidas');
    } catch (error) {
      this.logger.warn(`Fallo de autenticación para email: ${email}`);
      throw new UnauthorizedException('Credenciales inválidas');
    }
  }

  async validateToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);
      const user = await this.userService.findOne(payload.sub);

      return {
        valid: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          roles: user.roles,
          isActive: user.isActive,
        },
      };
    } catch (error) {
      return {
        valid: false,
        message: 'Token inválido o expirado',
      };
    }
  }
}
