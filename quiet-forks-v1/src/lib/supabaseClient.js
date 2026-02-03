import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ywpvlqkytefanudaqokw.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    db: { schema: 'quiet_forks' }
})
