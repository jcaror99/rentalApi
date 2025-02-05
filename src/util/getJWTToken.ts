import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

const getJWTToken = (payload, SECRET_KEY, options) => {};

export default getJWTToken;
