import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Response, Request } from "express";
import SwaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "../../../swagger.json";
import "../typeorm";
import "../../container";
import { AppError } from "../../errors/AppError";
import createConnection from "../typeorm/index";

createConnection();
const app = express();

app.use(express.json());

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Erro Iterno - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Joia"));
