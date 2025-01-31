import pgPromise from "pg-promise";
import configDB from "./config.js";

const pgp = pgPromise();
const db = pgp(configDB);

export default db;
