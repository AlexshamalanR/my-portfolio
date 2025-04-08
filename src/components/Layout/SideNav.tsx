import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from 'react-icons/fa'
import { HiHome, HiUser, HiBriefcase, HiCode, HiCollection, HiAcademicCap, HiMail } from 'react-icons/hi'

interface SideNavProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { name: 'Home', href: '#home', icon: HiHome },
  { name: 'About', href: '#about', icon: HiUser },
  { name: 'Experience', href: '#experience', icon: HiBriefcase },
  { name: 'Skills', href: '#skills', icon: HiCode },
  { name: 'Projects', href: '#projects', icon: HiCollection },
  { name: 'Education', href: '#education', icon: HiAcademicCap },
  { name: 'Contact', href: '#contact', icon: HiMail },
]

const SideNav = ({ isOpen, onClose }: SideNavProps) => {
  return (
    <aside className="w-64 h-full bg-secondary/30 backdrop-blur-sm border-r border-accent/10">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-text hover:text-accent md:hidden"
      >
        <FaTimes className="text-xl" />
      </button>

      <div className="flex flex-col h-full p-6">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-4">
            <img
              src="/my-portfolio/images/any-logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-2 text-text hover:text-accent hover:bg-accent/5 
                rounded-lg transition-colors duration-200"
            >
              <item.icon className="text-xl" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-4 py-2 rounded-lg bg-accent text-background hover:bg-accent/90 
            transition-colors text-center"
        >
          Download Resume
        </a>

        {/* Social Links */}
        <div className="mt-auto pt-6 border-t border-accent/10">
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:alexshamalan936@gmail.com"
              className="text-text hover:text-accent transition-colors"
              title="Email"
            >
              <FaEnvelope className="text-xl" />
            </a>
            <a
              href="https://github.com/alexshamalan936"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors"
              title="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideNav 