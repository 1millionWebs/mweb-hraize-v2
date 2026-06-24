import type { JobVacancy } from "@/src/types";
import { getDB } from "@/src/lib/db";

const DEFAULT_VACANCIES: Omit<JobVacancy, "id">[] = [
  {
    title: "Senior Workforce Analytics Specialist",
    department: "Analytics & Business Intelligence",
    location: "Bangalore, India (Hybrid)",
    type: "Full-Time",
    experience: "5+ Years",
    salary: "₹18,00,000 - ₹24,00,000",
    description: "Own the creation of executive headcount, cost-prediction, and sentiment dashboards for global logistics clients.",
    requirements: [
      "Expertise in Power BI, Looker Studio, and SQL database querying",
      "Strong experience compiling and translating predictive attrition formulas",
      "Excellent communication skills with C-suite and regional HR directors",
    ],
  },
  {
    title: "HR Operations Lead (Consulting Frameworks)",
    department: "HR Systems & Consulting",
    location: "Chennai, India (On-site)",
    type: "Full-Time",
    experience: "7+ Years",
    salary: "₹15,00,000 - ₹20,00,000",
    description: "Spearhead policy audits, handbook creation, and statutory compliance framework setups for early-stage engineering and manufacturing SMEs.",
    requirements: [
      "Proven background writing employee handbooks and establishing SOP models",
      "Deep knowledge of regional labor laws and statutory compliance standards",
      "Prior experience in client-facing advisory or consulting environments",
    ],
  },
  {
    title: "Senior Technical Recruiter (Contract & Temp)",
    department: "Recruitment Services",
    location: "Remote (India)",
    type: "Contract",
    experience: "4+ years",
    salary: "Market Competitive hourly",
    description: "Manage end-to-end recruitment pipelines for our top-tier software and project management contractors.",
    requirements: [
      "In-depth tech screening capability for React, Node, and DevOps profiles",
      "Strong portfolio of vetted contract candidate channels",
      "Excellent negotiation and contract lifecycle onboarding experience",
    ],
  },
  {
    title: "Graduate HR Associate (Talent Acquisition Pipeline)",
    department: "Graduate Programs",
    location: "Mumbai, India (On-site)",
    type: "Internship",
    experience: "Fresher / Entry-level",
    salary: "₹4,00,000 - ₹6,00,000",
    description: "Help build and filter our Emerging Talent pipeline, managing candidate screening logs and coordination.",
    requirements: [
      "Recent UG / PG / MBA in Human Resources or related fields",
      "High energy level with exceptional verbal coordination skills",
      "Command of Microsoft Excel or Google Sheets for tracker logs",
    ],
  },
];

let initialized = false;

async function ensureTables(): Promise<void> {
  if (initialized) return;
  const db = getDB();

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

  const { results } = await db.prepare("SELECT COUNT(*) AS count FROM vacancies").all<{ count: number }>();
  if (results.length === 0 || results[0].count === 0) {
    const stmt = db.prepare(
      "INSERT OR IGNORE INTO vacancies (id, title, department, location, type, experience, salary, description, requirements) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );
    for (let i = 0; i < DEFAULT_VACANCIES.length; i++) {
      const v = DEFAULT_VACANCIES[i];
      await stmt.bind(
        `j${i + 1}`,
        v.title,
        v.department,
        v.location,
        v.type,
        v.experience,
        v.salary || "",
        v.description,
        JSON.stringify(v.requirements || []),
      ).run();
    }
  }

  initialized = true;
}

export async function getVacancies(): Promise<JobVacancy[]> {
  await ensureTables();
  const db = getDB();
  const { results } = await db.prepare(
    "SELECT id, title, department, location, type, experience, salary, description, requirements FROM vacancies ORDER BY id ASC"
  ).all<Omit<JobVacancy, "requirements"> & { requirements: string }>();
  return results.map((row) => ({
    ...row,
    requirements: JSON.parse(row.requirements || "[]"),
  }));
}

export async function getVacancyById(id: string): Promise<JobVacancy | undefined> {
  await ensureTables();
  const db = getDB();
  const row = await db.prepare(
    "SELECT id, title, department, location, type, experience, salary, description, requirements FROM vacancies WHERE id = ?"
  ).bind(id).first<Omit<JobVacancy, "requirements"> & { requirements: string }>();
  if (!row) return undefined;
  return {
    ...row,
    requirements: JSON.parse(row.requirements || "[]"),
  };
}

export async function createVacancy(data: Omit<JobVacancy, "id">): Promise<JobVacancy> {
  await ensureTables();
  const db = getDB();
  const maxRow = await db.prepare(
    "SELECT MAX(CAST(SUBSTR(id, 2) AS INTEGER)) AS id FROM vacancies"
  ).first<{ id: number | null }>();
  const nextNum = (maxRow?.id ?? 0) + 1;
  const id = `j${nextNum}`;
  await db.prepare(
    "INSERT INTO vacancies (id, title, department, location, type, experience, salary, description, requirements) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
  ).bind(
    id,
    data.title,
    data.department,
    data.location,
    data.type,
    data.experience,
    data.salary || "",
    data.description,
    JSON.stringify(data.requirements || []),
  ).run();
  return { ...data, id };
}

export async function updateVacancy(id: string, data: Partial<JobVacancy>): Promise<JobVacancy | null> {
  await ensureTables();
  const existing = await getVacancyById(id);
  if (!existing) return null;
  const merged = { ...existing, ...data, id };
  const db = getDB();
  await db.prepare(
    "UPDATE vacancies SET title = ?, department = ?, location = ?, type = ?, experience = ?, salary = ?, description = ?, requirements = ?, updated_at = datetime('now') WHERE id = ?"
  ).bind(
    merged.title,
    merged.department,
    merged.location,
    merged.type,
    merged.experience,
    merged.salary || "",
    merged.description,
    JSON.stringify(merged.requirements || []),
    id,
  ).run();
  return merged;
}

export async function deleteVacancy(id: string): Promise<boolean> {
  await ensureTables();
  const db = getDB();
  const { success } = await db.prepare("DELETE FROM vacancies WHERE id = ?").bind(id).run();
  return success;
}

export async function setAdminCredentials(username: string, password: string): Promise<void> {
  await ensureTables();
  const db = getDB();
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
  await ensureTables();
  const db = getDB();
  const row = await db.prepare(
    "SELECT username, password FROM admin_credentials LIMIT 1"
  ).first<{ username: string; password: string }>();
  if (!row) return null;
  return { username: row.username, password: row.password };
}

export async function isAdminConfigured(): Promise<boolean> {
  await ensureTables();
  const db = getDB();
  const row = await db.prepare("SELECT id FROM admin_credentials LIMIT 1").first<{ id: number }>();
  return !!row;
}
