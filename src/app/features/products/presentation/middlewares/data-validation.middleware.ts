import { NextFunction, Request, Response } from "express"
import { ZodError, z } from "zod"
import { badRequest } from "../../../../shared/presentation/http-helper";

export const dataValidation = (req: Request, res: Response, next: NextFunction) => {
    const scheme = z.object({
        name: z.string().nonempty(),
        price: z.number().min(1)
    })
    try {
      const data = scheme.parse(req.body);
      Object.assign(req.body, data);
      return next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        return badRequest(res, {
          sucess: false,
          error: error.issues.map((issue) => ({
            campo: issue.path[0],
            mensagem: issue.message,
            codigo: issue.code,
          })),
        });
      }
      throw error;
    }
}