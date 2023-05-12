import { Request, Response } from "express";
import { UserRepository } from "../../infra/repositories/user.repository";
import { badRequest, ok } from "../../../../shared/presentation/http-helper";

export class UserController {
  async createUser(req: Request, res: Response) {
    const repository = new UserRepository();

    const { name, email, profile, password } = req.body;

    const exist = await repository.getUserByEmail(email);
    if (exist)
      return badRequest(res, { sucess: false, error: "Email already exists" });

    const dataUser = {
      name,
      email,
      profile,
      password,
    };

    const user = await repository.saveUser(dataUser);
    return ok(res, { sucess: true, data: user });
  }

  async listUsers(req: Request, res: Response) {
    const repository = new UserRepository();
    const users = await repository.getUserAll();
    return ok(res, { sucess: true, data: users });
  }
  
}
