import React from 'react'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Backend Developer",
      "Problem Solver",
      "Tech Enthusiast"
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-0 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-0 w-72 h-72 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Profile Image for Mobile */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:hidden mb-8 ml-4"
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto"> {/* Medium size for mobile */}
            {/* Outer Glow Container */}
            <div className="group relative w-full h-full rounded-full p-1">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                opacity-75 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl"></div>
              
              {/* Spinning Gradient */}
              <div className="absolute inset-[2px] rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-background p-[2px]">
                <img
                  src="/my-portfolio/images/hero.jpeg"
                  alt="Alex Shamalan"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500
                    group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
            >
              Hi, I'm Alex Shamalan R
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl mb-6 text-cyan-400"
            >
              <span>{text}</span>
              <Cursor cursorColor="#22d3ee" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about building robust backend systems and solving complex problems. 
              Specialized in Node.js, Python, and cloud technologies with a focus on scalable solutions.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center lg:justify-start space-x-4 mb-8"
            >
              {[
                { href: "mailto:alexshamalan936@gmail.com", icon: FaEnvelope, color: "from-pink-500 to-rose-500" },
                { href: "https://github.com/AlexshamalanR", icon: FaGithub, color: "from-purple-500 to-indigo-500" },
                { href: "https://www.linkedin.com/in/alex-shamalan-r-29205221a", icon: FaLinkedin, color: "from-cyan-500 to-blue-500" }
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} p-[2px] cursor-pointer`}
                >
                  <div className="flex items-center justify-center w-full h-full rounded-full bg-background/90 backdrop-blur-sm hover:bg-background/70 transition-all">
                    <social.icon className="text-xl group-hover:text-white" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium
                  hover:opacity-90 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Get in touch
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-white font-medium
                  hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-300 
                  border border-purple-500/20 backdrop-blur-sm flex items-center gap-2"
              >
                <HiDownload className="text-xl" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative hidden lg:block" // Hide on mobile, show on desktop
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Outer Glow Container */}
              <div className="group relative w-full h-full rounded-full p-1">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                  opacity-75 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl"></div>
                
                {/* Spinning Gradient */}
                <div className="absolute inset-[2px] rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>

                {/* Profile Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-background p-[2px]">
                  {/* Profile Image */}
                  <img
                    src="/my-portfolio/images/hero.jpeg"
                    alt="Alex Shamalan R"
                    className="w-full h-full object-cover rounded-full transition-transform duration-500
                      group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero