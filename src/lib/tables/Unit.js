import ActiveRecord from "./ActiveRecord";

export default class Unit extends ActiveRecord {
    constructor(unit) {
        super(unit)
    }
    static table = "units"
    static model = "unit"
}