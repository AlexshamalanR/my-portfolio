import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      className="py-6 bg-secondary/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-text">
          Built with <span className="text-accent">❤️</span> by{' '}
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Alex Shamalan
          </a>
        </p>
        <p className="text-text text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
