import { Job, Work } from "../../lib/tables"
import { formToJson } from "../../lib/utils"
export const load = async () => {
    const [{ data: jobs }, { data: works }] = await Promise.all([Job.filter({}, { perPage: 100, select: "*, user:user_id(*), work:work_id(*)" }), Work.filter({}, { perPage: 100 })])
    return { jobs: structuredClone(jobs), works: structuredClone(works) }
}


export const actions = {
    async default({ request, locals }) {
        const { job: object } = formToJson(await request.formData())
        const job = new Job(object)
        job.user_id = locals.current_user.id
        await job.upsert()
        return { success: true }
    }
}