import { Product, Unit, Category } from "../../lib/tables"
import { formToJson } from "../../lib/utils"

export const load = async () => {
    const [{ data: units }, { data: categories }] = await Promise.all([Unit.filter({}, { perPage: 100 }), Category.filter({}, { perPage: 100 })])
    return { units: structuredClone(units), categories: structuredClone(categories) }
}

export const actions = {
    async default({ request }) {
        const data = formToJson(await request.formData())
        const product = new Product(data.product)
        await product.upsert()
        return { success: true }
    }
}