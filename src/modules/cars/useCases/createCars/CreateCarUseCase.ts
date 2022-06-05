import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRrquest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  file_amount: number;
  brand: string;
  category_id: string;
}

/* @injectable() */
class CreateCarUseCase {
  constructor(
    /*  @inject("CarsRepository") */
    private carsRepository: ICarsRepository
  ) {}
  async execute({
    name,
    description,
    daily_rate,
    license_plate,
    file_amount,
    brand,
    category_id,
  }: IRrquest): Promise<void> {
    const carAlredyExists = await this.carsRepository.findByLicensePlate(
      license_plate
    );

    if (carAlredyExists) {
      throw new Error("Carro já existe!");
    }
    await this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      file_amount,
      brand,
      category_id,
    });
  }
}

export { CreateCarUseCase };
