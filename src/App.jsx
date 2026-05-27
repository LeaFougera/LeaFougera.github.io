import { useState, useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './pages/Hero'
import About from './pages/About'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const sectionsRef = useRef({})
  const isScrollingRef = useRef(false)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      if (isScrollingRef.current) return

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section')
          setActiveSection(sectionId)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    Object.values(sectionsRef.current).forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId)
    isScrollingRef.current = true

    sectionsRef.current[sectionId]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    setTimeout(() => {
      isScrollingRef.current = false
    }, 1000)
  }

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main className="main-content">
        <section
          ref={el => sectionsRef.current['hero'] = el}
          data-section="hero"
          className="section-container"
        >
          <Hero />
        </section>
        <section
          ref={el => sectionsRef.current['about'] = el}
          data-section="about"
          className="section-container"
        >
          <About />
        </section>
        <section
          ref={el => sectionsRef.current['experience'] = el}
          data-section="experience"
          className="section-container"
        >
          <Experience />
        </section>
        <section
          ref={el => sectionsRef.current['projects'] = el}
          data-section="projects"
          className="section-container"
        >
          <Projects />
        </section>
        <section
          ref={el => sectionsRef.current['contact'] = el}
          data-section="contact"
          className="section-container"
        >
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
