import { AuthApiError } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"
import { formToJson } from "../lib/utils"
export const actions = {
    async signIn({ request, locals }) {
        const { user } = formToJson(await request.formData())
        const { data, error: err } = await locals.supabase.auth.signInWithPassword(user)
        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: "Invalid credentials",
                })
            }
            return fail(500, {
                message: "Server error. Try again later.",
            })
        }

        throw redirect(303, "/")
    },
    signUp: async ({ request, locals }) => {
        const { user } = formToJson(await request.formData())
        const { data, error: err } = await locals.supabase.auth.signUp(user)
        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: "Invalid email or password",
                })
            }
            return fail(500, {
                error: "Server error. Please try again later.",
            })
        }

        throw redirect(303, "/")
    },
    async provider({ locals, url }) {
        const provider = url.searchParams.get("provider")
        const { data, error: err } = await locals.supabase.auth.signInWithOAuth({ provider })
        if (err) return fail(400, { message: "something went wrong" })
        throw redirect(303, data.url)
    }
}