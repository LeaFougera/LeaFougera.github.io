import { motion } from 'framer-motion'
import { FaPython, FaReact, FaDatabase, FaCloud } from 'react-icons/fa'
import Section from '../components/Section'
import Container from '../components/Container'
import Card from '../components/Card'
import './About.css'

function About() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: FaReact,
      skills: ['Python', 'JavaScript', 'React', 'Java', 'Django', 'Kotlin', 'Node.js', 'SQL'],
    },
    {
      title: 'AI & Agentic Systems',
      icon: FaPython,
      skills: ['RAG', 'LLM Orchestration', 'LangChain', 'CrewAI', 'API Design', 'Agentic Workflows'],
    },
    {
      title: 'Data Analysis',
      icon: FaDatabase,
      skills: ['NumPy', 'Pandas', 'Statistical Modeling', 'Data Preprocessing', 'Visualization'],
    },
    {
      title: 'Cloud & Tools',
      icon: FaCloud,
      skills: ['Google Cloud', 'PostgreSQL', 'Git', 'Agile/Scrum', 'REST APIs', 'Docker'],
    },
  ]

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
    <Section id="about" className="about-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-header"
        >
          <h2>About</h2>
          <p className="about-intro">
            I'm a Software Engineer with a passion for building innovative solutions at the intersection of AI, data engineering, and cloud technologies. Currently pursuing my Digital Engineer degree at ISEN Méditerranée with a focus on Machine Learning and Data Science.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card>
                  <div className="skill-card">
                    <div className="skill-icon">
                      <IconComponent />
                    </div>
                    <h3>{category.title}</h3>
                    <div className="skill-tags">
                      {category.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}

export default About
