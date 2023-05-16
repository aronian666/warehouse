import { formToJson } from "$lib/utils"
import { Registration } from "../../lib/tables"

export const load = async ({ locals }) => {
    let today = new Date();
    today.setHours(0);
    today = await Registration.find({
        user_id: "eq." + locals.current_user.id,
        created_at: "gt." + today.toISOString(),
    });
    return { today: structuredClone(today) }
}

export const actions = {
    async createRegister({ request, locals }) {
        const data = formToJson(await request.formData())
        const registration = new Registration(data.registration)
        registration.user_id = locals.current_user.id
        if (registration.id) registration.updated_at = new Date()
        await registration.upsert()
        return { success: true }
    }
}