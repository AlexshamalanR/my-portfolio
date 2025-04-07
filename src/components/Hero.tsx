import React from 'react'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Backend Developer', 'Problem Solver', 'Tech Enthusiast'],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-sm uppercase tracking-wider text-accent mb-4">
              Welcome to my portfolio
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-textLight mb-4">
              Hi, I'm Alex Shamalan R
            </h2>
            <h3 className="text-2xl md:text-3xl text-text mb-6">
              I'm a <span className="text-accent">{text}</span>
              <Cursor cursorColor="#64ffda" />
            </h3>
            <p className="text-text max-w-xl mb-8">
              I specialize in building reliable and scalable backend systems. 
              With a passion for clean code and efficient solutions, I help businesses 
              transform their ideas into robust applications.
            </p>
            <motion.div className="flex gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-accent text-primary rounded-full hover:bg-accent/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 border border-accent text-accent rounded-full hover:bg-accent/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View my work
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
              <img 
                src="/my-portfolio/public/images/hero.jpeg"
                alt="Alex Shamalan R"
                className="w-full h-full object-cover filter grayscale hover:grayscale-1 transition-all duration-500"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-accent/20 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
