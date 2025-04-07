import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TopNav from './TopNav'
import SideNav from './SideNav'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <TopNav onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Only visible on mobile */}
      <div className={`fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SideNav isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content - No padding for sidebar on desktop */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}

export default Layout 