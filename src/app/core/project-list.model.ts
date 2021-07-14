export interface ProjectList {
  items: Project[];
}

export interface Project {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  score: number;
  owner: Owner;
}

export interface Owner {
  avatar_url: string;
}
