import { Request, Response } from "express";
import { CreateSaleUseCase } from "../../domain/usecases";
import { ok } from "../../../../shared/presentation/http-helper";
import { SoldItemsEntity } from "../../../../shared/infra/db/entities";
import { CreateSaleDTO } from "../../domain/dtos";
import { CreateSaleArrayUseCase } from "../../domain/usecases/create-sale-array.usecase";

export class SaleController {
  async createSale(req: Request, res: Response) {
    const { idSeller, idClient, idProduct, amount, price } = req.body;
    try {
      const useCase = new CreateSaleUseCase();
      const sale = await useCase.execute({
        idSeller,
        idClient,
        idProduct,
        amount,
        price,
      });
      return ok(res, { success: true, data: sale });
    } catch (error) {
      console.log(error);
    }
  }

  async createSaleArray(req: Request, res: Response) {
    const { idSeller, idClient, items } = req.body;
    try {
      const useCase = new CreateSaleArrayUseCase();
      const sale = await useCase.execute({ idClient, idSeller, items });
      return ok(res, { success: true, data: sale });
    } catch (error) {
      console.log(error);
    }
  }
}
