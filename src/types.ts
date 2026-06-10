export interface Project {
  id: string;
  title: string;
  category: "ai-ml" | "web-dev" | "dsa-java";
  description: string;
  details: string[];
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // Percentage 0 - 100
  category: "Languages" | "AI & ML" | "Core & Systems" | "Tools & Devops";
  icon: string; // Lucide icon name
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string; // e.g., "June 2025 - Aug 2025"
  type: "Internship" | "Leadership" | "Ambassador" | "Community";
  details: string[];
  skillsApplied: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl: string;
  badgeUrl?: string;
  category: "AI/ML" | "Cloud/DevOps" | "Development";
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  rank?: string; // e.g., "Winner", "Top 5", "Finalist"
  date: string;
  description: string;
  tags: string[];
}

export interface Stats {
  gpa: string;
  projectsCount: number;
  certificationsCount: number;
  commitsCount: number;
}
