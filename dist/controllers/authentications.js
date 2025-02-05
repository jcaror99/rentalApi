// import { validateAuthentication } from "../types/schemas.js";
import { AuthenticationModel } from "../models/authentications.js";
export class AuthenticationController {
    static async getAuthentication(req, res) {
        if (req.headers.authorization?.includes("Basic")) {
            const data = await AuthenticationModel.getBasicAuthentication(req.headers.authorization);
            res.status(200).json(data);
        }
        // const result = validateAuthentication(req.body);
        // if (!result.success) {
        //   return res.status(400).json({ error: JSON.parse(result.error.message) });
        // }
        // const data = await AuthenticationModel.getBearerToken(result.data);
        // if (data.length === 0) {
        //   return res.status(401).json({ error: "Unauthorized" });
        // }
        // res.status(200).json(req.headers);
    }
}
