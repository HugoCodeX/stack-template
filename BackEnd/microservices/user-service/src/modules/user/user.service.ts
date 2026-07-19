import {
  Injectable,
  NotFoundException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    private readonly usersRepo: UsersRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const exists = await this.usersRepo.existsByEmail(createUserDto.email);
    if (exists) {
      throw new ConflictException('El email ya está registrado');
    }

    return this.usersRepo.create({
      ...createUserDto,
      roles: createUserDto.roles || ['user'],
    });
  }

  async findAll(page: number = 1, limit: number = 10, search?: string) {
    const [users, total] = await this.usersRepo.findAllPaginated(page, limit, search);

    return {
      data: users,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersRepo.findById(id);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    this.logger.log(`Usuario encontrado: ${id}`);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepo.findByEmail(email);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return user;
  }

  async findByEmailWithPassword(email: string): Promise<User> {
    const user = await this.usersRepo.findByEmailWithPassword(email);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const exists = await this.usersRepo.existsByEmail(updateUserDto.email);
      if (exists) {
        throw new ConflictException('El email ya está registrado');
      }
    }

    if (updateUserDto.password) {
      delete updateUserDto.password;
    }

    Object.assign(user, updateUserDto);
    return this.usersRepo.save(user);
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await this.usersRepo.remove(user);
  }

  async activate(id: string): Promise<User> {
    const user = await this.findOne(id);
    user.isActive = true;
    return this.usersRepo.save(user);
  }

  async deactivate(id: string): Promise<User> {
    const user = await this.findOne(id);
    user.isActive = false;
    return this.usersRepo.save(user);
  }

  async updateLastLogin(id: string): Promise<void> {
    await this.usersRepo.update(id, { lastLogin: new Date() });
  }
}
