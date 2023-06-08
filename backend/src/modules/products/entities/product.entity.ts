import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class Product {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public product_name: string;

  @Column()
  public product_description: string;

  @Column()
  public product_price: number;

  @Column()
  public product_quantity: number;

  @Column()
  public product_type: string;

  @Column({ type: 'jsonb', default: {} })
  public product_attributes: any;

  @Column({ default: false })
  public isPublished: boolean;

  @Column()
  public product_tags: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default Product;
