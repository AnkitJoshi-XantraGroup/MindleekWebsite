import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Projects.css'

const projects = [
  {
    title: 'Voice-Enabled Platform',
    description: 'Multimodal AI assistant for enterprise workflows',
    category: 'Enterprise AI',
    color: '#007AFF',
  },
  {
    title: 'Smart Analytics Dashboard',
    description: 'Real-time insights powered by machine learning',
    category: 'Data & Analytics',
    color: '#AF52DE',
  },
  {
    title: 'Mobile AI App',
    description: 'On-device AI for privacy-first experiences',
    category: 'Mobile Development',
    color: '#FF9500',
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">
            Real-world{' '}
            <span className="text-gradient">AI applications</span>
          </h2>
          <p className="section-subtitle">
            From idea to production in a proven, collaborative workflow
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="project-image" style={{ background: project.color }}>
        <div className="project-overlay glass">
          <div className="project-icon">✨</div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-category">{project.category}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <motion.div
          className="project-link"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span>View project</span>
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
      </div>
    </motion.div>
  )
}

export default Projects
