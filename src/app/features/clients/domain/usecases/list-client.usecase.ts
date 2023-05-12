import { ClientRepository } from "../../infra/repositories";
import { DetailClientDTO } from "../dtos";

export class ListClientsUseCase {
  async execute(): Promise<DetailClientDTO[]> {
    const repository = new ClientRepository();
    const list = await repository.getClientAll();
    return list;
  }
}
