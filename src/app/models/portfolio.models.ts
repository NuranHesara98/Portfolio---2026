export interface Skill {
  name: string;
  category: 'language' | 'database' | 'tool' | 'devops' | 'soft-skill' | 'other';
  icon?: string;
  proficiency?: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  type: 'education' | 'internship' | 'work';
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  achievements?: string[];
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  image: string;
  description: string;
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  publishDate: string;
  tags?: string[];
}

export interface ContactInfo {
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  phone?: string;
  location?: string;
}
