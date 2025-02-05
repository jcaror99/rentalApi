import { UserModel } from "../models/user.js";
export class UserController {
    static async getAll(req, res) {
        const data = await UserModel.getAll();
        res.status(200).json(data);
    }
    static async getById(req, res) {
        const data = await UserModel.getById({ id: Number(req.params.id) });
        res.status(200).json(data);
    }
    static async getBasicAuthentication(inputData) {
        const data = await UserModel.getBasicAuthentication(inputData);
        return data;
    }
}
