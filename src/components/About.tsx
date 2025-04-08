import React from 'react'
import { motion } from 'framer-motion'

const profileImage = '/my-portfolio/images/profile.jpeg'

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-textLight mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Profile Section - Left Side */}
          <motion.div 
            className="md:col-span-3 md:col-start-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-24">
              <motion.div 
                className="relative w-72 h-72 mx-auto md:mx-2 group mt-9"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-accent to-accent/50 opacity-75 group-hover:opacity-100 blur-sm transition-opacity duration-300"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.75 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
                <motion.img
                  src={profileImage}
                  alt="Profile"
                  className="relative w-full h-full rounded-full object-cover border-4 border-accent/20 shadow-xl grayscale hover:grayscale-0 transition-all duration-300"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section - Wider */}
          <motion.div 
            className="md:col-span-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-secondary/30 rounded-xl p-8 backdrop-blur-sm border border-accent/10 min-h-[370px] transition-all duration-300 hover:bg-secondary/40 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4 text-text">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group cursor-default"
                >
                  <span className="transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                    I'm a passionate Backend Developer with hands-on experience in building scalable, 
                    reliable, and efficient server-side applications. My journey into software development began over two years ago, 
                    and since then, I've been focused on creating impactful backend systems that power real-world products.
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group cursor-default"
                >
                  <span className="transition-all duration-300 group-hover:text-purple-400 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                    I specialize in API development, data processing automation, and cloud integration, with a strong command of technologies
                    like Node.js, Python, MongoDB, and Docker. I blend technical precision with a 
                    problem-solving mindset to deliver clean, maintainable, and high-performing backend solutions.
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group cursor-default"
                >
                  <span className="transition-all duration-300 group-hover:text-pink-400 group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.3)]">
                    When I'm not coding, you'll find me refining my skills, exploring DevOps practices, 
                    or diving into tech communities to stay inspired and updated.
                  </span>
                </motion.p>

                <motion.div 
                  className="grid grid-cols-2 gap-4 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="bg-secondary/50 p-3 rounded-lg transition-all duration-300 hover:bg-secondary/60">
                    <h4 className="text-lg font-semibold text-textLight mb-1">2+</h4>
                    <p className="text-text">Years of Experience</p>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg transition-all duration-300 hover:bg-secondary/60">
                    <h4 className="text-lg font-semibold text-textLight mb-1">5+</h4>
                    <p className="text-text">Projects Completed</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
