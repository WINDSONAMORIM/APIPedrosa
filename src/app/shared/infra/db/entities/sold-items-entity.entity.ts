import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import BaseEntity from "./base-entity.entity";
import { SaleEntity } from "./sale-entity.entity";

@Entity({ name: "sold_items" })
export class SoldItemsEntity extends BaseEntity {
  @Column({ name: "id_sale" })
  idSale!: string;

  @Column({ name: "id_product" })
  idProduct!: string;

  @Column()
  amount!: number;

  @Column()
  price!: number;

  @ManyToOne(() => SaleEntity, (sale) => sale.soldItems)
  @JoinColumn({ name: "id_sale", referencedColumnName: "id" })
  sale!: SaleEntity;
}
