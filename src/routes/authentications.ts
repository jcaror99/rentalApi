import { Router } from "express";
import { AuthenticationController } from "../controllers/authentications.js";

const authentications = Router();

authentications.post("/", AuthenticationController.authenticate);

export default authentications;
