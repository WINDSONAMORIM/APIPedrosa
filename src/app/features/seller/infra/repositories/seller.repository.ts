import { appDataSource } from "../../../../shared/infra/db/data-source";
import { SaleEntity, SellerEntity } from "../../../../shared/infra/db/entities";
import { CreateSellerDTO, DetailSellerDTO } from "../../domain/dtos";

export class SellerRepository {
  private _repository = appDataSource.getRepository(SellerEntity);

  async saveSeller(data: CreateSellerDTO): Promise<DetailSellerDTO> {
    const seller = this._repository.create({
      idSeller: data.idSeller,
    });
    await this._repository.save(seller);
    return seller;
    //return this.mapperToUserDetail(sale);
  }

  private mapperToUserDetail(entity: SellerEntity): DetailSellerDTO {
    return {
      idSeller: entity.idSeller,
    };
  }
}
