import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateClient1683680135886 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "clients",
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
                name: "contact",
                type: "varchar",
                length: "20",
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
        await queryRunner.dropTable('clients', true, true, true)
    }

}
