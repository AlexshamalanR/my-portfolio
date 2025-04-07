export interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Experience {
  company: string
  title: string
  period: string
  points: string[]
}

export interface Education {
  school: string
  degree: string
  period: string
  description: string
  gpa: string
} 