import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class AlterTableSale1683559196362 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "sales",
      new TableForeignKey({
        columnNames: ["id_seller"],
        referencedColumnNames: ["id"],
        referencedTableName: "sellers",
        name: "fk_sale_seller",
      })
    );

     await queryRunner.createForeignKey(
       "sales",
       new TableForeignKey({
         columnNames: ["id_client"],
         referencedColumnNames: ["id"],
         referencedTableName: "clients",
         name: "fk_sale_client",
       })
     );

      await queryRunner.createForeignKey(
        "sales",
        new TableForeignKey({
          columnNames: ["id_product"],
          referencedColumnNames: ["id"],
          referencedTableName: "products",
          name: "fk_sale_product",
        })
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("sales", "fk_sale_seller");
    await queryRunner.dropForeignKey("sales", "fk_sale_client");
    await queryRunner.dropForeignKey("sales", "fk_sale_product");
  }
}
