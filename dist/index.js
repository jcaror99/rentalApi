import express from "express";
import dotenv from "dotenv";
import db from "./controllers/databaseConnection.js";
dotenv.config();
const app = express();
const port = process.env.PORT ?? 1234;
app.disable("x-powered-by");
app.get("/user", async (req, res) => {
    console.log("GET /user", db);
    try {
        const users = await db.any("select * from sec.users");
        res.json(users);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
