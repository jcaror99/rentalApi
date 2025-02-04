export class UserModel {
    static async getAll() {
        return "select * from sec.users";
    }
}
