import { SaleRepository } from "../../infra/repositories";
import { ItemSoldRepository } from "../../infra/repositories/item-sold.repository";
import { CreateSaleDTO, CreateSaleWithSoldItemsDTO, DetailSaleDTO } from "../dtos";

export class CreateSaleUseCase {
  async execute(
    createSaleDTO: CreateSaleWithSoldItemsDTO
  ): Promise<DetailSaleDTO> {
    const saleRepository = new SaleRepository();
    const itemSoldRepository = new ItemSoldRepository();

    const sale = await saleRepository.saveSale(createSaleDTO);
    const item = await itemSoldRepository.itemSoldSave({
      amount: createSaleDTO.amount,
      idProduct: createSaleDTO.idProduct,
      idSale: sale.id,
      price: createSaleDTO.price,
    });

    return sale;
  }
}