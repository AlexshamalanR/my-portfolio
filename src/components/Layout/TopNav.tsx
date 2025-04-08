import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX, HiDownload } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

interface TopNavProps {
  onMenuClick: () => void
}

const TopNav = ({ onMenuClick }: TopNavProps) => {
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300
        ${scrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg shadow-black/5' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - Left on desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:block h-12 w-auto"
          >
            <img
              src="/images/any-logo.png"
              alt="Logo"
              className="h-full w-auto"
            />
          </motion.div>

          {/* Mobile Layout */}
          <div className="flex items-center justify-between w-full md:hidden">
            {/* Mobile Menu Button - Left side */}
            <button
              onClick={onMenuClick}
              className="p-2 text-text hover:text-accent"
            >
              <HiMenu className="text-2xl" />
            </button>

            {/* Mobile Logo - Right side */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-10 w-auto"
            >
              <img
                src="/images/any-logo.png"
                alt="Logo"
                className="h-full w-auto"
              />
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { name: 'HOME', href: '#home' },
              { name: 'ABOUT', href: '#about' },
              { name: 'EXPERIENCE', href: '#experience' },
              { name: 'SKILLS', href: '#skills' },
              { name: 'PROJECTS', href: '#projects' },
              { name: 'CONTACT', href: '#contact' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-text/80 hover:text-accent
                  transition-colors relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500
                  transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white
                font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/25
                flex items-center gap-2"
            >
              <HiDownload className="text-lg" />
              <span>Resume</span>
            </motion.a>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default TopNav 