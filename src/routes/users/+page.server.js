import { User } from "../../lib/tables"
import { formToJson } from "../../lib/utils"
import { supabase } from "../../lib/tables/Supabase";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
    if (locals.current_user.role === 0) throw redirect(303, "/")
    const { data: users } = await User.filter({}, { perPage: 100 })
    return { users: structuredClone(users) }
}

export const actions = {
    update: async ({ request }) => {
        let { user } = formToJson(await request.formData())
        const { error } = await supabase.auth.admin.updateUserById(user.id, {
            user_metadata: { role: user.role },
        });
        return {}
    }
}