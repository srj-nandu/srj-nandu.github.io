import { useState } from 'react'
import emailjs from '@emailjs/browser'

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
        message: 'EmailJS is not configured yet. Add real service ID, template ID, and public key in the .env file.',
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
    <section id="contact" className="section contact-section">
      <div className="contact-intro">
        <p className="section-tag">Response Section</p>
        <h2>Make it easy for people to connect with you.</h2>
        <p className="contact-lead">
          For project work, internships, technical support, or collaborations, people
          can message you here or reach out directly through your primary profiles.
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
      </div>

      <form className="contact-form-card" onSubmit={handleSubmit}>
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
          <span>Tell me about your requirement</span>
          <textarea
            name="message"
            rows="6"
            placeholder="Share your project, role, support need, or any question."
            required
          />
        </label>

        <button className="button primary contact-submit" type="submit" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>

        {status.message ? (
          <p className={`contact-status ${status.type}`}>{status.message}</p>
        ) : null}
      </form>
    </section>
  )
}

export default Contact
