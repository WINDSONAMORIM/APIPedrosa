//Inicializa o server

import app from "./main/config/app";
import "dotenv/config";
import "reflect-metadata";
import { appDataSource } from "./app/shared/infra/db/data-source";

const port = process.env.PORT || 8080;

appDataSource.initialize().then(() => {
  app.listen(port, () => console.log(`Server is running in port: ${port}`));
});
