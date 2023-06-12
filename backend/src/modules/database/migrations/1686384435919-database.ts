import { MigrationInterface, QueryRunner } from 'typeorm';

export class Database1686384435919 implements MigrationInterface {
  name = 'Database1686384435919';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" ("id" SERIAL NOT NULL, "product_name" character varying NOT NULL, "product_description" character varying NOT NULL, "product_price" real NOT NULL, "product_quantity" integer NOT NULL, "product_type" character varying NOT NULL, "product_attributes" jsonb NOT NULL DEFAULT '{}', "isPublished" boolean NOT NULL DEFAULT false, "product_tags" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "product"`);
  }
}
