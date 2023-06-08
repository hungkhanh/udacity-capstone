import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Product from '../products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_POSTGRES'),
        entities: [Product],
        migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
        synchronize: false,
        logging: true,
        cli: {
          migrationsDir: 'src/modules/database/migrations',
          subscribersDir: 'subscriber',
        },
      }),
    }),
  ],
})
export class DatabaseModule {}
