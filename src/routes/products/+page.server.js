import { Unit, Category } from "../../lib/tables"


export const load = async () => {
    const [{ data: units }, { data: categories }] = await Promise.all([Unit.filter({}, { perPage: 100 }), Category.filter({}, { perPage: 100 })])
    return { units: structuredClone(units), categories: structuredClone(categories) }
}

