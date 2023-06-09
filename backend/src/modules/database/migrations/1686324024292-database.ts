import { MigrationInterface, QueryRunner } from 'typeorm';

export class Database1686324024292 implements MigrationInterface {
  name = 'Database1686324024292';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" DROP COLUMN "product_price"`,
    );
    await queryRunner.query(`ALTER TABLE "product" ADD "product_price" real`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" DROP COLUMN "product_price"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD "product_price" integer`,
    );
  }
}
