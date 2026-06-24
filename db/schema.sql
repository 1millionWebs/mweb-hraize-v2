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
  ('j1', 'Senior Workforce Analytics Specialist', 'Analytics & Business Intelligence', 'Bangalore, India (Hybrid)', 'Full-Time', '5+ Years', '₹18,00,000 - ₹24,00,000', 'Own the creation of executive headcount, cost-prediction, and sentiment dashboards for global logistics clients.', '["Expertise in Power BI, Looker Studio, and SQL database querying","Strong experience compiling and translating predictive attrition formulas","Excellent communication skills with C-suite and regional HR directors"]'),
  ('j2', 'HR Operations Lead (Consulting Frameworks)', 'HR Systems & Consulting', 'Chennai, India (On-site)', 'Full-Time', '7+ Years', '₹15,00,000 - ₹20,00,000', 'Spearhead policy audits, handbook creation, and statutory compliance framework setups for early-stage engineering and manufacturing SMEs.', '["Proven background writing employee handbooks and establishing SOP models","Deep knowledge of regional labor laws and statutory compliance standards","Prior experience in client-facing advisory or consulting environments"]'),
  ('j3', 'Senior Technical Recruiter (Contract & Temp)', 'Recruitment Services', 'Remote (India)', 'Contract', '4+ years', 'Market Competitive hourly', 'Manage end-to-end recruitment pipelines for our top-tier software and project management contractors.', '["In-depth tech screening capability for React, Node, and DevOps profiles","Strong portfolio of vetted contract candidate channels","Excellent negotiation and contract lifecycle onboarding experience"]'),
  ('j4', 'Graduate HR Associate (Talent Acquisition Pipeline)', 'Graduate Programs', 'Mumbai, India (On-site)', 'Internship', 'Fresher / Entry-level', '₹4,00,000 - ₹6,00,000', 'Help build and filter our Emerging Talent pipeline, managing candidate screening logs and coordination.', '["Recent UG / PG / MBA in Human Resources or related fields","High energy level with exceptional verbal coordination skills","Command of Microsoft Excel or Google Sheets for tracker logs"]');
