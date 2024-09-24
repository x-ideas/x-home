declare namespace NodeJS {
  interface ProcessEnv {
    /** supabase rest api url */
    readonly NEXT_PUBLIC_SUPABASE_URL: string;
    /** supabase anon key for rest api */
    readonly NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    /** web-push key相关 */
    readonly NEXT_PUBLIC_VAPID_PUBLIC_KEY: string;
    /** web-push key相关 */
    readonly VAPID_PRIVATE_KEY: string;

    /**
     * 运行环境
     * - dev: 本地开发环境, 在.env.local中配置
     * - test: 测试环境，配置在vercel中
     * - prod: 生产环境，配置在vercel中
     */
    readonly NEXT_PUBLIC_RUN_ENV: "dev" | "test" | "prod";
  }
}
