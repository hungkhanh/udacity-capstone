import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import Product from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductRepository } from './repositories/product.repository';

describe('Product Controller', () => {
  let productRepo: Repository<Product>;
  let productRepository: ProductRepository;
  let productController: ProductController;

  beforeEach(() => {
    productRepository = new ProductRepository(productRepo);
    productController = new ProductController(productRepository);
  });

  describe('create', () => {
    it('should create a product', async () => {
      const createProductDto: CreateProductDto = {
        product_name: 'name',
        product_description: 'description',
        product_price: 1,
        product_quantity: 1,
        product_type: 'type',
        product_attributes: {},
        product_tags: 'tag',
      };

      const createdProduct = {
        product_name: 'name',
        product_description: 'description',
        product_price: 1,
        product_quantity: 1,
        product_type: 'type',
        product_attributes: {},
        product_tags: 'tag',
        id: 1,
        isPublished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(productRepository, 'createProduct')
        .mockResolvedValueOnce(createdProduct);

      const result = await productController.createProduct(createProductDto);
      expect(productRepository.createProduct).toHaveBeenCalledWith(
        createProductDto,
      );
      expect(result).toEqual(createdProduct);
    });
  });

  describe('get one', () => {
    it('should get one product', async () => {
      const product = {
        product_name: 'name',
        product_description: 'description',
        product_price: 1,
        product_quantity: 1,
        product_type: 'type',
        product_attributes: {},
        product_tags: 'tag',
        id: 1,
        isPublished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(productRepository, 'findProductById')
        .mockResolvedValueOnce(product);

      const result = await productController.getOneProduct(product.id);
      expect(productRepository.findProductById).toHaveBeenCalledWith(
        product.id,
      );
      expect(result.product_name).toEqual(product.product_name);
    });
  });

  describe('get all', () => {
    it('should get all product', async () => {
      const products = [
        {
          product_name: 'name1',
          product_description: 'description',
          product_price: 1,
          product_quantity: 1,
          product_type: 'type',
          product_attributes: {},
          product_tags: 'tag',
          id: 1,
          isPublished: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_name: 'name2',
          product_description: 'description',
          product_price: 1,
          product_quantity: 1,
          product_type: 'type',
          product_attributes: {},
          product_tags: 'tag',
          id: 2,
          isPublished: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest
        .spyOn(productRepository, 'findAllProducts')
        .mockResolvedValueOnce(products);

      const result = await productController.getAllProduct();
      expect(result.length).toEqual(products.length);
      expect(result[0].product_name).toEqual(products[0].product_name);
    });
  });

  describe('update', () => {
    it('should update product', async () => {
      const updateProductDto: UpdateProductDto = {
        product_id: 1,
        product_name: 'new_name',
      };

      const updatedProduct = {
        id: 1,
        product_name: 'new_name',
        product_description: 'description',
        product_price: 1,
        product_quantity: 1,
        product_type: 'type',
        product_attributes: {},
        product_tags: 'tag',
        isPublished: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest
        .spyOn(productRepository, 'updateProduct')
        .mockResolvedValueOnce(updatedProduct);

      await productController.updateProduct(updateProductDto);

      expect(productRepository.updateProduct).toHaveBeenCalledWith(
        updateProductDto,
      );
    });
  });

  describe('published', () => {
    it('should publish product', async () => {
      const mockResult = {
        message: 'changed',
        status: 'ok',
      };

      jest
        .spyOn(productRepository, 'changeProduct')
        .mockResolvedValueOnce(mockResult);

      const product_id = 1;
      const result = await productController.publishedProduct(product_id);

      expect(result.message).toEqual(mockResult.message);
    });
  });

  describe('unpublished', () => {
    it('should unpublish product', async () => {
      const mockResult = {
        message: 'changed',
        status: 'ok',
      };

      jest
        .spyOn(productRepository, 'changeProduct')
        .mockResolvedValueOnce(mockResult);

      const product_id = 1;
      const result = await productController.unpublishedProduct(product_id);

      expect(result.message).toEqual(mockResult.message);
    });
  });

  describe('delete', () => {
    it('should delete product', async () => {
      const mockResult = {
        message: 'deleted',
        status: 'ok',
      };

      jest
        .spyOn(productRepository, 'deleteProduct')
        .mockResolvedValueOnce(mockResult);

      const product_id = 1;
      const result = await productController.deleteProduct(product_id);

      expect(result.message).toEqual(mockResult.message);
    });
  });
});
