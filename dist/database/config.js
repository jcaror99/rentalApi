import dotenv from "dotenv";
dotenv.config();
const configDB = {
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    database: String(process.env.DB_NAME),
    user: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD),
};
export default configDB;
