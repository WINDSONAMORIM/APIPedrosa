import express from "express";
import { UserController } from "../controllers/user.controller";
import { createUserValidator } from "../middlewares";
import { auth } from "../../../../shared/presentation/middlewares";
import { onlyAdmin } from "../../../../shared/presentation/middlewares/only-admin.middleware";

export const userRoutes = () => {
  const router = express.Router();
  router.post("/users", createUserValidator, new UserController().createUser);
  // router.get("/users", auth, onlyAdmin, new UserController().listUsers);
  router.get("/users", new UserController().listUsers);
  return router;
};
