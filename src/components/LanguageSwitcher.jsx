import { useLanguage } from '../contexts/LanguageContext'
import './LanguageSwitcher.css'

function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => language !== 'en' && toggleLanguage()}
      >
        EN
      </button>
      <button
        className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
        onClick={() => language !== 'fr' && toggleLanguage()}
      >
        FR
      </button>
    </div>
  )
}

export default LanguageSwitcher
