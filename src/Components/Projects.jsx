import { motion } from 'framer-motion'
import { projects } from './projectData.js'
import { cardMotion, sectionMotion, staggerContainer } from './motion.js'

function Projects() {
  return (
    <motion.section className="content-section" id="projects" {...sectionMotion}>
      <div className="section-header">
        <p className="section-eyebrow">Portfolio</p>
        <h2>Selected work across web apps, automation, and system-level projects.</h2>
      </div>

      <motion.div
        className="card-grid projects-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        {projects.map((project) => (
          <motion.article key={project.title} className="glass-card project-card" variants={cardMotion}>
            <p className="card-tag">{project.subtitle}</p>
            <h3>{project.title}</h3>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Projects
