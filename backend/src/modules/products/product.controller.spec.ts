import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
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
        product_name: '',
        product_description: '',
        product_price: 0,
        product_quantity: 0,
        product_type: '',
        product_attributes: undefined,
        product_tags: '',
      };

      const createdProduct = {
        product_name: 'product-1',
        product_description: 'description',
        product_price: 1,
        product_quantity: 1,
        product_type: 'electronic',
        product_attributes: {},
        product_tags: '',
        id: 3,
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
});
