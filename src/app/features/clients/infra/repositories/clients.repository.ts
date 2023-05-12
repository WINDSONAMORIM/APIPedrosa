import { appDataSource } from "../../../../shared/infra/db/data-source";
import { ClientEntity } from "../../../../shared/infra/db/entities";
import { CreateClientDTO, DetailClientDTO } from "../../domain/dtos";

export class ClientRepository {
  private _repository = appDataSource.getRepository(ClientEntity);

  async createClient(data: CreateClientDTO): Promise<DetailClientDTO> {
    const client = this._repository.create({
      name: data.name,
      contact: data.contact,
    });
    await this._repository.save(client);
    return client;
  }

  async getClientAll(): Promise<DetailClientDTO[]> {
    const clients = await this._repository.find();

    return clients.map((client) => this.mapperToClientDetail(client));
  }

  private mapperToClientDetail(entity: ClientEntity) {
    return {
      id: entity.id,
      name: entity.name,
      contact: entity.contact
    };
  }
}
