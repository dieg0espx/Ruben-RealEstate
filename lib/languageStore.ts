'use client'

type Language = 'en' | 'es'

class LanguageStore {
  private language: Language = 'en'
  private listeners: Set<(language: Language) => void> = new Set()

  constructor() {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
        this.language = savedLanguage
      }
    }
  }

  getLanguage(): Language {
    return this.language
  }

  setLanguage(language: Language): void {
    this.language = language
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language)
    }
    this.listeners.forEach(listener => listener(language))
  }

  toggleLanguage(): void {
    const newLanguage = this.language === 'en' ? 'es' : 'en'
    this.setLanguage(newLanguage)
  }

  subscribe(listener: (language: Language) => void): () => void {
    this.listeners.add(listener)
    // Immediately call the listener with current language
    listener(this.language)
    return () => {
      this.listeners.delete(listener)
    }
  }
}

export const languageStore = new LanguageStore()
