import type { JobVacancy } from "@/src/types";
import { getDB } from "@/src/lib/db";

// ---------------------------------------------------------------------------
// In-memory fallback (used when D1 binding is not available – e.g. next dev)
// ---------------------------------------------------------------------------
let memVacancies: JobVacancy[] = [];
let memNextId = 1;
let memAdmin: { username: string; password: string } | null = {
  username: "Admin",
  password: "cf53c5348f1a4beb4a92f2825628578c:bd51582b6361c2808735dd24e02d7956713fa71b269db0e342f94914c837342e444d86742426e138cf106f728aa4c0a8989599c7756c7b4472e5869f4a77f6c2",
};

// ---------------------------------------------------------------------------
// D1 implementation
// ---------------------------------------------------------------------------
let d1Initialized = false;

async function ensureTables(): Promise<void> {
  if (d1Initialized) return;
  const db = getDB();
  if (!db) return;

  await db.prepare(
    `CREATE TABLE IF NOT EXISTS admin_credentials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`
  ).run();

  await db.prepare(
    `CREATE TABLE IF NOT EXISTS vacancies (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      department TEXT NOT NULL,
      location TEXT NOT NULL,
      type TEXT NOT NULL,
      experience TEXT NOT NULL,
      salary TEXT NOT NULL DEFAULT '',
      description TEXT NOT NULL,
      requirements TEXT NOT NULL DEFAULT '[]',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )`
  ).run();

  d1Initialized = true;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------
export async function getVacancies(): Promise<JobVacancy[]> {
  const db = getDB();
  if (!db) return [...memVacancies];

  await ensureTables();
  const { results } = await db.prepare(
    "SELECT id, title, department, location, type, experience, salary, description, requirements FROM vacancies ORDER BY id ASC"
  ).all<Omit<JobVacancy, "requirements"> & { requirements: string }>();
  return results.map((row) => ({
    ...row,
    requirements: JSON.parse(row.requirements || "[]"),
  }));
}

export async function getVacancyById(id: string): Promise<JobVacancy | undefined> {
  const db = getDB();
  if (!db) return memVacancies.find((v) => v.id === id);

  await ensureTables();
  const row = await db.prepare(
    "SELECT id, title, department, location, type, experience, salary, description, requirements FROM vacancies WHERE id = ?"
  ).bind(id).first<Omit<JobVacancy, "requirements"> & { requirements: string }>();
  if (!row) return undefined;
  return { ...row, requirements: JSON.parse(row.requirements || "[]") };
}

export async function createVacancy(data: Omit<JobVacancy, "id">): Promise<JobVacancy> {
  const db = getDB();
  if (!db) {
    const id = `j${memNextId++}`;
    const vacancy: JobVacancy = { ...data, id };
    memVacancies.push(vacancy);
    return vacancy;
  }

  await ensureTables();
  const maxRow = await db.prepare(
    "SELECT MAX(CAST(SUBSTR(id, 2) AS INTEGER)) AS id FROM vacancies"
  ).first<{ id: number | null }>();
  const nextNum = (maxRow?.id ?? 0) + 1;
  const id = `j${nextNum}`;
  await db.prepare(
    "INSERT INTO vacancies (id, title, department, location, type, experience, salary, description, requirements) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
  ).bind(
    id, data.title, data.department, data.location, data.type,
    data.experience, data.salary || "", data.description, JSON.stringify(data.requirements || []),
  ).run();
  return { ...data, id };
}

export async function updateVacancy(id: string, data: Partial<JobVacancy>): Promise<JobVacancy | null> {
  const db = getDB();
  if (!db) {
    const idx = memVacancies.findIndex((v) => v.id === id);
    if (idx === -1) return null;
    memVacancies[idx] = { ...memVacancies[idx], ...data, id };
    return memVacancies[idx];
  }

  await ensureTables();
  const existing = await getVacancyById(id);
  if (!existing) return null;
  const merged = { ...existing, ...data, id };
  await db.prepare(
    "UPDATE vacancies SET title = ?, department = ?, location = ?, type = ?, experience = ?, salary = ?, description = ?, requirements = ?, updated_at = datetime('now') WHERE id = ?"
  ).bind(
    merged.title, merged.department, merged.location, merged.type,
    merged.experience, merged.salary || "", merged.description,
    JSON.stringify(merged.requirements || []), id,
  ).run();
  return merged;
}

export async function deleteVacancy(id: string): Promise<boolean> {
  const db = getDB();
  if (!db) {
    const idx = memVacancies.findIndex((v) => v.id === id);
    if (idx === -1) return false;
    memVacancies.splice(idx, 1);
    return true;
  }

  await ensureTables();
  const { success } = await db.prepare("DELETE FROM vacancies WHERE id = ?").bind(id).run();
  return success;
}

export async function setAdminCredentials(username: string, password: string): Promise<void> {
  const db = getDB();
  if (!db) {
    memAdmin = { username, password };
    return;
  }

  await ensureTables();
  const existing = await db.prepare("SELECT id FROM admin_credentials LIMIT 1").first<{ id: number }>();
  if (existing) {
    await db.prepare(
      "UPDATE admin_credentials SET username = ?, password = ?, updated_at = datetime('now') WHERE id = ?"
    ).bind(username, password, existing.id).run();
  } else {
    await db.prepare(
      "INSERT INTO admin_credentials (username, password) VALUES (?, ?)"
    ).bind(username, password).run();
  }
}

export async function getAdminCredentials(): Promise<{ username: string; password: string } | null> {
  const db = getDB();
  if (!db) return memAdmin;

  await ensureTables();
  const row = await db.prepare(
    "SELECT username, password FROM admin_credentials LIMIT 1"
  ).first<{ username: string; password: string }>();
  if (!row) return null;
  return { username: row.username, password: row.password };
}

export async function isAdminConfigured(): Promise<boolean> {
  const db = getDB();
  if (!db) return memAdmin !== null;

  await ensureTables();
  const row = await db.prepare("SELECT id FROM admin_credentials LIMIT 1").first<{ id: number }>();
  return !!row;
}
