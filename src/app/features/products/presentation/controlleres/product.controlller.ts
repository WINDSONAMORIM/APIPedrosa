import { Request, Response } from "express";
import { badRequest, ok } from "../../../../shared/presentation/http-helper";
import { CreateProductUseCase } from "../../domain/usecases/create-product.usecase";

export class ProductController {
  async createProduct(req: Request, res: Response) {
    const { name, price } = req.body;
    const useCase = new CreateProductUseCase();
    try {
      const auth = req.user;
      console.log(req.user);

      const product = await useCase.execute({ name, price }, auth);
      return ok(res, { sucess: true, data: product });
    } catch (error: any) {
      return badRequest(res, { sucess: false, error: error.message });
    }
  }
}
