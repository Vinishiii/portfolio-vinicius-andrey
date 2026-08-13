export type SkillCategory =
  | "programming"
  | "frontend"
  | "backend"
  | "data"
  | "database"
  | "tools"
  | "methodologies";

export const skillCategories: SkillCategory[] = [
  "programming",
  "frontend",
  "backend",
  "data",
  "database",
  "tools",
  "methodologies",
];

export const skills: Record<SkillCategory, string[]> = {
  programming: ["Python", "JavaScript"],
  frontend: ["HTML", "CSS", "React", "Angular"],
  backend: ["Node.js"],
  data: [
    "Pandas",
    "NumPy",
    "Streamlit",
    "KPI Analysis",
    "Dashboards",
    "Data Management",
    "Automation with Python",
  ],
  database: ["MySQL", "MongoDB"],
  tools: ["Git", "GitHub", "Advanced Excel"],
  methodologies: ["Scrum", "Kanban", "Process Automation", "Analytical Thinking"],
};
