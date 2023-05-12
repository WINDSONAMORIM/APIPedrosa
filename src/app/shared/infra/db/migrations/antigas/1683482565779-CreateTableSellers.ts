import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableSellers1683482565779 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sellers",
        columns: [
          {
            name: "id",
            type: "varchar",
            length: "100",
            isPrimary: true,
          },
          {
            name: "id_seller",
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("sellers", true, true, true);
  }
}
