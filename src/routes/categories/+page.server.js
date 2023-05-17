import { redirect } from "@sveltejs/kit"
export const load = ({ locals }) => { if (locals.current_user.role === 0) throw redirect(303, "/") }