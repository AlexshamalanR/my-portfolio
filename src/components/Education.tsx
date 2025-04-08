import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaSchool, FaCode } from 'react-icons/fa'
import { IoSchool } from 'react-icons/io5'

const educationData = [
  {
    title: "Full Stack Java Development",
    institution: "J-Spider",
    location: "Bengaluru",
    period: "September 2022 - March 2023",
    details: "Comprehensive training in Full Stack Java Development",
    icon: FaCode,
    color: "#DC2626"
  },
  {
    title: "Bachelor of Engineering (B.E)",
    institution: "PES Institute of Technology and Management",
    location: "Shivamogga, Karnataka",
    period: "August 2018 - July 2022",
    score: "8.1 CGPA",
    details: "VTU University",
    icon: FaGraduationCap,
    color: "#4F46E5"
  },
  {
    title: "Pre-University Education (PUC)",
    institution: "D V S Composite P U College",
    location: "Shivamogga",
    period: "June 2017 - April 2018",
    score: "61%",
    icon: IoSchool,
    color: "#2563EB"
  },
  {
    title: "SSLC",
    institution: "B G S Adichunchanagiri High School",
    location: "Shivamogga",
    period: "June 2015 - April 2016",
    score: "81%",
    icon: FaSchool,
    color: "#059669"
  }
]

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-textLight mb-4">Education</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Education Image - Left Side */}
          <motion.div 
            className="md:col-span-5 sticky top-24"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <img
                src="/my-portfolio/images/edu.jpg"
                alt="Education"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Education Cards - Right Side */}
          <div className="md:col-span-7 space-y-4">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-secondary/30 rounded-lg p-5 backdrop-blur-sm border border-accent/10 
                  transition-all duration-300 hover:bg-secondary/40 hover:border-accent/20 
                  hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 w-full"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${edu.color}20` }}
                    >
                      <edu.icon 
                        className="text-xl"
                        style={{ color: edu.color }}
                      />
                    </div>
                    <div className="flex-1 flex flex-wrap items-center gap-x-6">
                      <div className="flex-1 min-w-[200px]">
                        <h3 className="text-sm font-bold text-textLight mb-1">
                          {edu.title}
                        </h3>
                        <h4 className="text-accent text-xs mb-1">{edu.institution}</h4>
                      </div>
                      <div className="flex flex-col text-right gap-1">
                        <p className="text-text/80 text-xs">{edu.location}</p>
                        <p className="text-text/80 text-xs">{edu.period}</p>
                      </div>
                      {edu.score && (
                        <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-xs text-accent">
                          Score: {edu.score}
                        </div>
                      )}
                    </div>
                  </div>
                  {edu.details && (
                    <p className="text-text/80 text-xs mt-3 pl-14">{edu.details}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
