import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import BaseEntity from "./base-entity.entity";
import { ClientEntity } from "./client-entity.entity";
import { UserEntity } from "./user-entity.entity";
import { SoldItemsEntity } from "./sold-items-entity.entity";

@Entity({ name: "sales" })
export class SaleEntity extends BaseEntity {
  @Column({ name: "id_seller" })
  idSeller!: string;

  @Column({ name: "id_client" })
  idClient!: string;

  @OneToMany(()=> SoldItemsEntity, (entity) => entity.id)
  soldItems!: SoldItemsEntity[]

  @ManyToOne(() => UserEntity, (entity) => entity.id)
  @JoinColumn({ name: "id_seller", referencedColumnName: "id" })
  user!: UserEntity;

  @ManyToOne(() => ClientEntity, (entity) => entity.id)
  @JoinColumn({ name: "id_client", referencedColumnName: "id" })
  client!: ClientEntity;
}
