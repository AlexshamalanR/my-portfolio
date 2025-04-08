import React from 'react'
import { motion } from 'framer-motion'
import {
  SiNodedotjs, SiExpress, SiPython, SiFlask,
  SiMongodb, SiMysql, SiPostgresql,
  SiGit, SiDocker, SiAmazon, SiElasticsearch,
  SiKibana, SiVisualstudiocode, SiGithub, SiLinux,
  SiUbuntu, SiGnubash
} from 'react-icons/si'
import { FaServer, FaDatabase, FaTools, FaChartLine, FaCode } from 'react-icons/fa'

interface Skill {
  name: string
  icon: React.ElementType
  color: string
}

const skillCategories = [
  {
    title: "🚀 Core Skills (Backend Development)",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
      { name: "Bash/Shell", icon: SiGnubash, color: "#4EAA25" },
      { name: "CRON Jobs", icon: FaCode, color: "#FF6B6B" }
    ]
  },
  {
    title: "🗃️ Databases",
    icon: FaDatabase,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
    ]
  },
  {
    title: "📦 Tools & Platforms",
    icon: FaTools,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS S3", icon: SiAmazon, color: "#FF9900" },
      { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },
      { name: "Kibana", icon: SiKibana, color: "#005571" }
    ]
  },
  {
    title: "🛠️ Development Utilities",
    icon: FaCode,
    skills: [
      { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" }
    ]
  }
]

const SkillBadge = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-accent/10 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 group"
      style={{
        boxShadow: `0 0 20px ${skill.color}15`
      }}
    >
      <skill.icon 
        className="text-lg transition-colors duration-300"
        style={{ color: skill.color }}
      />
      <span className="text-sm font-medium text-text group-hover:text-textLight transition-colors duration-300">
        {skill.name}
      </span>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-textLight mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-textLight/80 mb-6 flex items-center gap-3">
                <category.icon className="text-accent" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
