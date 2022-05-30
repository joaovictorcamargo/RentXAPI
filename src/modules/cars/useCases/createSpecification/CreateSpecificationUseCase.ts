import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute({ description, name }: IRequest): void {
    const specificationAlredyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlredyExists) {
      throw new Error("Especificação já Existe");
    }
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
