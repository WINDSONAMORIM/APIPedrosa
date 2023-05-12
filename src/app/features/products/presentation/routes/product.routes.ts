import express from "express";
import { ProductController } from "../controlleres/product.controlller";
import { auth } from "../../../../shared/presentation/middlewares";
import { dataValidation } from "../middlewares";

export const productRoutes = () => {
  const router = express.Router();

  router.post("/product", dataValidation, new ProductController().createProduct);

  return router;
};
