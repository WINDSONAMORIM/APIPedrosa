import express from "express";
import { SellerController } from "../controllers";

export const sellerRoutes = () => {
  const router = express.Router();

  router.post("/seller", new SellerController().createSeller);

  return router;
};
