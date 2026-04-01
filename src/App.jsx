import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Portfolio from './Components/Portfolio.jsx'
import Projects from './Components/Projects.jsx'
import Resume from './Components/Resume.jsx'
import Certificates from './Components/Certificates.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <div className="site-page">
      <div className="ambient-background" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
        <span className="ambient-orb ambient-orb-three" />
        <span className="ambient-grid" />
      </div>

      <Navbar />
      <Hero />

      <main className="site-main">
        <About />
        <Skills />
        <Portfolio />
        <Projects />
        <Resume />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
