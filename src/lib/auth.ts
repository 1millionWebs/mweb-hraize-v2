import crypto from "crypto";

const SECRET = process.env.ADMIN_SECRET || "hraize-admin-secret-key-2026";
const TOKEN_EXPIRY = 24 * 60 * 60 * 1000;

function parsePassword(stored: string): { hash: string; salt: string } {
  const sep = stored.indexOf(":");
  if (sep === -1) return { hash: stored, salt: "" };
  return { salt: stored.slice(0, sep), hash: stored.slice(sep + 1) };
}

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const { hash: storedHash, salt } = parsePassword(stored);
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return hash === storedHash;
}

export function generateToken(): string {
  const payload = { role: "admin", exp: Date.now() + TOKEN_EXPIRY };
  const data = Buffer.from(JSON.stringify(payload)).toString("base64");
  const sig = crypto.createHmac("sha256", SECRET).update(data).digest("hex");
  return `${data}.${sig}`;
}

export function verifyToken(token: string): boolean {
  try {
    const [data, sig] = token.split(".");
    if (!data || !sig) return false;
    const expectedSig = crypto.createHmac("sha256", SECRET).update(data).digest("hex");
    if (sig !== expectedSig) return false;
    const payload = JSON.parse(Buffer.from(data, "base64").toString("utf8"));
    if (payload.exp < Date.now()) return false;
    return payload.role === "admin";
  } catch {
    return false;
  }
}

export function generateResetToken(username: string): string {
  const payload = { username, purpose: "reset-password", exp: Date.now() + 15 * 60 * 1000 }; // 15 mins
  const data = Buffer.from(JSON.stringify(payload)).toString("base64");
  const sig = crypto.createHmac("sha256", SECRET).update(data).digest("hex");
  return `${data}.${sig}`;
}

export function verifyResetToken(token: string): string | null {
  try {
    const [data, sig] = token.split(".");
    if (!data || !sig) return null;
    const expectedSig = crypto.createHmac("sha256", SECRET).update(data).digest("hex");
    if (sig !== expectedSig) return null;
    const payload = JSON.parse(Buffer.from(data, "base64").toString("utf8"));
    if (payload.exp < Date.now()) return null;
    if (payload.purpose !== "reset-password") return null;
    return payload.username;
  } catch {
    return null;
  }
}
