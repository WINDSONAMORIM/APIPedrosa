import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableSales1683481839304 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sales",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "id_seller",
            type: "varchar",
            length: "100",
          },
          {
            name: "id_client",
            type: "varchar",
            length: "100",
          },
          {
            name: "id_product",
            type: "varchar",
            length: "100",
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

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
