import { MigrationInterface, QueryRunner } from 'typeorm';

export class Database1686211086219 implements MigrationInterface {
  name = 'Database1686211086219';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ADD "content" character varying NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "content"`);
  }
}
