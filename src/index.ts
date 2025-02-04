import express from "express";
import dotenv from "dotenv";
import authentications from "./routes/authentications.js";
import users from "./routes/users.js";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 1234;

app.disable("x-powered-by");

app.use("/auth", authentications);
app.use("/user", users);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
