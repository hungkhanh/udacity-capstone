import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(@Body() data: CreateProductDto) {
    return this.productService.createProduct(data);
  }

  @Get('all')
  getAllProduct() {
    return this.productService.findAllProduct();
  }

  @Get()
  getOneProduct(@Query('id') product_id: number) {
    return this.productService.findOneProduct(product_id);
  }

  @Put()
  updateProduct(@Body() data: UpdateProductDto) {
    return this.productService.updateProduct(data);
  }

  @Patch('published')
  publishedProduct(@Query('id') product_id: number) {
    return this.productService.publishedProduct(product_id);
  }

  @Patch('unpublished')
  unpublishedProduct(@Query('id') product_id: number) {
    return this.productService.unpublishedProduct(product_id);
  }

  @Delete()
  deleteProduct(@Query('id') product_id: number) {
    return this.productService.deleteProduct(product_id);
  }
}
