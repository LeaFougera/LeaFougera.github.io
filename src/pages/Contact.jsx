import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import Button from '../components/Button'
import './Contact.css'

function Contact() {
  const { t } = useLanguage()
  const [cvLanguage, setCvLanguage] = useState('en')

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: t('contact.email'),
      value: 'lea.fougera-lempereur@hotmail.com',
      link: 'mailto:lea.fougera-lempereur@hotmail.com',
    },
    {
      icon: FaPhone,
      label: t('contact.phone'),
      value: '+33 6 28 84 87 70',
      link: 'tel:+33628848770',
    },
    {
      icon: FaLinkedin,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/léa-fougera',
      link: 'https://linkedin.com',
    },
    {
      icon: FaGithub,
      label: t('contact.github'),
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
    <div className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="contact-header"
      >
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.subtitle')}</p>
      </motion.div>

      <motion.div
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="contact-methods" variants={itemVariants}>
          <h3>{t('contact.info')}</h3>
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
          <h3>{t('contact.cv.title')}</h3>
          <p>{t('contact.cv.choose')}</p>
          <div className="cv-controls">
            <div className="language-toggle">
              <button
                className={`toggle-btn ${cvLanguage === 'en' ? 'active' : ''}`}
                onClick={() => setCvLanguage('en')}
              >
                {t('contact.cv.english')}
              </button>
              <button
                className={`toggle-btn ${cvLanguage === 'fr' ? 'active' : ''}`}
                onClick={() => setCvLanguage('fr')}
              >
                {t('contact.cv.french')}
              </button>
            </div>
            <Button variant="primary" onClick={handleCVDownload}>
              {t('contact.cv.download')}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact
