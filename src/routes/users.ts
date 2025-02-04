import { Router } from "express";
import { UserController } from "../controllers/users.js";

const users = Router();

users.get("/", UserController.getAll);
users.get("/:id", UserController.getById);

export default users;
