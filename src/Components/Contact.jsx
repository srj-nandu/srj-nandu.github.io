import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { cardMotion, sectionMotion, staggerContainer } from './motion.js'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const hasEmailJsConfig =
  serviceId &&
  templateId &&
  publicKey &&
  serviceId !== 'your_service_id' &&
  templateId !== 'your_template_id' &&
  publicKey !== 'your_public_key'

function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!hasEmailJsConfig) {
      setStatus({
        type: 'error',
        message:
          'EmailJS is not configured yet. Add real service ID, template ID, and public key in the .env file.',
      })
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const firstName = formData.get('firstName')?.toString().trim() ?? ''
    const lastName = formData.get('lastName')?.toString().trim() ?? ''
    const email = formData.get('email')?.toString().trim() ?? ''
    const message = formData.get('message')?.toString().trim() ?? ''
    const fullName = `${firstName} ${lastName}`.trim() || 'Portfolio visitor'

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: fullName,
          first_name: firstName,
          last_name: lastName,
          reply_to: email,
          from_email: email,
          message,
          to_name: 'Sooraj S',
          subject: `Portfolio enquiry from ${fullName}`,
        },
        { publicKey },
      )

      form.reset()
      setStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      })
    } catch (error) {
      const errorMessage =
        error?.text ||
        error?.message ||
        (typeof error === 'string' ? error : 'Unknown EmailJS error')

      console.error('EmailJS send failed:', error)
      setStatus({
        type: 'error',
        message: `Message could not be sent. ${errorMessage}`,
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <motion.section className="content-section contact-wrap" id="contact" {...sectionMotion}>
      <div className="section-header">
        <p className="section-eyebrow">Contact</p>
        <h2>Let&apos;s build something thoughtful, practical, and beautifully finished.</h2>
      </div>

      <motion.div
        className="contact-layout"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <motion.div className="glass-card contact-copy" variants={cardMotion}>
          <p className="lead-copy">
            For internships, freelance projects, technical support, or
            collaborations, you can message me here or reach out directly.
          </p>

          <div className="contact-links-grid">
            <a className="contact-link-card" href="mailto:srj.nandu@gmail.com">
              <span>Email</span>
              <strong>srj.nandu@gmail.com</strong>
            </a>
            <a
              className="contact-link-card"
              href="https://linkedin.com/in/srjnandu"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>linkedin.com/in/srjnandu</strong>
            </a>
            <a
              className="contact-link-card"
              href="https://github.com/srj-nandu"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <strong>github.com/srj-nandu</strong>
            </a>
          </div>
        </motion.div>

        <motion.form className="glass-card contact-form-card" onSubmit={handleSubmit} variants={cardMotion}>
          <div className="contact-form-grid">
            <label>
              <span>First Name</span>
              <input type="text" name="firstName" placeholder="Your first name" required />
            </label>
            <label>
              <span>Last Name</span>
              <input type="text" name="lastName" placeholder="Your last name" />
            </label>
          </div>

          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label>
            <span>Project Details</span>
            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your idea, role, support need, or collaboration."
              required
            />
          </label>

          <button className="primary-pill contact-submit" type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {status.message ? (
            <p className={`contact-status ${status.type}`}>{status.message}</p>
          ) : null}
        </motion.form>
      </motion.div>
    </motion.section>
  )
}

export default Contact
