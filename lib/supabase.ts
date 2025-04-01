import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Client tarafı için
export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "")

// Server tarafı için (güvenli işlemler için)
export const supabaseAdmin = createClient(supabaseUrl || "", supabaseServiceKey || "", {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

