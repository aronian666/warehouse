import ActiveRecord from "./ActiveRecord"
export default class Client extends ActiveRecord {
    constructor(client = {}) {
        super(client)
    }
    static table = "clients"
}
