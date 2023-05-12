import { Column, Entity, ManyToOne } from "typeorm";
import BaseEntity from "./base-entity.entity";
import { SaleEntity } from "./sale-entity.entity";

@Entity({name: 'products'})
export class ProductEntity extends BaseEntity{

    @Column()
    name!: string;
    
    @Column()
    price!: number

    // @ManyToOne(()=> SaleEntity, (sale) => sale.products)
    // sale!: SaleEntity
}