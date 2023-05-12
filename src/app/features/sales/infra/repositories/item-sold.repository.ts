import { appDataSource } from "../../../../shared/infra/db/data-source";
import { SoldItemsEntity } from "../../../../shared/infra/db/entities/sold-items-entity.entity";
import { DetailSoldItems } from "../../domain/dtos";

interface itemSold {
  idProduct: string,
  idSale: string,
  amount: number,
  price: number;
}


export class ItemSoldRepository {
  private _repository = appDataSource.getRepository(SoldItemsEntity);
  async itemSoldSave(data: itemSold): Promise<DetailSoldItems>{
    const itemSold = this._repository.create(data)
    console.log('sold:', itemSold)
    await this._repository.save(itemSold);
    return itemSold;
  }

//   async saveSale(data: CreateSaleDTO): Promise<DetailSaleDTO> {
//     const sale = this._repository.create({
//       idClient: data.idClient,
//       idSeller: data.idSeller,
//       idProduct: data.idProduct,
//       //amount: data.amount,
//     });
//     console.log("Repository", sale);
//     await this._repository.save(sale);
//     return sale;
//     //return this.mapperToUserDetail(sale);
//   }
}