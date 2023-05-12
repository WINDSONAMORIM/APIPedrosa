import { UserEntity } from ".";
import BaseEntity from "./base-entity.entity";
import { ClientEntity } from "./client-entity.entity";
import { ProductEntity } from "./product-entity.entity";
import { SaleEntity } from "./sale-entity.entity";
import {SoldItemsEntity} from './sold-items-entity.entity'

export * from "./user-entity.entity";
export * from "./base-entity.entity";
export * from "./product-entity.entity";
export * from "./client-entity.entity";
export * from "./sale-entity.entity";
export * from './sold-items-entity.entity';

export default [
  UserEntity,
  BaseEntity,
  ProductEntity,
  SaleEntity,
  ClientEntity,
  SoldItemsEntity,
];
