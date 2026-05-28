const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      title: 'Léa Fougera-Lempereur',
      subtitle: 'Software Engineer',
      description: 'Passionate about building elegant software solutions with a focus on AI, data engineering, and cloud technologies',
      cta: 'Get in Touch'
    },
    about: {
      title: 'About',
      intro: "I'm a Software Engineer with a passion for building innovative solutions at the intersection of AI, data engineering, and cloud technologies. Currently pursuing my Digital Engineer degree at ISEN Méditerranée with a focus on Machine Learning and Data Science.",
      skills: {
        programming: 'Programming',
        aiSystems: 'AI & Agentic Systems',
        dataAnalysis: 'Data Analysis',
        cloudTools: 'Cloud & Tools'
      }
    },
    experience: {
      title: 'Experience',
      capgemini: {
        title: 'Software Engineer Apprentice',
        company: 'Capgemini',
        period: 'Oct 2025 – Present',
        description: 'Building innovative software solutions with focus on AI and data engineering.',
        highlights: [
          'RAG Chatbot: Developed semantic search over internal documents using LangChain',
          'Web Scraping POC: Designed maritime data scraping pipeline with Python and Streamlit',
          'Text2SQL: Contributed to Text-to-SQL engine through code review and documentation'
        ]
      },
      cilcare: {
        title: 'Data Analyst & Developer Intern',
        company: 'Cilcare',
        period: 'June to September 2025',
        description: 'Analyzed clinical datasets and built software tools for biomedical research.',
        highlights: [
          'Analyzed large clinical datasets; improved data accuracy by 15%',
          'Developed REST APIs with Django and React frontend for data visualization',
          'Implemented data preprocessing pipelines and statistical models',
          'Collaborated with researchers on statistical analysis automation'
        ]
      },
      isen: {
        title: 'Digital Engineer Degree',
        company: 'ISEN Méditerranée',
        period: 'Expected 2026',
        description: 'Computer Science & Data major with focus on ML, DL, and Algorithms.',
        highlights: [
          'Major in Computer Science & Data',
          'Coursework: Machine Learning, Deep Learning, Algorithms, Statistics',
          'Exchange semester at Universiti Putra Malaysia (2023)'
        ]
      }
    },
    projects: {
      title: 'Projects',
      subtitle: 'Featured repositories from GitHub',
      loading: 'Loading projects...',
      error: 'Unable to load projects. Please check back later.',
      noDescription: 'No description available'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: "Let's connect and explore opportunities together",
      info: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: {
        title: 'Download CV',
        choose: 'Choose your preferred language',
        english: 'English',
        french: 'Français',
        download: 'Download CV'
      }
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      contact: 'Contact'
    },
    hero: {
      title: 'Léa Fougera-Lempereur',
      subtitle: 'Ingénieure Logiciel',
      description: "Passionnée par la création de solutions logicielles élégantes avec un focus sur l'IA, l'ingénierie des données et les technologies cloud",
      cta: 'Me Contacter'
    },
    about: {
      title: 'À propos',
      intro: "Je suis Ingénieure Logiciel avec une passion pour la création de solutions innovantes à l'intersection de l'IA, de l'ingénierie des données et des technologies cloud. Actuellement en train de poursuivre mon diplôme d'Ingénieure Numérique à l'ISEN Méditerranée avec un focus sur le Machine Learning et la Data Science.",
      skills: {
        programming: 'Programmation',
        aiSystems: 'IA & Systèmes Agentiques',
        dataAnalysis: 'Analyse de Données',
        cloudTools: 'Cloud & Outils'
      }
    },
    experience: {
      title: 'Expérience',
      capgemini: {
        title: 'Apprentie Ingénieure Logiciel',
        company: 'Capgemini',
        period: 'Oct 2025 – Présent',
        description: "Création de solutions logicielles innovantes avec un focus sur l'IA et l'ingénierie des données.",
        highlights: [
          'Chatbot RAG : Développement de recherche sémantique sur documents internes avec LangChain',
          'POC Web Scraping : Conception de pipeline de scraping de données maritimes avec Python et Streamlit',
          'Text2SQL : Contribution au moteur Text-to-SQL via revue de code et documentation'
        ]
      },
      cilcare: {
        title: 'Stagiaire Analyste de Données & Développeuse',
        company: 'Cilcare',
        period: 'Juin à Septembre 2025',
        description: 'Analyse de datasets cliniques et création d\'outils logiciels pour la recherche biomédicale.',
        highlights: [
          'Analyse de larges datasets cliniques ; amélioration de la précision des données de 15%',
          'Développement d\'APIs REST avec Django et frontend React pour visualisation de données',
          'Implémentation de pipelines de prétraitement de données et modèles statistiques',
          'Collaboration avec chercheurs sur automatisation d\'analyses statistiques'
        ]
      },
      isen: {
        title: 'Diplôme d\'Ingénieur Numérique',
        company: 'ISEN Méditerranée',
        period: 'Attendu 2026',
        description: 'Majeure Informatique & Data avec focus sur ML, DL et Algorithmes.',
        highlights: [
          'Majeure en Informatique & Data',
          'Cours : Machine Learning, Deep Learning, Algorithmes, Statistiques',
          'Semestre d\'échange à l\'Universiti Putra Malaysia (2023)'
        ]
      }
    },
    projects: {
      title: 'Projets',
      subtitle: 'Dépôts en vedette sur GitHub',
      loading: 'Chargement des projets...',
      error: 'Impossible de charger les projets. Veuillez réessayer plus tard.',
      noDescription: 'Aucune description disponible'
    },
    contact: {
      title: 'Me Contacter',
      subtitle: 'Connectons-nous et explorons les opportunités ensemble',
      info: 'Informations de Contact',
      email: 'Email',
      phone: 'Téléphone',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      cv: {
        title: 'Télécharger le CV',
        choose: 'Choisissez votre langue préférée',
        english: 'English',
        french: 'Français',
        download: 'Télécharger le CV'
      }
    }
  }
}

export default translations
