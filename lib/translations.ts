import { aboutTranslations } from '@/translations/about/en'
import { aboutTranslations as aboutTranslationsEs } from '@/translations/about/es'
import { contactTranslations } from '@/translations/contact/en'
import { contactTranslations as contactTranslationsEs } from '@/translations/contact/es'
import { servicesTranslations } from '@/translations/services/en'
import { servicesTranslations as servicesTranslationsEs } from '@/translations/services/es'
import { resourcesTranslations } from '@/translations/resources/en'
import { resourcesTranslations as resourcesTranslationsEs } from '@/translations/resources/es'
import { homeTranslations } from '@/translations/home/en'
import { homeTranslations as homeTranslationsEs } from '@/translations/home/es'
import { resultsTranslations } from '@/translations/results/en'
import { resultsTranslations as resultsTranslationsEs } from '@/translations/results/es'

type Language = 'en' | 'es'

export interface PageTranslations {
  about: typeof aboutTranslations
  contact: typeof contactTranslations
  services: typeof servicesTranslations
  resources: typeof resourcesTranslations
  home: typeof homeTranslations
  results: typeof resultsTranslations
}

const translations: Record<Language, PageTranslations> = {
  en: {
    about: aboutTranslations,
    contact: contactTranslations,
    services: servicesTranslations,
    resources: resourcesTranslations,
    home: homeTranslations,
    results: resultsTranslations,
  },
  es: {
    about: aboutTranslationsEs,
    contact: contactTranslationsEs,
    services: servicesTranslationsEs,
    resources: resourcesTranslationsEs,
    home: homeTranslationsEs,
    results: resultsTranslationsEs,
  }
}

export const getPageTranslations = (language: Language, page: keyof PageTranslations) => {
  return translations[language][page]
}

export default translations
