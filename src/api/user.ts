import express from "express";

const app = express();
const port = 1234;

app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
