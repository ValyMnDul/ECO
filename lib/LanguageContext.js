'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const translations = {
  ro: {
    // Navigation & Common
    home: 'Acasă',
    back: 'Înapoi',
    
    // Menu Items
    theory: 'Teorie',
    schemes: 'Scheme Didactice',
    calculator: 'Calculator Interactiv',
    worksheets: 'Fișe de Lucru',
    lessons: 'Lecții Online',
    evaluation: 'Evaluare',
    bibliography: 'Bibliografie',
    
    // Homepage
    mainTitle: 'Productivitatea Factorilor de Producție',
    subtitle: 'Platformă educațională interactivă dedicată înțelegerii conceptelor economice fundamentale despre productivitate și eficiența utilizării resurselor',
    startLesson: 'Începe Lecția',
    testKnowledge: 'Testează-ți Cunoștințele',
    sections: 'Secțiuni Interactive',
    questions: 'Întrebări de Evaluare',
    content: 'Conținut Original',
    exploreContent: 'Explorează Conținutul',
    whatIsProductivity: 'Ce este Productivitatea?',
    productivityDesc: 'Productivitatea reprezintă motorul creșterii economice, reflectând eficiența cu care sunt transformați factorii de producție (muncă, capital, pământ) în bunuri și servicii.',
    
    // Theory Page
    theoryTitle: 'Teorie - Productivitatea Factorilor de Producție',
    introduction: 'Introducere',
    forms: 'Forme de Productivitate',
    formulas: 'Formule',
    factors: 'Factori de Influență',
    concepts: 'Concepte Cheie',
    
    // Calculator
    calculatorTitle: 'Calculator Interactiv de Productivitate',
    global: 'Globală',
    labor: 'Munca',
    capital: 'Capital',
    land: 'Pământ',
    marginal: 'Marginală',
    calculate: 'Calculează',
    
    // Worksheets
    worksheetsTitle: 'Fișe de Lucru - Download',
    downloadFiles: 'Descarcă Fișierele',
    
    // Evaluation
    evaluationTitle: 'Sistem de Evaluare',
    startTest: 'Începe Testul',
    submitTest: 'Trimite Testul',
    
    // Common buttons
    previous: 'Precedent',
    next: 'Următorul',
    
    // Footer
    footerText: 'Proiect pentru Concursul Național Interdisciplinar',
    footerSubtext: '"Istorie și Societate în Dimensiune Virtuală"'
  },
  en: {
    // Navigation & Common
    home: 'Home',
    back: 'Back',
    
    // Menu Items
    theory: 'Theory',
    schemes: 'Educational Schemes',
    calculator: 'Interactive Calculator',
    worksheets: 'Worksheets',
    lessons: 'Online Lessons',
    evaluation: 'Evaluation',
    bibliography: 'Bibliography',
    
    // Homepage
    mainTitle: 'Production Factors Productivity',
    subtitle: 'Interactive educational platform dedicated to understanding fundamental economic concepts about productivity and resource efficiency',
    startLesson: 'Start Lesson',
    testKnowledge: 'Test Your Knowledge',
    sections: 'Interactive Sections',
    questions: 'Evaluation Questions',
    content: 'Original Content',
    exploreContent: 'Explore Content',
    whatIsProductivity: 'What is Productivity?',
    productivityDesc: 'Productivity represents the engine of economic growth, reflecting the efficiency with which production factors (labor, capital, land) are transformed into goods and services.',
    
    // Theory Page
    theoryTitle: 'Theory - Production Factors Productivity',
    introduction: 'Introduction',
    forms: 'Forms of Productivity',
    formulas: 'Formulas',
    factors: 'Influencing Factors',
    concepts: 'Key Concepts',
    
    // Calculator
    calculatorTitle: 'Interactive Productivity Calculator',
    global: 'Global',
    labor: 'Labor',
    capital: 'Capital',
    land: 'Land',
    marginal: 'Marginal',
    calculate: 'Calculate',
    
    // Worksheets
    worksheetsTitle: 'Worksheets - Download',
    downloadFiles: 'Download Files',
    
    // Evaluation
    evaluationTitle: 'Evaluation System',
    startTest: 'Start Test',
    submitTest: 'Submit Test',
    
    // Common buttons
    previous: 'Previous',
    next: 'Next',
    
    // Footer
    footerText: 'Project for National Interdisciplinary Competition',
    footerSubtext: '"History and Society in Virtual Dimension"'
  }
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ro')

  useEffect(() => {
    const saved = localStorage.getItem('language')
    if (saved && (saved === 'ro' || saved === 'en')) {
      setLanguage(saved)
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'ro' ? 'en' : 'ro'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
