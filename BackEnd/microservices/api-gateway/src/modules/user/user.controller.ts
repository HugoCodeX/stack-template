import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, Inject } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { USER_SERVICE_CLIENT } from '../../common/tokens';
import { IUserServiceClient } from '../../common/interfaces';
import { CreateUserDto, UpdateUserDto, QueryUserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE_CLIENT) private readonly userService: IUserServiceClient,
  ) {}

  @Get()
  async findAll(@Query() query: QueryUserDto) {
    return this.userService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
