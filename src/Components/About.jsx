import { motion } from 'framer-motion'
import { featuredHighlights } from './projectData.js'
import { cardMotion, sectionMotion, staggerContainer } from './motion.js'

function About() {
  return (
    <motion.section className="content-section" id="about" {...sectionMotion}>
      <div className="section-header">
        <p className="section-eyebrow">Our Story</p>
        <h2>Elegant software experiences, backed by real technical depth.</h2>
      </div>

      <motion.div
        className="about-layout"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.article className="glass-card story-card" variants={cardMotion}>
          <p className="lead-copy">
            I build full-stack applications with the same discipline I use for
            hardware diagnostics: observe carefully, reduce noise, solve the
            root problem, and present the result beautifully.
          </p>
          <p>
            My background combines MCA studies, modern web development, and
            chip-level repair work. That mix gives me a practical edge when a
            project needs both clean user experience and strong technical
            thinking behind the scenes.
          </p>
        </motion.article>

        <motion.aside className="glass-card highlight-card" variants={cardMotion}>
          <p className="card-tag">Signature Strengths</p>
          <div className="pill-grid">
            {featuredHighlights.map((item) => (
              <span key={item} className="soft-pill">
                {item}
              </span>
            ))}
          </div>
        </motion.aside>
      </motion.div>
    </motion.section>
  )
}

export default About
