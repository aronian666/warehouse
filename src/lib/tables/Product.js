import ActiveRecord from "./ActiveRecord"
import Variant from "./Variant"
import Photo from "./Photo"
import Category from "./Category"
import Record from "./Record"
import Unit from "./Unit"
import User from "./User"
export default class Product extends ActiveRecord {
    #category
    #unit
    constructor({ category, unit, ...product } = {}) {
        super(product, {
            variants: Variant,
            photos: Photo,
            category: Category,
            records: Record,
            unit: Unit,
            user: User
        })
        if (category) this.#category = new Category(category)
        if (unit) this.#unit = new Unit(unit)
    }
    get category() { return this.#category }
    set category(category) {
        this.category_id = category.id
        this.#category = category
        return this.#category
    }
    get unit() { return this.#unit }
    set unit(unit) {
        this.unit_id = unit.id
        this.#unit = unit
        return this.#unit
    }
    /* async create() {
        let variants = this.variants
        const product = await super.create()
        variants.forEach(variant => variant.product_id = product.id)
        product.variants = await Variant.create(variants)
        return product
    } */
    getVariants() {
        const combinations = this.getCombinations()
        return combinations.map(combination => new Variant({ variant: combination, price: 0, quantity: 1, product_id: this.id }))
    }
    getCombinations() {
        let combinations = [[]]
        this.options.forEach(option => {
            const variant = []
            for (const combination of combinations) {
                option.values.forEach((value) => {
                    variant.push([...combination, value]);
                })
            }
            combinations = variant
        })
        return combinations
    }
    getVariant() {
        if (this.variants?.length) return this.variants[0]
        return new Variant({ variants: [], photos: [], quantity: this.quantity, price: this.price })
    }
    static table = "products"
    static searchProperties = ["name"]
    //static permit = ["options"]
}