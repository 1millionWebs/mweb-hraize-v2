// D1 type stubs (for projects without @cloudflare/workers-types)
interface D1Result<T = unknown> {
  results: T[];
  success: boolean;
  error?: string;
  meta?: Record<string, unknown>;
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  run(): Promise<D1Result>;
  all<T = unknown>(): Promise<D1Result<T>>;
  first<T = unknown>(): Promise<T | null>;
}

interface D1Database {
  prepare(sql: string): D1PreparedStatement;
}

// Extends the CloudflareEnv interface from @opennextjs/cloudflare
// to include our custom D1 and env var bindings from wrangler.toml
interface CloudflareEnv {
  DB: D1Database;
  ASSETS: Fetcher;
  ENVIRONMENT: string;
  MAILTRAP_API_TOKEN: string;
  MAILTRAP_SENDER_EMAIL: string;
  MAILTRAP_SENDER_NAME: string;
  HR_RECIPIENT_EMAIL: string;
}
