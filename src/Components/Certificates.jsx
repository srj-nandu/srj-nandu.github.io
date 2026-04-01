import { motion } from 'framer-motion'
import { certificates } from './projectData.js'
import { cardMotion, sectionMotion, staggerContainer } from './motion.js'

function Certificates() {
  return (
    <motion.section className="content-section" id="certificates" {...sectionMotion}>
      <div className="section-header">
        <p className="section-eyebrow">Proof</p>
        <h2>Space for certifications, training, and credibility markers.</h2>
      </div>

      <motion.div
        className="card-grid certificate-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {certificates.map((item) => (
          <motion.article key={item} className="glass-card certificate-card" variants={cardMotion}>
            <p className="card-tag">Credential Track</p>
            <h3>In Progress</h3>
            <p>{item}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Certificates
