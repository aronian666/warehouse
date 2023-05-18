import ActiveRecord from "./ActiveRecord";
import Product from "./Product";
import Variant from "./Variant";

export default class Item extends ActiveRecord {
    constructor({ price = 0, quantity = 1, ...rest } = {}) {
        super({ price, quantity, ...rest }, { product: Product, variant: Variant })
    }
    get total() {
        return this.price * this.quantity
    }
    static table = "items"
    static model = "item"
}