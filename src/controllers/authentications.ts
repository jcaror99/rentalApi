import { Request, Response } from "express";
import { AuthenticationModel } from "../models/authentications.js";

export class AuthenticationController {
  static async getAuthentication(req: Request, res: Response) {
    if (req.headers.authorization?.includes("Basic")) {
      const data = await AuthenticationModel.getBasicAuthentication(
        req.headers.authorization
      );
      res.status(200).json(data);
    }
  }
}
