import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import BaseEntity from "./base-entity.entity";
import { SaleEntity } from "./sale-entity.entity";

@Entity({ name: "clients" })
export class ClientEntity extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  contact!: string;


  @OneToMany(() => SaleEntity, (entity) => entity.client)
  sale!: SaleEntity[];
}
