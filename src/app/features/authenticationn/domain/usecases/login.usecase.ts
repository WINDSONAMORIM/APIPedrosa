import { BCryptPassword } from '../../../../shared/adapters/crypto';
import { JwtToken } from '../../../../shared/adapters/jwt';
import { CustomError } from '../../../../shared/errors';
import { UserSharedRepository } from '../../../../shared/infra/repositories/user-shared.repository';
import { LoginDTO, LoginDetailDTO } from '../dtos';

export class LoginUseCase {
    async execute(loginDTO: LoginDTO): Promise<LoginDetailDTO> {
        const repository = new UserSharedRepository();

        const user = await repository.getUserByEmail(loginDTO.email);

        if (!user) throw new CustomError('Incorret email or password.');

        if(user.password != loginDTO.password) throw new CustomError("Incorret email or password.");

        const jwtToken = new JwtToken();

        // const userData = {
        //     id: user.id,
        //     name: user.name,
        //     email: user.email,
        //     profile: user.profile,
        // };

        const token = jwtToken.sign(userData);
        return {
            ...userData,token
        };
    }
}
