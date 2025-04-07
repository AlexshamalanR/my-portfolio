import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      // Replace these with your EmailJS credentials
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',     // Replace with your Service ID from EmailJS
        'YOUR_TEMPLATE_ID',    // Replace with your Template ID from EmailJS
        formRef.current!,
        'YOUR_PUBLIC_KEY'      // Replace with your Public Key from EmailJS
      )

      setSuccess(true)
      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-textLight text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          className="text-text text-center max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-textLight mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-secondary/30 border border-accent/20 rounded-lg px-4 py-2 text-text focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-textLight mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-secondary/30 border border-accent/20 rounded-lg px-4 py-2 text-text focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-textLight mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full bg-secondary/30 border border-accent/20 rounded-lg px-4 py-2 text-text focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 rounded-full bg-accent text-background font-medium
                    hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {success && (
                <div className="text-green-500 text-center">
                  Message sent successfully!
                </div>
              )}

              {error && (
                <div className="text-red-500 text-center">
                  {error}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-secondary/30 rounded-lg p-8"
          >
            <h3 className="text-xl font-bold text-textLight mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-accent text-xl" />
                </div>
                <div>
                  <p className="text-text">Email</p>
                  <a href="mailto:alexshamalan936@gmail.com" className="text-textLight hover:text-accent transition-colors">
                    alexshamalan936@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <p className="text-textLight mb-4">Social Media</p>
                <div className="flex gap-4">
                  {[
                    { icon: FaGithub, link: 'https://github.com/alexshamalan936' },
                    { icon: FaLinkedin, link: 'https://linkedin.com/in/yourusername' },
                    { icon: FaTwitter, link: 'https://twitter.com/yourusername' }
                  ].map((social, index) => (
                    <motion.a
                      key={social.link}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-accent/5 rounded-lg p-6 border border-accent/10">
                <p className="text-textLight mb-2">Current Status</p>
                <p className="text-text">
                  Open to new opportunities and interesting projects. 
                  Feel free to reach out!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
