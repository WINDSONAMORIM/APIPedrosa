import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateSale1683680504795 implements MigrationInterface {

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
                type: "uuid",
              },
              {
                name: "id_client",
                type: "uuid",
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
            foreignKeys:[
                {
                   columnNames: ['id_seller'],
                   referencedColumnNames: ['id'],
                   referencedTableName: 'users',
                   name: 'fk_sale_seller'                   
                }, 
                {
                    columnNames:['id_client'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'clients',
                    name: 'fk_sale_client'
                },
            ]
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sales', true, true, true)
    }

}
