import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"
import { formToJson, negateString } from "../../lib/utils"
const inputs = [
    {
        name: "user[options][data][name]",
        title: "Nombre completo",
    },
    {
        name: "user[options][data][role]",
        hidden: true,
        value: "0",
    },
    {
        name: "user[email]",
        title: "Correo Electronico",
        required: true,
        type: "email",
    },
    {
        name: "user[password]",
        title: "Contraseña",
        required: true,
        type: "password",
    },
];

export const load = () => {
    return { inputs }
}

export const actions = {
    async default({ request, locals }) {
        const { user } = formToJson(await request.formData())
        const { data, error: err } = await locals.supabase.auth.signUp(user)
        //cookies.set('sb-auth-token', data.session.access_token, { maxAge: 60 * 60 * 24 * 7 * 1000 });
        if (err) {
            const errorInputs = structuredClone(inputs)
            errorInputs[2].error = "Este correo ya esta registrado!"
            errorInputs[2].pattern = negateString(user.email)
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: "Invalid credentials",
                    inputs: errorInputs
                })
            }
            return fail(500, {
                message: "Server error. Try again later.",
            })
        }

        throw redirect(303, "/")
    },
}