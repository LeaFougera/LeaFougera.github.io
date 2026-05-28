import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import './Experience.css'

function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t('experience.capgemini.title'),
      company: t('experience.capgemini.company'),
      period: t('experience.capgemini.period'),
      description: t('experience.capgemini.description'),
      highlights: t('experience.capgemini.highlights'),
      logo: '/capgemini-logo.png',
    },
    {
      title: t('experience.cilcare.title'),
      company: t('experience.cilcare.company'),
      period: t('experience.cilcare.period'),
      description: t('experience.cilcare.description'),
      highlights: t('experience.cilcare.highlights'),
      logo: '/cilcare-logo.png',
    },
    {
      title: t('experience.isen.title'),
      company: t('experience.isen.company'),
      period: t('experience.isen.period'),
      description: t('experience.isen.description'),
      highlights: t('experience.isen.highlights'),
      logo: '/isen-logo.png',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="experience-section">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="experience-header"
      >
        <h2>{t('experience.title')}</h2>
      </motion.div>

      <motion.div
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} className="timeline-item" variants={itemVariants}>
            <div className="timeline-marker">
              <div className="marker-dot" />
            </div>
            <div className="timeline-content">
              <div className="experience-header-content">
                {exp.logo && (
                  <img src={exp.logo} alt={exp.company} className="company-logo" />
                )}
                <div className="experience-text">
                  <h3>{exp.title}</h3>
                  <span className="company-name">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
              </div>
              <p className="description">{exp.description}</p>
              <ul className="highlights">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Experience
