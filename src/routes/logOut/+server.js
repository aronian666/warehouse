import { error, redirect } from "@sveltejs/kit";

export const POST = async ({ locals }) => {
    const { error: err } = await locals.supabase.auth.signOut()
    if (err) throw error(500, "Something went wrong during log out")
    throw redirect(303, "/")
}