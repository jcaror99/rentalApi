import { UserModel } from "../models/user.js";
import { Request, Response } from "express";
import { Authentication } from "../types/types.js";

export class UserController {
  static async getAll(req: Request, res: Response) {
    const data = await UserModel.getAll();
    res.status(200).json(data);
  }

  static async getById(req: Request, res: Response) {
    const data = await UserModel.getById({ id: Number(req.params.id) });
    res.status(200).json(data);
  }

  static async getBasicAuthentication(inputData: Authentication) {
    const data = await UserModel.getBasicAuthentication(inputData);
    return data;
  }
}
