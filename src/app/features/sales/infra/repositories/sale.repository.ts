import { appDataSource } from "../../../../shared/infra/db/data-source";
import { SaleEntity } from "../../../../shared/infra/db/entities";
import { CreateSaleDTO, DetailSaleDTO } from "../../domain/dtos";

export class SaleRepository {
  private _repository = appDataSource.getRepository(SaleEntity);

  async saveSale(data: CreateSaleDTO): Promise<DetailSaleDTO> {
    const sale = this._repository.create({
      idClient: data.idClient,
      idSeller: data.idSeller,
    });
    await this._repository.save(sale);
    return this.mapperToUserDetail(sale);
  }

  private mapperToUserDetail(entity: SaleEntity): DetailSaleDTO {
    return {
      id: entity.id,
      idClient: entity.idClient,
      idSeller: entity.idSeller,
    };
  }
}
