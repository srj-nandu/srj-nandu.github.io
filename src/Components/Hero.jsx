function Hero() {
  return (
    <header className="hero">
      <div className="hero-panel">
        <div className="hero-backdrop" aria-hidden="true">
          <div className="hero-orb hero-orb-left" />
          <div className="hero-orb hero-orb-right" />
          <div className="hero-silhouette" />
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">MCA Student / Full-Stack Developer / Chip-Level Technician</p>
            <h1>Building digital products with a hardware-grade mindset.</h1>
            <p className="hero-text">
              I design and ship full-stack applications, troubleshoot devices at
              component level, and bring the same precision to code, systems, and
              user experience.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="#contact">
                Start a Conversation
              </a>
            </div>
          </div>

          <aside className="hero-sidekick">
            <span className="card-label">Selected Focus</span>
            <h2>Software, repair, and reliable execution.</h2>
            <p>
              I work across React interfaces, backend workflows, automation, and
              chip-level diagnostics for real-world problems.
            </p>
            <div className="hero-mini-grid">
              <div>
                <strong>01</strong>
                <span>Web Apps</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Diagnostics</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Automation</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="hero-stats" aria-label="Key capabilities">
          <div>
            <strong>01</strong>
            <span>Full-Stack Development</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Hardware Troubleshooting</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Responsive UI Systems</span>
          </div>
          <div>
            <strong>04</strong>
            <span>Problem Solving Under Pressure</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
