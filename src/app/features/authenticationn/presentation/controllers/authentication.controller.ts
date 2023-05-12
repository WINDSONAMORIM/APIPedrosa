import { Request, Response } from "express";
import { ok, unauthorized } from "../../../../shared/presentation/http-helper";
import { LoginUseCase } from "../../domain/usecases";
import { CustomError } from "../../../../shared/errors";

export class AuthenticationController {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const useCase = new LoginUseCase();
      const data = await useCase.execute({ email, password });
      return ok(res, { sucess: true, data });
    } catch (error: any) {
      if (error instanceof CustomError) {
        return unauthorized(res, { sucess: false, error: error.message });
      }
      throw error;
    }
  }
}
