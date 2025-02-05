import base64ToObject from "../util/base64ToObject.js";
import { UserController } from "../controllers/users.js";
import { Authentication } from "../types/types.js";
import { validateAuthentication } from "../types/schemas.js";

export class AuthenticationModel {
  static async getBasicAuthentication(inputData: string) {
    const base64Credentials = inputData.split(" ")[1];
    const credentials = base64ToObject(base64Credentials) as Authentication;
    const result = validateAuthentication(credentials);
    if (!result.success) {
      throw new Error(JSON.stringify(result.error.message));
    }
    const data = await UserController.getBasicAuthentication(credentials);
    return data;
  }
}
