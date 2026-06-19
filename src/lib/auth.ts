import crypto from "crypto";

const SECRET = process.env.ADMIN_SECRET || "hraize-admin-secret-key-2026";
const TOKEN_EXPIRY = 24 * 60 * 60 * 1000;

export interface AdminCredentials {
  passwordHash: string;
  salt: string;
}

export function hashPassword(password: string, salt?: string): { hash: string; salt: string } {
  const s = salt || crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, s, 1000, 64, "sha512").toString("hex");
  return { hash, salt: s };
}

export function verifyPassword(password: string, storedHash: string, salt: string): boolean {
  const { hash } = hashPassword(password, salt);
  return hash === storedHash;
}

export function generateToken(): string {
  const payload = {
    role: "admin",
    exp: Date.now() + TOKEN_EXPIRY,
  };
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
