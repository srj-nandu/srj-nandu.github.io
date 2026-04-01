import { motion } from 'framer-motion'
import { technicalSkills } from './projectData.js'
import { cardMotion, sectionMotion, staggerContainer } from './motion.js'

function Skills() {
  return (
    <motion.section className="content-section" id="skills" {...sectionMotion}>
      <div className="section-header">
        <p className="section-eyebrow">Solution Lab</p>
        <h2>Tools, systems, and technologies that shape the work.</h2>
      </div>

      <motion.div
        className="card-grid skills-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Object.entries(technicalSkills).map(([category, values]) => (
          <motion.article key={category} className="glass-card info-card" variants={cardMotion}>
            <p className="card-tag">{category}</p>
            <h3>{values[0]}</h3>
            <p>{values.slice(1).join(' • ')}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Skills
