import { createClient } from "@supabase/supabase-js";
import {
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    PUBLIC_SUPABASE_SERVICE_ROLE
} from '$env/static/public';
export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_SERVICE_ROLE)

//export const admin = supabase.auth.admin