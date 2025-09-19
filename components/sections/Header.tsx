'use client'

import { Button } from "@/components/ui/button"
import { Phone, Globe } from "lucide-react"
import Image from "next/image"
import { useLanguageStore } from "@/hooks/useLanguageStore"

export default function Header() {
  const { language, toggleLanguage, t } = useLanguageStore()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo/ruben real estate_Horizontal.png"
              alt="Ruben Real Estate Logo"
              width={180}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.about')}
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.services')}
            </a>
            <a href="#properties" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.properties')}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.contact')}
            </a>
            
            {/* Language Toggle */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage}
              className="border-coastal-slate text-coastal-slate hover:bg-coastal-cream/10"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
            
            <Button className="bg-coastal-gradient hover:opacity-90 text-coastal-cream">
              <Phone className="w-4 h-4 mr-2" />
              (541) 602-1026
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage}
              className="border-coastal-slate text-coastal-slate hover:bg-coastal-cream/10"
            >
              <Globe className="w-4 h-4 mr-1" />
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
            <Button variant="outline" size="sm" className="border-coastal-slate text-coastal-slate hover:bg-coastal-cream/10">
              Menu
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
