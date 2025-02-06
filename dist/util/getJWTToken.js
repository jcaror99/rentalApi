import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;
const getJWTToken = (payload) => {
    const data = payload[0];
    const token = jwt.sign(data, String(SECRET_KEY), { expiresIn: "1h" });
    return token;
};
export default getJWTToken;
