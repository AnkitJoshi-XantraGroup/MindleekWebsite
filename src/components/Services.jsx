import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Services.css'

const services = [
  {
    icon: '🚀',
    title: 'Rapid Prototyping',
    description:
      'Transform ideas into interactive prototypes. We validate concepts fast with AI-powered workflows and user testing.',
    gradient: 'linear-gradient(135deg, #007AFF, #5AC8FA)',
  },
  {
    icon: '🎯',
    title: 'Multimodal AI',
    description:
      'Build apps that understand voice, vision, and text. Natural interactions powered by cutting-edge AI models.',
    gradient: 'linear-gradient(135deg, #AF52DE, #FF2D55)',
  },
  {
    icon: '⚡',
    title: 'Enterprise Integration',
    description:
      'Seamlessly connect AI capabilities to your existing systems. Secure, scalable, and compliant solutions.',
    gradient: 'linear-gradient(135deg, #FF9500, #FF2D55)',
  },
]

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">
            AI-driven development that brings{' '}
            <span className="text-gradient">your vision to life</span>
          </h2>
          <p className="section-subtitle">
            Cutting-edge AI technologies integrated into your applications
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="service-card glass"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="service-icon" style={{ background: service.gradient }}>
        {service.icon}
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <motion.div
        className="service-link"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <span>Learn more</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M12 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default Services
