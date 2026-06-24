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

interface CloudflareEnv {
  DB: D1Database;
  ASSETS: Fetcher;
  ENVIRONMENT: string;
  MAILTRAP_SENDER_EMAIL: string;
  MAILTRAP_SENDER_NAME: string;
  HR_RECIPIENT_EMAIL: string;
}
