import { AppError } from "../../../../errors/AppError";
import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}
  async execute({ description, name }: IRequest): Promise<void> {
    const specificationAlredyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlredyExists) {
      throw new AppError("Especificação já Existe");
    }
    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
