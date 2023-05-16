import ActiveRecord from "./ActiveRecord"
export default class Provider extends ActiveRecord {
    constructor(provider) {
        super(provider)
    }
    static table = "providers"
}