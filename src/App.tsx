import React from 'react'
import Layout from './components/Layout/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <Layout>
      <div className="pt-16"> {/* Add padding-top to account for fixed TopNav */}
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </Layout>
  )
}

export default App
