import { Request, Response } from "express";
import { CreateClientUseCase, ListClientsUseCase } from "../../domain/usecases";
import { ok } from "../../../../shared/presentation/http-helper";
import { ClientRepository } from "../../infra/repositories";

export class ClientController {
  async createClient(req: Request, res: Response) {
    const { name, contact } = req.body;
    try {
      const useCase = new CreateClientUseCase();
      const client = await useCase.execute({ name, contact });
      return ok(res, { sucess: true, data: client });
    } catch (error) {}
  }

  async listClients(req: Request, res: Response) {
    try {
      const useCase = new ListClientsUseCase();
      const clients = await useCase.execute();
      return ok(res, { sucess: true, data: clients });
    } catch (error) {}
  }
}
