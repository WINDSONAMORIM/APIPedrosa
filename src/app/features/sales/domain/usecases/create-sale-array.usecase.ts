import { SaleRepository } from "../../infra/repositories";
import { ItemSoldRepository } from "../../infra/repositories/item-sold.repository";
import { CreateSaleArrayDTO, CreateSaleDTO, DetailSaleDTO } from "../dtos";

export class CreateSaleArrayUseCase {
  async execute({
    idClient,
    idSeller,
    items,
  }: CreateSaleArrayDTO): Promise<DetailSaleDTO> {
    const saleRepository = new SaleRepository();
    const itemSoldRepository = new ItemSoldRepository();

    const sale = await saleRepository.saveSale({ idClient, idSeller });
    const itemsPromise = items.map((item) =>
      itemSoldRepository.itemSoldSave({
        amount: item.amount,
        idProduct: item.idProduct,
        idSale: sale.id,
        price: item.price,
      })
    );
    
    await Promise.all(itemsPromise);

    return sale;
  }
}