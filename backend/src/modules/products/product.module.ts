import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Product from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductRepository } from './repositories/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductRepository],
})
export class ProductModule {}
