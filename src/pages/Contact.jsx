import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import Section from '../components/Section'
import Container from '../components/Container'
import Button from '../components/Button'
import './Contact.css'

function Contact() {
  const [cvLanguage, setCvLanguage] = useState('en')

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'lea.fougera-lempereur@hotmail.com',
      link: 'mailto:lea.fougera-lempereur@hotmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+33 6 28 84 87 70',
      link: 'tel:+33628848770',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/léa-fougera',
      link: 'https://linkedin.com',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/leafougera',
      link: 'https://github.com/leafougera',
    },
  ]

  const handleCVDownload = () => {
    const cvFile = cvLanguage === 'en'
      ? 'CV_Fougera-Lempereur_EN.pdf'
      : 'CV_Fougera-Lempereur_FR.pdf'

    const link = document.createElement('a')
    link.href = `/cv/${cvFile}`
    link.download = cvFile
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <Section id="contact" className="contact-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2>Get in Touch</h2>
          <p>Let's connect and explore opportunities together</p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-methods" variants={itemVariants}>
            <h3>Contact Information</h3>
            <div className="methods-grid">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method"
                  >
                    <div className="method-icon">
                      <IconComponent />
                    </div>
                    <div className="method-info">
                      <p className="method-label">{method.label}</p>
                      <p className="method-value">{method.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div className="cv-section" variants={itemVariants}>
            <h3>Download CV</h3>
            <p>Choose your preferred language</p>
            <div className="cv-controls">
              <div className="language-toggle">
                <button
                  className={`toggle-btn ${cvLanguage === 'en' ? 'active' : ''}`}
                  onClick={() => setCvLanguage('en')}
                >
                  English
                </button>
                <button
                  className={`toggle-btn ${cvLanguage === 'fr' ? 'active' : ''}`}
                  onClick={() => setCvLanguage('fr')}
                >
                  Français
                </button>
              </div>
              <Button variant="primary" onClick={handleCVDownload}>
                Download CV
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Contact
