import ActiveRecord from "./ActiveRecord"
import Client from "./Client"
import Item from "./Item"
export default class Sale extends ActiveRecord {
    constructor(sale = { items: [] }) {
        super(sale, { client: Client, items: Item })
    }
    get total() {
        return this.items.reduce((acc, item) => acc + item.total, 0)
    }
    static table = "sales"
}