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
      description: 'Software Engineer graduating in October 2026, I am eager to specialize in Artificial Intelligence, Agentic AI, and Machine Learning.',
      cta: 'Get in Touch'
    },
    about: {
      title: 'About',
      intro: "I'm a Software Engineer with a passion for building innovative solutions at the intersection of AI, data engineering, and cloud technologies. Currently pursuing my Digital Engineer degree (Computer Science) at ISEN Méditerranée with a focus on Machine Learning and Data Science.",
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
        description: 'Analyzed clinical datasets and developed software tools that automated clinical research reporting, reducing report generation time by 35%.',
        highlights: [
          'Analyzed large clinical datasets and performed biostatistics for auditory pathology research',
          'Developed REST APIs with Django and a React frontend for clinical data visualization',
          'Built an automated reporting tool that helped clinicians generate research reports 35% faster',
          'Implemented data preprocessing pipelines and statistical models',
          'Collaborated with researchers to automate statistical analysis workflows'
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
          'Exchange semester at Universiti Putra Malaysia (2023) in Kuala Lumpur, Malaysia'
        ]
      }
    },
    projects: {
      title: 'Projects',
      subtitle: 'Personal and Academic Github Projects',
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
      subtitle: 'Software Engineer',
      description: "Software Engineer diplomée en octobre 2026, je souhaite me spécialiser dans l'Intelligence Artificielle, les agents IA et le Machine Learning.",
      cta: 'Me Contacter'
    },
    about: {
      title: 'À propos',
      intro: "Je suis Ingénieure Logiciel avec une passion pour la création de solutions innovantes à l'intersection de l'IA, de l'ingénierie des données et des technologies cloud. Actuellement en train de conclure mon diplôme d'Ingénieure Numérique à l'ISEN Méditerranée avec un focus sur le Machine Learning et la Data Science.",
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
        description: 'Analyse de jeux de données cliniques et développement d’outils logiciels dédiés à l’automatisation des comptes rendus de recherche clinique.',
        highlights: [
          'Analyse de données et biostatistiques pour la recherche de pathologies auditives',
          'Développement d’un logiciel d’automatisation de comptes rendus dédié au suivi d’études cliniques.',
          'Développement d\'APIs REST avec Django et frontend React pour visualisation de données'
        ]
      },
      isen: {
        title: 'Diplôme d\'Ingénieur du Numérique',
        company: 'ISEN Méditerranée',
        period: 'Attendu 2026',
        description: 'Majeure Informatique & Data avec focus sur ML, DL et Algorithmes.',
        highlights: [
          'Majeure en Informatique & Data',
          'Cours : Machine Learning, Deep Learning, Algorithmes, Statistiques',
          'Semestre à l\'étranger: Universiti Putra Malaysia (2023) Kuala Lumpur, Malaisie'
        ]
      }
    },
    projects: {
      title: 'Projets',
      subtitle: 'Projets Github personnels et académiques',
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
