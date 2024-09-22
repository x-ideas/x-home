import { createClient } from "@supabase/supabase-js";

import { Database } from "./database.types.ts";

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_REST_API_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);
