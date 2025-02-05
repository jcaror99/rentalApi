import db from "../database/databaseConnection.js";
import { Authentication } from "../types/types.js";

export class UserModel {
  static async getAll() {
    const data = await db.any("select * from sec.users");
    return data;
  }

  static async getById({ id }: { id: number }) {
    const data = await db.any("select * from sec.users where id = $1", id);
    return data;
  }

  static async getBasicAuthentication(inputData: Authentication) {
    const data = await db.any(
      "select user_id,name from sec.users where name = $1 and password = $2",
      [inputData.name, inputData.password]
    );
    return data;
  }
}
