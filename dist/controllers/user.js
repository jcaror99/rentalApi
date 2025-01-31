import { Router } from "express";
import db from "../database/databaseConnection.js";
const user = Router();
user.get("/", async (req, res) => {
    try {
        const user = await db.any("select * from sec.users");
        res.json(user);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
export default user;
