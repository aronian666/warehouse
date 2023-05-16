import { Work } from "../../lib/tables";
import { formToJson } from '../../lib/utils'
export const load = async () => {
    const { data: works } = await Work.filter({}, { perPage: 100 })
    return { works: structuredClone(works) }
}

export const actions = {
    async default({ request }) {
        let { work } = formToJson(await request.formData())
        work = new Work(work)
        await work.upsert()
        return { success: true }
    }
}