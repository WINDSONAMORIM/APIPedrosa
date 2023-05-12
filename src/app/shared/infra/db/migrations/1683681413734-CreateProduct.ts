import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProduct1683681413734 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "products",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
              },
              {
                name: "name",
                type: "varchar",
                length: "100",
              },
              {
                name: "price",
                type: "numeric",
                precision: 10,
                scale: 2,
              },
              {
                name: "created_at",
                type: "timestamp",
              },
              {
                name: "updated_at",
                type: "timestamp",
              },
            ],
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products", true, true, true);
    }
}
