import { motion } from 'framer-motion'
import { experience, softSkills } from './projectData.js'
import { cardMotion, sectionMotion, staggerContainer } from './motion.js'

function Resume() {
  return (
    <motion.section className="content-section" id="resume" {...sectionMotion}>
      <div className="section-header">
        <p className="section-eyebrow">Blog</p>
        <h2>Experience that connects software delivery with practical repair work.</h2>
      </div>

      <motion.div
        className="timeline"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experience.map((item) => (
          <motion.article key={item.role} className="glass-card timeline-card" variants={cardMotion}>
            <div className="timeline-meta">
              <div>
                <p className="card-tag">{item.company}</p>
                <h3>{item.role}</h3>
              </div>
              <span>{item.duration}</span>
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}

        <motion.article className="glass-card timeline-card" variants={cardMotion}>
          <div className="timeline-meta">
            <div>
              <p className="card-tag">Education</p>
              <h3>Master of Computer Applications (MCA)</h3>
            </div>
            <span>Update College Details</span>
          </div>
          <p className="timeline-note">Soft skills: {softSkills.join(' • ')}</p>
        </motion.article>
      </motion.div>
    </motion.section>
  )
}

export default Resume
