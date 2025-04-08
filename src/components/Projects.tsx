import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SiNodedotjs, SiReact, SiPython, SiAmazonaws, SiRedis, SiMysql, SiElasticsearch, SiKibana, SiLogstash, SiWhatsapp } from 'react-icons/si'

const projectsData = [
  {
    title: "Webhook Nest",
    description: "A modern webhook management system that enables users to create, monitor, and manage webhooks through an intuitive user interface. Features include real-time monitoring, retry mechanisms, and detailed logging.",
    image: "/my-portfolio/images/webhook-nest.png", // Add your project image
    techStack: ["Node.js", "React", "MongoDB"],
    icons: [
      { icon: SiNodedotjs, color: "#68A063" },
      { icon: SiReact, color: "#61DAFB" },
      { icon: SiMysql, color: "#4479A1" },
    ],
    github: "https://github.com/AlexshamalanR/webhook-nest",
    demo: "https://webhook-nest.demo.com", // If available
    featured: true
  },
  {
    title: "Email Validator",
    description: "Advanced email validation tool that performs real-time verification using multiple validation layers. Features include syntax checking, disposable email detection, domain verification, and SMTP-level validation.",
    image: "/my-portfolio/images/email-val1.png", // Add your project image
    techStack: ["Python", "AWS S3", "Redis", "MySQL", "SFTP"],
    icons: [
      { icon: SiPython, color: "#3776AB" },
      { icon: SiAmazonaws, color: "#FF9900" },
      { icon: SiRedis, color: "#DC382D" },
      { icon: SiMysql, color: "#4479A1" },
    ],
    // github: "https://github.com/yourusername/email-validator",
    featured: true
  },
  {
    title: "ELK Integration Platform",
    description: "Comprehensive ELK (Elasticsearch, Logstash, Kibana) integration for email service platforms like Listmonk and Mapengage. Provides advanced logging, monitoring, and analytics capabilities.",
    image: "/my-portfolio/images/elk-stack.png", // Add your project image
    techStack: ["Elasticsearch", "Logstash", "Kibana"],
    icons: [
      { icon: SiElasticsearch, color: "#005571" },
      { icon: SiLogstash, color: "#005571" },
      { icon: SiKibana, color: "#005571" },
    ],
    // github: "https://github.com/yourusername/elk-integration",
    featured: true
  },
  {
    title: "Salon WhatsApp Chatbot",
    description: "Automated WhatsApp chatbot for salon management, handling appointment scheduling, service inquiries, reminders, and customer support through WhatsApp Business API.",
    image: "/my-portfolio/images/whatsapp-bots.png", // Add your project image
    techStack: ["Node.js", "WhatsApp API", "MongoDB"],
    icons: [
      { icon: SiNodedotjs, color: "#68A063" },
      { icon: SiWhatsapp, color: "#25D366" },
      { icon: SiMysql, color: "#4479A1" },
    ],
    // github: "https://github.com/yourusername/salon-chatbot",
    featured: true
  },
  {
    title: "Bounce ID Tracker",
    description: "Built a backend system to capture bounce email IDs from delivery logs and sync them with external platforms like Clevertap, Listmonk, and MapEngage.",
    image: "/my-portfolio/images/bounce-id-sync.jpg",
    techStack: ["Node.js", "Python", "Logstash", "Elasticsearch"],
    icons: [
      { icon: SiNodedotjs, color: "#68A063" },
      { icon: SiPython, color: "#3776AB" }, 
      { icon: SiElasticsearch, color: "#005571" },
      { icon: SiLogstash, color: "#000000" },
      
    ],
    // github: "https://github.com/AlexshamalanR/bounce-id-sync", // optional
    featured: false
  }
]

const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => (
  <div className="group min-w-[250px] max-w-[250px] mx-2">
    <div className="bg-secondary/30 rounded-lg p-3 h-full backdrop-blur-sm border border-accent/10 
      transition-all duration-300 hover:bg-secondary/40 hover:border-accent/20 
      hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
    >
      <div 
        className="relative aspect-video mb-2 overflow-hidden rounded-lg bg-secondary/50"
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        )}
      </div>

      <h3 className="text-base font-bold text-textLight mb-1">{project.title}</h3>
      <p className="text-text/80 text-[11px] mb-2 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-1 mb-2">
        {project.techStack.map((tech, i) => (
          <span
            key={i}
            className="text-[9px] px-1.5 py-0.5 rounded-full bg-accent/10 text-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {project.icons.map((tech, i) => (
            <tech.icon
              key={i}
              className="text-base"
              style={{ color: tech.color }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/80 hover:text-accent transition-colors"
          >
            <FaGithub className="text-base" />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/80 hover:text-accent transition-colors"
            >
              <FaExternalLinkAlt className="text-base" />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
)

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      })
    }
  }

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      })
    }
  }

  // Auto scroll effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (scrollContainerRef.current) {
  //       const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        
  //       if (scrollLeft + clientWidth >= scrollWidth) {
  //         // Reset to start when reaching the end
  //         scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  //       } else {
  //         // Scroll right
  //         scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
  //       }
  //     }
  //   }, 3000) // Scroll every 3 seconds

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-textLight mb-4">Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Slider Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/80 rounded-full
              text-accent hover:bg-background transition-colors duration-300 backdrop-blur-sm"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-background/80 rounded-full
              text-accent hover:bg-background transition-colors duration-300 backdrop-blur-sm"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10"></div>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar scroll-smooth"
          >
            <div className="flex py-4 space-x-4 px-12">
              {projectsData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }} // Start from right
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>


        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/alexshamalan936"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background
              hover:bg-accent/90 transition-colors duration-300"
          >
            <FaGithub className="text-xl" />
            <span>View More Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
