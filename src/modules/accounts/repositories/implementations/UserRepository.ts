import { IUsersRepository } from "../IUserRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async create({
    name,
    username,
    driver_license,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      driver_license,
      email,
      password,
    });

    await this.repository.save(user);
  }
}

export { UserRepository };
