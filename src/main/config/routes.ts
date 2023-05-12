//Responsável pelas rotas da App

import { Express } from "express";
import { initialPage } from "./initialPage";
import { userRoutes } from "../../app/features/users/presentation/routes";
import { loginRoutes } from "../../app/features/authenticationn/presentation/routes";
import { productRoutes } from "../../app/features/products/presentation/routes";
import { saleRoutes } from "../../app/features/sales/presentation/routes";
import { clientRoutes } from "../../app/features/clients/presentation/routes/client.routes";
import { sellerRoutes } from "../../app/features/seller/presentation/routes";

export default (app: Express) => {
  app.get("/", (req, res) => res.status(200).send(initialPage));
  app.use(userRoutes());
  app.use(loginRoutes());
  app.use(productRoutes());
  app.use(saleRoutes());
  app.use(clientRoutes());
  app.use(sellerRoutes());
};
