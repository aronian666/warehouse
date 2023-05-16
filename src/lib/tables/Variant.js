import ActiveRecord from "./ActiveRecord"
import Product from "./Product"
export default class Variant extends ActiveRecord {
    constructor(variant = { variant: [], price: 0, quantity: 1, photos: [] }) {
        super(variant, { product: Product })
    }
    static table = "variants"
    static permit = ["variant"]
    /* static groupVariants(variants) {
        variants.forEach(variant => {
            variant.types = variant.types.sort((a,b) => a.id - b.id)
            variant.types.forEach(type => {

            })
        })
    } */
}