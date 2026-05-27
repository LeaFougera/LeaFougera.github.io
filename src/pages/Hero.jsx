import { motion } from 'framer-motion'
import Section from '../components/Section'
import Container from '../components/Container'
import './Hero.css'

function Hero() {
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
    <Section id="hero" className="hero-section">
      <Container>
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-image-container" variants={itemVariants}>
            <img
              src="/profile.jpeg"
              alt="Léa Fougera-Lempereur"
              className="hero-image"
            />
          </motion.div>
          <motion.h1 variants={itemVariants}>
            Léa Fougera-Lempereur
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Software Engineer
          </motion.p>
          <motion.p className="hero-description" variants={itemVariants}>
            Passionate about building elegant software solutions with a focus on AI, data engineering, and cloud technologies
          </motion.p>
          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#contact" className="cta-button">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Hero
