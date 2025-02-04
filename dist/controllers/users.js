import { UserModel } from "../models/user.js";
export class UserController {
    static async getAll(req, res) {
        const data = await UserModel.getAll();
        res.json(data);
    }
}
