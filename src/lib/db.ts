export function getDB(): D1Database | null {
  const db = process.env.DB;
  if (!db) return null;
  return db as unknown as D1Database;
}
