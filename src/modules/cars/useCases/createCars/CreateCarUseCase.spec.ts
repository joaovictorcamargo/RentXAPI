import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryinMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });
  it("Deve criar um novo carro", async () => {
    await createCarUseCase.execute({
      name: "Name Car",
      description: "Description",
      daily_rate: 100,
      license_plate: "ABC-1234",
      file_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
  });

  it("Não deve criar um carro com placa já existente", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car1",
        description: "Description Car",
        daily_rate: 100,
        license_plate: "ABC-1234",
        file_amount: 60,
        brand: "Brand",
        category_id: "category",
      });
    });
  });
});
