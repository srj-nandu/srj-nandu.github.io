import { motion } from 'framer-motion'
import { cardMotion, sectionMotion, staggerContainer } from './motion.js'

function Portfolio() {
  return (
    <motion.section className="content-section" id="portfolio" {...sectionMotion}>
      <div className="section-header">
        <p className="section-eyebrow">Clients</p>
        <h2>A portfolio direction built to feel calm, premium, and trustworthy.</h2>
      </div>

      <motion.div
        className="portfolio-showcase"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.article className="glass-card showcase-copy" variants={cardMotion}>
          <p className="card-tag">Creative Direction</p>
          <h3>Feel-good presentation with a clear technical voice.</h3>
          <p>
            The new layout uses soft gradients, scenic depth, glassmorphism, and
            spacious typography to make your profile feel more premium. It keeps
            attention on your strengths instead of overwhelming visitors with
            disconnected styles.
          </p>
        </motion.article>

        <motion.article className="glass-card showcase-metrics" variants={cardMotion}>
          <div>
            <strong>Design Mood</strong>
            <span>Elegant, scenic, and memorable</span>
          </div>
          <div>
            <strong>Core Focus</strong>
            <span>Full-stack builds with hardware credibility</span>
          </div>
          <div>
            <strong>User Feeling</strong>
            <span>Confident, curious, and ready to reach out</span>
          </div>
        </motion.article>
      </motion.div>
    </motion.section>
  )
}

export default Portfolio
