export interface Founder {
  name: string;
  role: string;
  experience: string;
  quote?: string;
  image?: string;
  expertise: string[];
  valueStatement: string;
}

export interface JobVacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "Contract" | "Internship";
  experience: string;
  salary?: string;
  description: string;
  requirements: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}
