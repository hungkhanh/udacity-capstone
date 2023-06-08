import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import Product from '../products/entities/product.entity';
dotenv.config();

const datasource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: String(process.env.POSTGRES_PASSWORD),
  database: process.env.POSTGRES_DB,
  entities: [Product],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  synchronize: false,
});

// console.log(datasource);

export default datasource;
