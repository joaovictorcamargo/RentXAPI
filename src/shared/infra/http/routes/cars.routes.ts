import { Router } from "express";
import { ListAvailableCarsController } from "../../../../../src/modules/cars/useCases/ListAvailableCars/ListAvailableCarsController";
import { CreateCarController } from "../../../../../src/modules/cars/useCases/createCars/CreateCarController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCarSpecificationController } from "../../../../../src/modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { UploadCarImagesController } from "../../../../../src/modules/cars/useCases/uploadCarImage/UploadCarImageController";
import uploadConfig from "../../../../config/upload";
import multer from "multer";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController();

const upload = multer(uploadConfig.upload("./tmp/cars"));

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle
);

carsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  upload.array("images"),
  uploadCarImagesController.handle
);

export { carsRoutes };
