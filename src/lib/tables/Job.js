import ActiveRecord from "./ActiveRecord"
import User from "./User"
import Work from "./Work"
export default class Job extends ActiveRecord {
    constructor(job = { quantity: 1 }) {
        super(job, { user: User, work: Work })
    }
    static table = "jobs"
}