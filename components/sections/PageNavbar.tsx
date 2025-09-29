'use client'

import { Button } from "@/components/ui/button"
import { Phone, Globe, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import useLanguageStore from "@/hooks/useLanguageStore"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function PageNavbar() {
  const { language, toggleLanguage, t } = useLanguageStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/home', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/results', label: t('nav.results') },
    { href: '/contact', label: t('nav.contact') }
  ]

  const isActive = (href: string) => {
    if (href === '/home') {
      return pathname === '/' || pathname === '/home'
    }
    return pathname === href
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-border/40 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 sm:py-2">
        <nav className="flex items-center justify-between w-full">
          {/* Desktop Navigation - Full Width Distribution */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link href="/home" className="focus:outline-none">
                <Image
                  src="/logo/ruben real estate_Horizontal.png"
                  alt="Ruben Real Estate Logo"
                  width={240}
                  height={60}
                  className="h-12 sm:h-14 md:h-16 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Navigation Items - Centered */}
            <div className="flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors text-sm xl:text-base ${
                    isActive(item.href)
                      ? 'text-coastal-teal font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            {/* Right Side Buttons */}
            <div className="flex items-center gap-3">
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
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link href="/home" className="focus:outline-none">
                <Image
                  src="/logo/ruben real estate_Horizontal.png"
                  alt="Ruben Real Estate Logo"
                  width={240}
                  height={60}
                  className="h-12 sm:h-14 md:h-16 w-auto"
                  priority
                />
              </Link>
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
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm">
            <div className="absolute top-0 left-0 right-0 bg-white border-b border-border/40 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                {/* Header with Logo and Close button */}
                <div className="flex items-center justify-between mb-6">
                  <Link href="/home" className="focus:outline-none" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src="/logo/ruben real estate_Horizontal.png"
                      alt="Ruben Real Estate Logo"
                      width={200}
                      height={50}
                      className="h-10 sm:h-12 w-auto"
                      priority
                    />
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="border-coastal-slate text-coastal-slate hover:bg-black hover:text-white transition-all duration-300"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-left py-3 px-2 transition-colors text-base ${
                        isActive(item.href)
                          ? 'text-coastal-teal font-semibold bg-coastal-cream/10 rounded-lg'
                          : 'text-muted-foreground hover:text-foreground hover:bg-coastal-cream/5 rounded-lg'
                      }`}
                    >
                      {item.label}
                    </Link>
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
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
