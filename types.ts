
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  aiUsage: string;
  link: string;
  image: string;
  videoUrl?: string;
  category: 'Full-stack' | 'AI' | 'Education' | 'Tooling';
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface Article {
  title: string;
  platform: string;
  link: string;
  date: string;
  excerpt: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
