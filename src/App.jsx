import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './pages/Hero'
import About from './pages/About'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return <Hero />
      case 'about':
        return <About />
      case 'experience':
        return <Experience />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Hero />
    }
  }

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  )
}

export default App
