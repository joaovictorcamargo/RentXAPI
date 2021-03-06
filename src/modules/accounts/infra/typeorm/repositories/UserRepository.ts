import { IUsersRepository } from "../../../repositories/IUserRepository";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,

    driver_license,
    email,
    password,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      avatar,
      id,
      driver_license,
      email,
      password,
    });

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UserRepository };
