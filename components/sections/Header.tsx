'use client'

import { Button } from "@/components/ui/button"
import { Phone, Globe, Menu, X } from "lucide-react"
import Image from "next/image"
import { useLanguageStore } from "@/hooks/useLanguageStore"
import { useState, useEffect } from "react"

export default function Header() {
  const { language, toggleLanguage, t } = useLanguageStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Approximate header height
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'properties', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'properties', label: t('nav.properties') },
    { id: 'contact', label: t('nav.contact') }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white backdrop-blur supports-[backdrop-filter]:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button onClick={() => scrollToSection('about')} className="focus:outline-none">
              <Image
                src="/logo/ruben real estate_Horizontal.png"
                alt="Ruben Real Estate Logo"
                width={240}
                height={60}
                className="h-10 sm:h-12 md:h-16 w-auto"
                priority
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors text-sm xl:text-base ${
                  activeSection === item.id
                    ? 'text-coastal-teal font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Toggle */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage}
              className="border-coastal-slate text-coastal-slate hover:bg-black hover:text-white text-xs xl:text-sm transition-all duration-300"
            >
              <Globe className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
            
            <Button 
              className="bg-coastal-gradient hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-xs xl:text-sm transition-all duration-300"
              onClick={() => window.open('tel:+15416021026', '_self')}
            >
              <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
              <span className="hidden xl:inline">(541) 602-1026</span>
              <span className="xl:hidden">Call</span>
            </Button>
          </div>
          
          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage}
              className="border-coastal-slate text-coastal-slate hover:bg-black hover:text-white text-xs transition-all duration-300"
            >
              <Globe className="w-3 h-3 mr-1" />
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
            <Button 
              className="bg-coastal-gradient hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-xs transition-all duration-300"
              onClick={() => window.open('tel:+15416021026', '_self')}
            >
              <Phone className="w-3 h-3 mr-1" />
              Call
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage}
              className="border-coastal-slate text-coastal-slate hover:bg-black hover:text-white text-xs transition-all duration-300"
            >
              <Globe className="w-3 h-3 mr-1" />
              {language === 'en' ? 'ES' : 'EN'}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="border-coastal-slate text-coastal-slate hover:bg-black hover:text-white transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/40">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-3 px-2 transition-colors text-base ${
                    activeSection === item.id
                      ? 'text-coastal-teal font-semibold bg-coastal-cream/10 rounded-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-coastal-cream/5 rounded-lg'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button 
                  className="w-full bg-coastal-gradient hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-base py-3 transition-all duration-300"
                  onClick={() => window.open('tel:+15416021026', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (541) 602-1026
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
