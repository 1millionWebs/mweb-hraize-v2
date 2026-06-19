import type { JobVacancy } from "@/src/types";

let vacancies: JobVacancy[] = [
  {
    id: "j1",
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
    id: "j2",
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
    id: "j3",
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
    id: "j4",
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

let nextId = 5;

let adminHash = "";
let adminSalt = "";

export function getVacancies(): JobVacancy[] {
  return [...vacancies];
}

export function getVacancyById(id: string): JobVacancy | undefined {
  return vacancies.find((v) => v.id === id);
}

export function createVacancy(data: Omit<JobVacancy, "id">): JobVacancy {
  const vacancy: JobVacancy = {
    ...data,
    id: `j${nextId++}`,
    requirements: data.requirements || [],
  };
  vacancies.push(vacancy);
  return vacancy;
}

export function updateVacancy(id: string, data: Partial<JobVacancy>): JobVacancy | null {
  const idx = vacancies.findIndex((v) => v.id === id);
  if (idx === -1) return null;
  vacancies[idx] = { ...vacancies[idx], ...data, id };
  return vacancies[idx];
}

export function deleteVacancy(id: string): boolean {
  const idx = vacancies.findIndex((v) => v.id === id);
  if (idx === -1) return false;
  vacancies.splice(idx, 1);
  return true;
}

export function setAdminCredentials(hash: string, salt: string): void {
  adminHash = hash;
  adminSalt = salt;
}

export function getAdminCredentials(): { passwordHash: string; salt: string } {
  return { passwordHash: adminHash, salt: adminSalt };
}

export function isAdminConfigured(): boolean {
  return adminHash !== "" && adminSalt !== "";
}
