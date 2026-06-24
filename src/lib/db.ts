export function getDB(): D1Database {
  const db = process.env.DB;
  if (!db) {
    throw new Error(
      "D1 database binding 'DB' is not available. Run 'npm run preview' or 'npm run deploy' instead of 'next dev'."
    );
  }
  return db as unknown as D1Database;
}
