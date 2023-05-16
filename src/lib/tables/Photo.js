import ActiveRecord from "./ActiveRecord";
import Product from "./Product"
import Variant from "./Variant";
export default class Photo extends ActiveRecord {
    constructor(photo = { url: "" }) {
        super(photo, { product: Product, variant: Variant })
    }
    static table = "photos"
}