import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductRepository } from '../repositories/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  createProduct(data: CreateProductDto) {
    return this.productRepository.createProduct(data);
  }

  findAllProduct() {
    return this.productRepository.findAllProducts();
  }

  findOneProduct(product_id: number) {
    return this.productRepository.findProductById(product_id);
  }

  updateProduct(data: UpdateProductDto) {
    return this.productRepository.updateProduct(data);
  }

  publishedProduct(product_id: number) {
    const isPublished = true;
    return this.productRepository.changeProduct(product_id, isPublished);
  }

  unpublishedProduct(product_id: number) {
    const isPublished = false;
    return this.productRepository.changeProduct(product_id, isPublished);
  }

  deleteProduct(product_id: number) {
    return this.productRepository.deleteProduct(product_id);
  }
}
