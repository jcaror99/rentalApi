import db from "../database/databaseConnection.js";

export class UserModel {
  static async getAll() {
    const data = await db.any("select * from sec.users");
    return data;
  }

  static async getById({ id }: { id: number }) {
    const data = await db.any("select * from sec.users where id = $1", id);
    return data;
  }
}
