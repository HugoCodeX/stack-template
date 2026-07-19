import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { IProductServiceClient } from '../../common/interfaces';

@Injectable()
export class ProductService implements IProductServiceClient {
  private readonly logger = new Logger(ProductService.name);
  private readonly productServiceUrl: string;

  constructor(
    private readonly httpService: HttpService,
    configService: ConfigService,
  ) {
    this.productServiceUrl = configService.get<string>('services.product', 'http://localhost:3002');
  }

  async findAll(query: any) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.productServiceUrl}/products`, { params: query })
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en findAll: ${error.message}`, error.stack);
      throw new HttpException(
        'Error al obtener productos del microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async findOne(id: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.productServiceUrl}/products/${id}`)
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en findOne (${id}): ${error.message}`, error.stack);
      if (error.response?.status === 404) {
        throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Error al obtener producto del microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async create(createProductDto: any) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.productServiceUrl}/products`, createProductDto)
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en create: ${error.message}`, error.stack);
      if (error.response?.status === 400) {
        throw new HttpException(error.response.data.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        'Error al crear producto en el microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async update(id: string, updateProductDto: any) {
    try {
      const response = await firstValueFrom(
        this.httpService.put(`${this.productServiceUrl}/products/${id}`, updateProductDto)
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en update (${id}): ${error.message}`, error.stack);
      if (error.response?.status === 404) {
        throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Error al actualizar producto en el microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async remove(id: string) {
    try {
      const response = await firstValueFrom(
        this.httpService.delete(`${this.productServiceUrl}/products/${id}`)
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en remove (${id}): ${error.message}`, error.stack);
      if (error.response?.status === 404) {
        throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Error al eliminar producto del microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async findByCategory(category: string, query: any) {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.productServiceUrl}/products/category/${category}`, { params: query })
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en findByCategory (${category}): ${error.message}`, error.stack);
      throw new HttpException(
        'Error al obtener productos por categoría del microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }

  async addReview(id: string, reviewDto: any) {
    try {
      const response = await firstValueFrom(
        this.httpService.post(`${this.productServiceUrl}/products/${id}/reviews`, reviewDto)
      );
      return response.data;
    } catch (error) {
      this.logger.error(`Error en addReview (${id}): ${error.message}`, error.stack);
      if (error.response?.status === 404) {
        throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'Error al agregar reseña en el microservicio',
        HttpStatus.SERVICE_UNAVAILABLE
      );
    }
  }
}
