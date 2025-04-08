import React from 'react'
import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'
import { MdHourglassBottom } from 'react-icons/md'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
  isLeft: boolean
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "Kenscio Digital Marketing",
    period: "April 2023 - June 2023",
    description: [
      "Assisted in backend development tasks",
      "Learned and implemented API integrations",
      "Worked on database operations",
      "Gained hands-on experience with industry tools"
    ],
    technologies: ["JavaScript", "Node.js", "MongoDB", "Git"],
    isLeft: false
  },
  {
    title: "Software Engineer",
    company: "Kenscio Digital Marketing",
    period: "July 2023 - Present",
    description: [
      "Building and maintaining backend services",
      "Developing RESTful APIs and integrating webhooks",
      "Working with databases and automated data processing",
      "Collaborating with cross-functional teams"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Python", "AWS"],
    isLeft: true
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-textLight mb-4">Experience</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto pb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20 hidden md:block"></div>

          {/* Experience Items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: experience.isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-24"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -mt-6 z-10 hidden md:block">
                <div className="w-12 h-12 rounded-full bg-secondary border-4 border-accent flex items-center justify-center">
                  <FaCode className="text-accent text-xl" />
                </div>
              </div>

              {/* Mobile View */}
              <div className="md:hidden space-y-6">
                <div className="bg-secondary/30 rounded-xl p-6 backdrop-blur-sm border border-accent/10">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-textLight mb-2">{experience.title}</h3>
                    <h4 className="text-accent mb-2">{experience.company}</h4>
                    <p className="text-text/80">{experience.period}</p>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-text mb-4">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent/10 rounded-full text-sm text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop View */}
              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side */}
                <div>
                  {experience.isLeft ? (
                    <div className="group bg-secondary/30 rounded-xl p-6 backdrop-blur-sm border border-accent/10 
                      transition-all duration-300 hover:bg-secondary/40 hover:border-accent/20 
                      hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
                    >
                      <ul className="list-disc list-inside space-y-2 text-text mb-4">
                        {experience.description.map((item, i) => (
                          <li key={i} className="group-hover:text-textLight transition-colors duration-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-accent/10 rounded-full text-sm text-accent 
                            transition-all duration-300 hover:bg-accent hover:text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-end pr-8">
                      <h3 className="text-xl font-bold text-textLight mb-2">{experience.title}</h3>
                      <h4 className="text-accent mb-2">{experience.company}</h4>
                      <p className="text-text/80">{experience.period}</p>
                    </div>
                  )}
                </div>

                {/* Right Side */}
                <div>
                  {experience.isLeft ? (
                    <div className="flex flex-col items-start pl-8">
                      <h3 className="text-xl font-bold text-textLight mb-2">{experience.title}</h3>
                      <h4 className="text-accent mb-2">{experience.company}</h4>
                      <p className="text-text/80">{experience.period}</p>
                    </div>
                  ) : (
                    <div className="group bg-secondary/30 rounded-xl p-6 backdrop-blur-sm border border-accent/10 
                      transition-all duration-300 hover:bg-secondary/40 hover:border-accent/20 
                      hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
                    >
                      <ul className="list-disc list-inside space-y-2 text-text mb-4">
                        {experience.description.map((item, i) => (
                          <li key={i} className="group-hover:text-textLight transition-colors duration-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-accent/10 rounded-full text-sm text-accent 
                            transition-all duration-300 hover:bg-accent hover:text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom Hourglass Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full hidden md:block"
          >
            <div className="w-12 h-12 rounded-full bg-secondary border-4 border-accent flex items-center justify-center -ml-6">
              <MdHourglassBottom className="text-accent text-xl animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience