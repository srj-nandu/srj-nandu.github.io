import { motion } from 'framer-motion'
import heroImage from '../../images/hero.webp'

function Hero() {
  return (
    <section className="hero-banner" id="home">
      <div
        className="hero-backdrop hero-backdrop-image"
        aria-hidden="true"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(27, 16, 52, 0.18), rgba(20, 12, 42, 0.42)), url(${heroImage})` }}
      >
        <div className="hero-sky" />
      </div>

      <motion.div
        className="hero-banner-content"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.22em' }}
          transition={{ duration: 0.9, delay: 0.12 }}
        >
          SOORAJ S
        </motion.h1>
        <motion.p
          className="hero-summary"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
        >
          Full-stack developer and hardware problem solver creating thoughtful
          digital products with a calm, modern, and memorable presentation.
        </motion.p>
        <motion.div
          className="hero-banner-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
        >
          <motion.a className="primary-pill" href="#projects" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
            Explore Work
          </motion.a>
          <motion.a className="ghost-pill" href="#contact" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
            Let&apos;s Connect
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
