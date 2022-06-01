import { IUsersRepository } from "../../repositories/IUserRepository";
import { inject } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({
    name,
    driver_license,
    email,
    password,
    username,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      driver_license,
      email,
      password,
      username,
    });
  }
}

export { CreateUserUseCase };
