import { UserModel } from "../models/user.js";
import { Request, Response } from "express";

export class UserController {
  static async getAll(req: Request, res: Response) {
    const data = await UserModel.getAll();
    res.json(data);
  }

  static async getById(req: Request, res: Response) {
    const data = await UserModel.getById({ id: Number(req.params.id) });
    res.json(data);
  }
}
