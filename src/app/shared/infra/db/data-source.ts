import { DataSource } from "typeorm";
import entities from "./entities";
import migrations from "./migrations";

export const appDataSource = new DataSource({
  type: "postgres",
  host: "silly.db.elephantsql.com",
  // host: "pg.dienerld.dev",
  port: 5432,
  username: "rihgynbc",
  password: "gfo8dYGZSH8IGf03-hkAu9YH6-xaHaG5",
  database: "rihgynbc",
  // username: "postgres",
  // password: "postgres",
  // database: "postgres",
  logging: true,
  ssl: {
    rejectUnauthorized: false,
  },
  entities,
  migrations,
  synchronize: false,
});
