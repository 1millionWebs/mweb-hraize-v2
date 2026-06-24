-- D1 Database Schema for Hraize HR Analytics
-- Run: wrangler d1 execute hraize-db --file=db/schema.sql
-- Local: wrangler d1 execute hraize-db --local --file=db/schema.sql

CREATE TABLE IF NOT EXISTS admin_credentials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT OR IGNORE INTO admin_credentials (username, password) VALUES ('Admin', 'cf53c5348f1a4beb4a92f2825628578c:bd51582b6361c2808735dd24e02d7956713fa71b269db0e342f94914c837342e444d86742426e138cf106f728aa4c0a8989599c7756c7b4472e5869f4a77f6c2');

CREATE TABLE IF NOT EXISTS vacancies (
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
);

INSERT OR IGNORE INTO vacancies (id, title, department, location, type, experience, salary, description, requirements) VALUES 
