import { CustomError } from "../../../../shared/errors";
import { SellerRepository } from "../../infra/repositories/seller.repository";
import { CreateSellerDTO, DetailSellerDTO } from "../dtos/seller.dto";

export class CreateSellerUseCase {
  async execute(createSellerDTO: CreateSellerDTO): Promise<DetailSellerDTO> {
    const repository = new SellerRepository();
    const seller = await repository.saveSeller(createSellerDTO);
    return seller;
  }
}
