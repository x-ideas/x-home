import { createBrowserClient } from "@supabase/ssr";

import { Database } from "./database.types.ts";

export const supabase = createBrowserClient<Database>(
  process.env.SUPABASE_REST_API_URL,
  process.env.SUPABASE_ANON_KEY,
);
