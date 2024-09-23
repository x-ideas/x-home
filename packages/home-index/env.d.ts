declare namespace NodeJS {
  interface ProcessEnv {
    /** supabase rest api url */
    readonly NEXT_PUBLIC_SUPABASE_URL: string;
    /** supabase anon key for rest api */
    readonly NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
  }
}
