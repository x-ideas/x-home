import { createBrowserClient } from "@supabase/ssr";

import { Database } from "./database.types.ts";

console.log(
  "process.env.NEXT_PUBLIC_SUPABASE_REST_API_URL",
  process.env.NEXT_PUBLIC_SUPABASE_REST_API_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);
export const supabase = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_REST_API_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);
