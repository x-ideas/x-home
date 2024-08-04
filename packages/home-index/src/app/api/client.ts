import { createClient } from "@supabase/supabase-js";

import { Database } from "./database.types.ts";

export const supabase = createClient<Database>(
  process.env.SUPABASE_REST_API_URL,
  process.env.SUPABASE_ANON_KEY,
);

supabase.from("projects");
