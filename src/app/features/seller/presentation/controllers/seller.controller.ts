import { Request, Response } from "express";
import { CreateSellerUseCase } from "../../domain/usecases";
import { ok } from "../../../../shared/presentation/http-helper";

export class SellerController {
  async createSeller(req: Request, res: Response) {
    const { idSeller } = req.body;
    console.log("idSeller", idSeller);
    try {
      const useCase = new CreateSellerUseCase();
      const seller = await useCase.execute({
        idSeller,
      });
      return ok(res, { success: true, data: seller });
    } catch (error) {
      console.log("erro controller");
    }
  }
}
