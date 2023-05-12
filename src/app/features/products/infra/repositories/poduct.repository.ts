import { appDataSource } from "../../../../shared/infra/db/data-source";
import { ProductEntity } from "../../../../shared/infra/db/entities/product-entity.entity";
import { CreateProductDTO, DetailProductDTO } from "../../domain/dtos";

export class ProductRepository {
  private _repository = appDataSource.getRepository(ProductEntity);
  async createProduct(data: CreateProductDTO): Promise<DetailProductDTO> {
    const product = this._repository.create({
      name: data.name,
      price: data.price
    });
    await this._repository.save(product);

    return this.mapperToJobDetail(product);
  }

  private mapperToJobDetail(product: ProductEntity): DetailProductDTO {
    return {
      id: product.id,
      name: product.name,
      price:product.price
    };
  }
}
