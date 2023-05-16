import ActiveRecord from "./ActiveRecord";
import User from "./User"
export default class Record extends ActiveRecord {
    constructor(record) {
        super(record, { user: User })
    }
    static table = "records"
}