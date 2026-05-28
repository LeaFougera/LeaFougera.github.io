import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import useGitHubProjects from '../hooks/useGitHubProjects'
import projectDescriptions from '../i18n/projectDescriptions'
import Card from '../components/Card'
import './Projects.css'

function Projects() {
  const { t, language } = useLanguage()
  const { projects, loading, error } = useGitHubProjects('leafougera')

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
    <div className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="projects-header"
      >
        <h2>{t('projects.title')}</h2>
        <p>{t('projects.subtitle')}</p>
      </motion.div>

      {loading && (
        <motion.div className="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {t('projects.loading')}
        </motion.div>
      )}

      {error && (
        <motion.div className="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {t('projects.error')}
        </motion.div>
      )}

      {!loading && !error && (
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              variants={itemVariants}
            >
              <Card>
                <div className="project-card">
                  <div className="project-header">
                    <h3>{project.name}</h3>
                    <FaGithub className="project-icon" />
                  </div>

                  <p className="project-description">
                    {projectDescriptions[language]?.[project.name] || project.description || t('projects.noDescription')}
                  </p>

                  {project.topics && project.topics.length > 0 && (
                    <div className="project-topics">
                      {project.topics.map((topic) => (
                        <span key={topic} className="topic-tag">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.language && (
                    <div className="project-footer">
                      <div className="project-language">
                        <span className="language-dot" />
                        {project.language}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default Projects
