import express from "express";
import { ClientController } from "../controllers";
import { dataValidation } from "../middlewares";

export const clientRoutes =  () => {
  const router = express.Router();

  router.post("/clients", dataValidation,new ClientController().createClient);
  router.get("/clients", new ClientController().listClients);

  return router;
};
