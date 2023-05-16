import { Category, Unit } from "../../../lib/tables"

export const load = async () => {
    const [{ data: categories }, { data: units }] = await Promise.all([Category.filter({}, { perPage: 100 }), Unit.filter({}, { perPage: 100 })])
    return { categories: structuredClone(categories), units: structuredClone(units) }
}