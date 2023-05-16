import { Product, Record } from "../../../lib/tables"
import { formToJson } from "../../../lib/utils"
export const load = async ({ params }) => {
    const select = "*, category:category_id(*), records(*, user:user_id(*)), unit:unit_id(*), user:user_id(*)"
    const product = await Product.find({ id: "eq." + params.id }, { select, raw: true })
    console.log(product)
    return { product }
}


export const actions = {
    addRecord: async ({ request, locals }) => {
        let { record } = formToJson(await request.formData())
        record.user_id = locals.current_user.id
        record = new Record(record)
        await record.create()
        return { success: true }
    }
}