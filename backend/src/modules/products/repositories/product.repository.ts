import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import Product from '../entities/product.entity';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createProduct(data: CreateProductDto) {
    const product = new Product();

    product.product_name = data.product_name;
    product.product_description = data.product_description;
    product.product_price = data.product_price;
    product.product_quantity = data.product_quantity;
    product.product_type = data.product_type;
    product.product_attributes = data.product_attributes;
    product.product_tags = data.product_tags;

    return await this.productRepository.save(product);
  }

  async findAllProducts(): Promise<Product[]> {
    const select = [
      'product_name',
      'product_description',
      'product_price',
      'product_quantity',
      'product_type',
      'product_attributes',
      'product_tags',
    ];
    return await this.productRepository.find({
      select: [
        'product_name',
        'product_description',
        'product_price',
        'product_quantity',
        'product_type',
        'product_attributes',
        'product_tags',
      ],
    });
  }

  async findProductById(product_id: number): Promise<Product> {
    const select = [
      'id',
      'product_name',
      'product_description',
      'product_price',
      'product_quantity',
      'product_type',
      'product_attributes',
      'isPublished',
      'product_tags',
    ];
    return await this.productRepository.findOne({
      select: [
        'id',
        'product_name',
        'product_description',
        'product_price',
        'product_quantity',
        'product_type',
        'product_attributes',
        'isPublished',
        'product_tags',
      ],
      where: { id: product_id },
    });
  }

  async updateProduct(data: UpdateProductDto) {
    const foundProduct = await this.productRepository.findOne({
      where: {
        id: data.product_id,
      },
    });

    if (!foundProduct) {
      throw new NotFoundException('Error: Not found product');
    }
    this.updateProperties(data, foundProduct);
    return await this.productRepository.save(foundProduct);
  }

  async changeProduct(product_id: number, isPublished: boolean) {
    const foundProduct = await this.productRepository.findOne({
      where: {
        id: product_id,
      },
    });

    if (!foundProduct) {
      throw new NotFoundException('Error: Not found product');
    }
    return await this.productRepository.update(product_id, {
      isPublished,
    });
  }

  async deleteProduct(product_id: number) {
    const foundProduct = await this.productRepository.findOne({
      where: {
        id: product_id,
      },
    });

    if (!foundProduct) {
      throw new NotFoundException('Error: Not found product');
    }
    return await this.productRepository.delete(product_id);
  }

  private updateProperties(product1, product2) {
    Object.keys(product1).forEach((key) => {
      if (product1[key]) {
        product2[key] = product1[key];
      }
    });
    return product2;
  }
}
