import express from "express";
import { SaleController } from "../controllers/sale.controller";
import { auth } from "../../../../shared/presentation/middlewares";
import { dataValidation, dataValidationArray } from "../middlewares";

export const saleRoutes = () => {
  const router = express.Router();

  router.post("/sale",dataValidation, new SaleController().createSale);
  router.post("/sales", dataValidationArray, new SaleController().createSaleArray);

  return router;
};
