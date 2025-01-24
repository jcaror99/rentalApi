import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT ?? 1234;
app.disable("x-powered-by");
app.get("/", (req, res) => {
    console.log("GET /");
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
