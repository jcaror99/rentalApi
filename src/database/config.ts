import { DatabaseConfig } from "../types/types.d.js";

const configDB: DatabaseConfig = {
  host: String(process.env.DB_HOST),
  port: Number(process.env.PORT),
  database: String(process.env.DB_NAME),
  user: String(process.env.DB_USER),
  password: String(process.env.DB_PASSWORD),
};

export default configDB;
