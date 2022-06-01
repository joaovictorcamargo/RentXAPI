import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUserRepository";
import { UserRepository } from "../../modules/accounts/repositories/implementations/UserRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);
