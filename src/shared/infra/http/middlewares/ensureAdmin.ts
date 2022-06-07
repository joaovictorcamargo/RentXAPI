import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../../../src/shared/errors/AppError";
import { UserRepository } from "../../../../../src/modules/accounts/infra/typeorm/repositories/UserRepository";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;
  const usersRepository = new UserRepository();
  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppError("Usuario não é administrador!");
  }

  return next();
}
