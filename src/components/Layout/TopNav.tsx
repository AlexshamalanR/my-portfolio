import React from 'react'
import { motion } from 'framer-motion'
import { HiMenu } from 'react-icons/hi'

interface TopNavProps {
  onMenuClick: () => void
}

const TopNav = ({ onMenuClick }: TopNavProps) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-sm z-30
        border-b border-accent/10"
    >
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="p-2 text-text hover:text-accent md:hidden"
        >
          <HiMenu className="text-2xl" />
        </button>

        {/* Logo or Title */}
        <div className="text-xl font-bold text-textLight">
          Alex Shamalan
        </div>

        {/* Navigation Links - Hidden on Mobile */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-text hover:text-accent transition-colors">Home</a>
          <a href="#about" className="text-text hover:text-accent transition-colors">About</a>
          <a href="#experience" className="text-text hover:text-accent transition-colors">Experience</a>
          <a href="#skills" className="text-text hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="text-text hover:text-accent transition-colors">Projects</a>
          <a href="#education" className="text-text hover:text-accent transition-colors">Education</a>
          <a href="#contact" className="text-text hover:text-accent transition-colors">Contact</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-accent text-background hover:bg-accent/90 transition-colors"
          >
            Resume
          </a>
        </nav>
      </div>
    </motion.header>
  )
}

export default TopNav 