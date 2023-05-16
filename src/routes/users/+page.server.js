import { User } from "../../lib/tables"
import { formToJson } from "../../lib/utils"
import { supabase } from "../../lib/tables/Supabase";

export const load = async () => {
    console.log("EStoy entrando")
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