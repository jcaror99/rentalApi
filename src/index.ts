import express from "express";
import dotenv from "dotenv";
import user from "./controllers/user.js";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 1234;

app.disable("x-powered-by");

app.use("/user", user);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
