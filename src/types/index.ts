export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  metrics: Metric[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issueDate: string;
  expiryDate?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface StatCard {
  value: string;
  label: string;
}
