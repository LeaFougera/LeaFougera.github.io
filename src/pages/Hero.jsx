import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <div className="hero-section">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-image-container" variants={itemVariants}>
          <img
            src="/profile.jpeg"
            alt={t('hero.title')}
            className="hero-image"
          />
        </motion.div>
        <motion.h1 variants={itemVariants}>
          {t('hero.title')}
        </motion.h1>
        <motion.p className="hero-subtitle" variants={itemVariants}>
          {t('hero.subtitle')}
        </motion.p>
        <motion.p className="hero-description" variants={itemVariants}>
          {t('hero.description')}
        </motion.p>
        <motion.div className="hero-cta" variants={itemVariants}>
          <a href="#contact" className="cta-button">
            {t('hero.cta')}
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
