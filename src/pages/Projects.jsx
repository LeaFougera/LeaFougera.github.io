import { motion } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa'
import useGitHubProjects from '../hooks/useGitHubProjects'
import Section from '../components/Section'
import Container from '../components/Container'
import Card from '../components/Card'
import './Projects.css'

function Projects() {
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
    <Section id="projects" className="projects-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <h2>Projects</h2>
          <p>Featured repositories from GitHub</p>
        </motion.div>

        {loading && (
          <motion.div className="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Loading projects...
          </motion.div>
        )}

        {error && (
          <motion.div className="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Unable to load projects. Please check back later.
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
                      {project.description || 'No description available'}
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

                    <div className="project-footer">
                      <div className="project-stat">
                        <FaStar className="stat-icon" />
                        <span>{project.stargazers_count}</span>
                      </div>
                      <div className="project-stat">
                        <FaCodeBranch className="stat-icon" />
                        <span>{project.forks_count}</span>
                      </div>
                      {project.language && (
                        <div className="project-language">
                          <span className="language-dot" />
                          {project.language}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        )}
      </Container>
    </Section>
  )
}

export default Projects
