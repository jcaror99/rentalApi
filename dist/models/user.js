import db from "../database/databaseConnection.js";
export class UserModel {
    static async getAll() {
        const data = await db.any("select * from sec.users");
        return data;
    }
    static async getById({ id }) {
        const data = await db.any("select * from sec.users where id = $1", id);
        return data;
    }
    static async getBasicAuthentication(inputData) {
        const data = await db.any("select user_id,name from sec.users where name = $1 and password = $2", [inputData.name, inputData.password]);
        return data;
    }
}
