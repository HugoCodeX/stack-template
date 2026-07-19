import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, Inject } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PRODUCT_SERVICE_CLIENT } from '../../common/tokens';
import { IProductServiceClient } from '../../common/interfaces';
import { CreateProductDto, UpdateProductDto, AddReviewDto, QueryProductDto } from './dto';

@Controller('products')
export class ProductController {
  constructor(
    @Inject(PRODUCT_SERVICE_CLIENT) private readonly productService: IProductServiceClient,
  ) {}

  @Get()
  async findAll(@Query() query: QueryProductDto) {
    return this.productService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }

  @Get('category/:category')
  async findByCategory(@Param('category') category: string, @Query() query: QueryProductDto) {
    return this.productService.findByCategory(category, query);
  }

  @Post(':id/reviews')
  @UseGuards(JwtAuthGuard)
  async addReview(@Param('id') id: string, @Body() reviewDto: AddReviewDto) {
    return this.productService.addReview(id, reviewDto);
  }
}
