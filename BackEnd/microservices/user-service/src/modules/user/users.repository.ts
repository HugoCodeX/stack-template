import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async findById(id: string): Promise<User | null> {
    return this.repo.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repo.findOne({ where: { email } });
  }

  async findByEmailWithPassword(email: string): Promise<User | null> {
    return this.repo.findOne({
      where: { email },
      select: ['id', 'email', 'password', 'name', 'lastName', 'roles', 'isActive', 'lastLogin', 'createdAt', 'updatedAt'],
    });
  }

  async findAllPaginated(page: number, limit: number, search?: string) {
    const skip = (page - 1) * limit;
    const where = search
      ? [
          { name: Like(`%${search}%`) },
          { lastName: Like(`%${search}%`) },
          { email: Like(`%${search}%`) },
        ]
      : {};

    return this.repo.findAndCount({
      where,
      skip,
      take: limit,
      order: { createdAt: 'DESC' },
    });
  }

  async create(userData: Partial<User>): Promise<User> {
    const user = this.repo.create(userData);
    return this.repo.save(user);
  }

  async save(user: User): Promise<User> {
    return this.repo.save(user);
  }

  async remove(user: User): Promise<void> {
    await this.repo.remove(user);
  }

  async update(id: string, data: Partial<User>): Promise<void> {
    await this.repo.update(id, data);
  }

  async existsByEmail(email: string): Promise<boolean> {
    const count = await this.repo.count({ where: { email } });
    return count > 0;
  }
}
