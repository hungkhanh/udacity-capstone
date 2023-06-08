export class UpdateProductDto {
  product_id: number;
  product_name?: string;
  product_description?: string;
  product_price?: number;
  product_quantity?: number;
  product_type?: string;
  product_attributes?: any;
  product_tags?: string;
}
