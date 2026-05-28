import './Sidebar.css'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

function Sidebar({ activeSection, onSectionChange }) {
  const { t } = useLanguage()

  const sections = [
    { id: 'hero', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') }
  ]

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {sections.map(section => (
            <li key={section.id}>
              <button
                className={`sidebar-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => onSectionChange(section.id)}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </nav>
    </aside>
  )
}

export default Sidebar
