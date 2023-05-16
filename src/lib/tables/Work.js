import ActiveRecord from "./ActiveRecord"
export default class Work extends ActiveRecord {
    constructor(work) {
        super(work)
    }
    static table = "works"
}