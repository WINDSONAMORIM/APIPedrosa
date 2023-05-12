
import { Profile } from "../../../../shared/domain/enums";
import { CustomError } from "../../../../shared/errors";
import { AuthUserDTO } from "../../../users/domain/dtos/user.dto";
import { ProductRepository } from "../../infra/repositories/poduct.repository";
import { CreateProductDTO, DetailProductDTO } from "../dtos";

export class CreateProductUseCase {
  async execute(
    createProduct: CreateProductDTO,
    authUser: AuthUserDTO
  ): Promise<DetailProductDTO> {

    // if (authUser.profile !== Profile.ADMIN) {
    //   throw new CustomError("User is not ADMIN");
    // }

    const repository = new ProductRepository();
    const product = await repository.createProduct(createProduct);

    return product;
  }
}
