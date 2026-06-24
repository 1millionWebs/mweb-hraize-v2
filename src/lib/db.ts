import { getCloudflareContext } from "@opennextjs/cloudflare";

export function getDB(): D1Database | null {
  try {
    const { env } = getCloudflareContext();
    return env.DB ?? null;
  } catch {
    // Not running in Cloudflare worker environment (e.g. next dev)
    return null;
  }
}
