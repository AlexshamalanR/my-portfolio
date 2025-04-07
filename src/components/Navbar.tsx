import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiDownload, HiMenu } from 'react-icons/hi'
import MobileMenu from './MobileMenu'

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#"
              className="text-2xl font-bold text-accent"
              whileHover={{ scale: 1.05 }}
            >
              AS
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-text hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                className="px-4 py-2 border border-accent text-accent hover:bg-accent/10 rounded flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                download
              >
                Resume <HiDownload />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-text hover:text-accent"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <HiMenu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  )
}

export default Navbar 