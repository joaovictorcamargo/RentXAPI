import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUserRepository";
import { UserRepository } from "../../modules/accounts/infra/typeorm/repositories/UserRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UserRepository
);
