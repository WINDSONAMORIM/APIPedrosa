import { create } from "domain";
import { appDataSource } from "../../../../shared/infra/db/data-source";
import { UserEntity } from "../../../../shared/infra/db/entities";
import { CreateUserDTO, DetailUserDTO } from "../../domain/dtos/user.dto";

export class UserRepository {
  private _repository = appDataSource.getRepository(UserEntity);

  async getUserAll(): Promise<DetailUserDTO[]> {
    const user = await this._repository.find();
    const users = user.map((user) => this.mapperToUserDetail(user));
    return users;
  }

  async getUserByEmail(email: string): Promise<DetailUserDTO | undefined> {
    const user = await this._repository.findOneBy({ email });
    if (!user) return undefined;
    return this.mapperToUserDetail(user);
  }

  async saveUser(user: CreateUserDTO): Promise<DetailUserDTO> {
    const entity = this._repository.create({
      email: user.email,
      name: user.name,
      profile: user.profile,
      password: user.password,
    });
    await this._repository.save(entity);
    return this.mapperToUserDetail(entity);
  }

  private mapperToUserDetail(entity: UserEntity): DetailUserDTO {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      profile: entity.profile,
      password: entity.password,
    };
  }
}
