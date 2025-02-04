import { Router } from "express";
import db from "../database/databaseConnection.js";
const users = Router();
users.get("/", async (req, res) => {
    try {
        const user = await db.any("select * from sec.users");
        res.json(user);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
users.get("/:id", async (req, res) => {
    try {
        const user = await db.any("select * from sec.users where id = $1", req.params.id);
        res.json(user);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
export default users;
