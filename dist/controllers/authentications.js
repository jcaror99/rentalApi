import { AuthenticationModel } from "../models/authentications.js";
export class AuthenticationController {
    static async getAuthentication(req, res) {
        if (req.headers.authorization?.includes("Basic")) {
            const data = await AuthenticationModel.getBasicAuthentication(req.headers.authorization);
            res.status(200).json(data);
        }
    }
}
