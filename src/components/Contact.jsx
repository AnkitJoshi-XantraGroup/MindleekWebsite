import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
      return
    }

    // Simulate form submission
    console.log('Form submitted:', formData)
    setStatus('success')

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    })

    setTimeout(() => setStatus(''), 5000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">
            Let's create something{' '}
            <span className="text-gradient">extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? We'd love to hear about it.
          </p>
        </motion.div>

        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="contact-form glass" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your project *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="I'd like to discuss..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>

            {status && (
              <motion.div
                className={`form-status ${status}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status === 'success' ? (
                  <>
                    <span className="status-icon">✓</span>
                    Thank you! We'll get back to you soon.
                  </>
                ) : (
                  <>
                    <span className="status-icon">!</span>
                    Please fill in all required fields.
                  </>
                )}
              </motion.div>
            )}

            <p className="form-note">
              By submitting this form, you agree to our privacy policy. We
              respect your data and will never share it with third parties.
            </p>
          </form>

          <div className="contact-info">
            <motion.div
              className="info-card glass"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>hello@mindleek.io</p>
            </motion.div>

            <motion.div
              className="info-card glass"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="info-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Available 24/7</p>
            </motion.div>

            <motion.div
              className="info-card glass"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Global, Remote</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
