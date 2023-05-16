import {
    PUBLIC_SUPABASE_ANON_KEY,
    PUBLIC_SUPABASE_URL
} from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import User from '../lib/tables/User';


export const load = async ({ fetch, data, depends }) => {
    depends('supabase:auth');
    let current_user;
    const supabase = createSupabaseLoadClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event: { fetch },
        serverSession: data.session
    });

    const {
        data: { session }
    } = await supabase.auth.getSession();
    if (session) current_user = new User(session.user)
    return { supabase, session, current_user: structuredClone(current_user) };
};