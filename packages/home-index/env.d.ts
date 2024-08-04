declare namespace NodeJS {
  interface ProcessEnv {
    /** supabase rest api url */
    readonly SUPABASE_REST_API_URL: string;
    /** supabase anon key for rest api */
    readonly SUPABASE_ANON_KEY: string;
  }
}
