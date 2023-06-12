import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repositories/product.repository';

@Controller('products')
export class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

  @Post()
  createProduct(@Body() data: CreateProductDto) {
    console.log(data);
    return this.productRepository.createProduct(data);
  }

  @Get('all')
  getAllProduct() {
    return this.productRepository.findAllProducts();
  }

  @Get()
  getOneProduct(@Query('id') product_id: number) {
    return this.productRepository.findProductById(product_id);
  }

  @Put()
  updateProduct(@Body() data: UpdateProductDto) {
    return this.productRepository.updateProduct(data);
  }

  @Put('published')
  publishedProduct(@Query('id') product_id: number) {
    const isPublished = true;
    return this.productRepository.changeProduct(product_id, isPublished);
  }

  @Put('unpublished')
  unpublishedProduct(@Query('id') product_id: number) {
    const isPublished = false;
    return this.productRepository.changeProduct(product_id, isPublished);
  }

  @Delete()
  deleteProduct(@Query('id') product_id: number) {
    return this.productRepository.deleteProduct(product_id);
  }
}
