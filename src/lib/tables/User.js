import ActiveRecord from "./ActiveRecord";

export default class User extends ActiveRecord {
    constructor({ id, name, role, picture, email, user_metadata } = {}) {
        super()
        if (id) this.id = id
        this.email = email
        if (user_metadata) {
            this.name = user_metadata.name
            this.role = parseInt(user_metadata.role)
            this.picture = user_metadata.picture
        } else {
            this.name = name.replaceAll('"', "")
            this.role = parseInt(role)
            this.picture = picture.replaceAll('"', "")
        }
    }
    get roleString() {
        const roles = ["Usuario", "Administrador"]
        return roles[this.role]
    }
    static table = "users"
}