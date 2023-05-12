import { Profile } from "../../../domain/enums";
import { Column, Entity, OneToMany } from "typeorm";
import BaseEntity from "./base-entity.entity";
import { SaleEntity } from "./sale-entity.entity";

@Entity({name:'users'})
export class UserEntity extends BaseEntity{
    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column({type: "enum" , enum: Profile})
    profile!: Profile;

    @Column()
    password!: string;

    @OneToMany(()=> SaleEntity, (entity) => entity.id)
    sales!: SaleEntity[];
}