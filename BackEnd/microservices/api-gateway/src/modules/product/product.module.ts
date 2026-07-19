import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { PRODUCT_SERVICE_CLIENT } from '../../common/tokens';

@Module({
  imports: [HttpModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    { provide: PRODUCT_SERVICE_CLIENT, useClass: ProductService },
  ],
  exports: [ProductService, PRODUCT_SERVICE_CLIENT],
})
export class ProductModule {}
