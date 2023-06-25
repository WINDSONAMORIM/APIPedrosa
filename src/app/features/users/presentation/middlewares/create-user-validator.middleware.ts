import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";
import { Profile } from "../../../../shared/domain/enums";
import { badRequest } from "../../../../shared/presentation/http-helper";

export const createUserValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (typeof req.body.profile === "string") {
    req.body.profile = (req.body.profile as string).toUpperCase();
  }

  const scheme = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    profile: z.nativeEnum(Profile),
  });
  try {
    const data = scheme.parse(req.body);
    Object.assign(req.body, data);
    return next();
  } catch (error: any) {
    if (error instanceof ZodError) {
      return badRequest(res, {
        success: false,
        error: error.issues.map((issue) => ({
          campo: issue.path[0],
          message: issue.message,
          codigo: issue.code,
        })),
      });
    }
    throw error.message;
  }
};
