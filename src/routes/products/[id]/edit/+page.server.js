
import { Product, Unit, Category } from "../../../../lib/tables"

export const load = async ({ params }) => {
    const select = "*, category:category_id(*), unit:unit_id(*)"
    const [{ data: categories }, { data: units }] = await Promise.all([Category.filter({}, { perPage: 100 }), Unit.filter({}, { perPage: 100 })])
    const product = await Product.find({ id: "eq." + params.id }, { select, raw: true })
    return { product, categories: structuredClone(categories), units: structuredClone(units) }
}