import { appDataSource } from "../db/data-source";
import { UserEntity } from "../db/entities";

export class UserSharedRepository{
    private _repository = appDataSource.getRepository(UserEntity);

    async getUserByEmail(
        email: string
    ): Promise<any>{
        const user = await this._repository.findOneBy({email});
        if(!user) return undefined;
        return this.mapperToUserDetail(user)
    }

       private mapperToUserDetail(entity: UserEntity) {
        return {
            id: entity.id,
            name: entity.name,
            email: entity.email,
            profile: entity.profile,
            password: entity.password
        };
    }
}