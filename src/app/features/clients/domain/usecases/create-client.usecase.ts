import { ClientRepository } from "../../infra/repositories";
import { CreateClientDTO, DetailClientDTO } from "../dtos";

export class CreateClientUseCase {
  async execute(createClientDTO: CreateClientDTO): Promise<DetailClientDTO> {
    const repository = new ClientRepository();
    const client = await repository.createClient(createClientDTO);
    return client;
  }
}
