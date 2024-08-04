/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare namespace NodeJS {
  interface ProcessEnv {
    /** supabase rest api url */
    readonly SUPABASE_REST_API_URL: string;
    /** supabase anon key for rest api */
    readonly SUPABASE_ANON_KEY: string;
  }
}
