import { motion } from 'framer-motion'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: 'Software Engineer Apprentice',
      company: 'Capgemini',
      period: 'Oct 2025 – Present',
      description: 'Building innovative software solutions with focus on AI and data engineering.',
      highlights: [
        'RAG Chatbot: Developed semantic search over internal documents using LangChain',
        'Web Scraping POC: Designed maritime data scraping pipeline with Python and Streamlit',
        'Text2SQL: Contributed to Text-to-SQL engine through code review and documentation',
      ],
    },
    {
      title: 'Data Analyst & Developer Intern',
      company: 'Cilcare',
      period: 'June to September 2025',
      description: 'Analyzed clinical datasets and built software tools for biomedical research.',
      highlights: [
        'Analyzed large clinical datasets; improved data accuracy by 15%',
        'Developed REST APIs with Django and React frontend for data visualization',
        'Implemented data preprocessing pipelines and statistical models',
        'Collaborated with researchers on statistical analysis automation',
      ],
    },
    {
      title: 'Digital Engineer Degree',
      company: 'ISEN Méditerranée',
      period: 'Expected 2026',
      description: 'Computer Science & Data major with focus on ML, DL, and Algorithms.',
      highlights: [
        'Major in Computer Science & Data',
        'Coursework: Machine Learning, Deep Learning, Algorithms, Statistics',
        'Exchange semester at Universiti Putra Malaysia (2023)',
      ],
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
        <h2>Experience</h2>
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
                <h3>{exp.title}</h3>
                <span className="company-name">{exp.company}</span>
                <span className="period">{exp.period}</span>
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
