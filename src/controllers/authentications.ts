import { Request, Response } from "express";
import { validateUser } from "../types/schemas.js";
import { UserController } from "./users.js";

export class AuthenticationController {
  static async authenticate(req: Request, res: Response) {
    const result = validateUser(req.body);
    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    const { name, password } = req.body;
    //   const user = await UserController.
  }
}
