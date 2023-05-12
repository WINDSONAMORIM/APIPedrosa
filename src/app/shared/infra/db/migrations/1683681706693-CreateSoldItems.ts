import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSoldItems1683681706693 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sold_items",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "id_sale",
            type: "uuid",
          },
          {
            name: "id_product",
            type: "uuid",
          },
          {
            name: "amount",
            type: "integer",
            isNullable: false,
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
        foreignKeys: [
          {
            columnNames: ["id_sale"],
            referencedColumnNames: ["id"],
            referencedTableName: "sales",
            name: "fk_sold_items_sale",
          },
          {
            columnNames: ["id_product"],
            referencedColumnNames: ["id"],
            referencedTableName: "products",
            name: "fk_sold_items_product",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("sold_items", true, true, true);
  }
}
