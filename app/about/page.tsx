"use client"

import PageNavbar from "@/components/sections/PageNavbar"
import Footer from "@/components/sections/Footer"
import TimelineSection from "@/components/sections/TimelineSection"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, GraduationCap, Heart, Users, MapPin, Star, CheckCircle, Shield, Phone, Mail } from "lucide-react"
import useLanguageStore from "@/hooks/useLanguageStore"
import useScrollAnimation from "@/hooks/useScrollAnimation"
import { useEffect } from "react"
import type { aboutTranslations } from "@/translations/about/en"

export default function AboutPage() {
  const { t, getPage } = useLanguageStore()
  const { ref, isVisible } = useScrollAnimation()
  const pageT = getPage('about') as typeof aboutTranslations

  // Handle smooth scroll from other pages
  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = sessionStorage.getItem('scrollToHash')
      if (hash) {
        console.log('About page: Scrolling to hash:', hash)
        sessionStorage.removeItem('scrollToHash')
        
        // Wait for page to fully load
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            console.log('About page: Found element, scrolling to:', hash)
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            
            // Scroll directly to the target section
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          } else {
            console.log('About page: Element not found:', hash)
          }
        }, 500) // Wait for page to load
      }
    }

    handleScrollToSection()
  }, [])

  const credentials = [
    {
      icon: <img src="/icons/about/about elements-12.png" alt="Doctor of Physical Therapy" className="w-16 h-auto" />,
      title: pageT.credentialItems.dpt.title,
      description: pageT.credentialItems.dpt.description
    },
    {
      icon: <img src="/icons/about/about elements-11.png" alt="Rising Star Award" className="w-16 h-auto" />,
      title: pageT.credentialItems.award.title,
      description: pageT.credentialItems.award.description
    },
    {
      icon: <Users className="w-8 h-8" style={{ color: '#5F7D6D' }} />,
      title: pageT.credentialItems.narpm.title,
      description: pageT.credentialItems.narpm.description
    },
    {
      icon: <Shield className="w-8 h-8" style={{ color: '#5F7D6D' }} />,
      title: pageT.credentialItems.broker.title,
      description: pageT.credentialItems.broker.description
    }
  ]

  const values = pageT.values.valuesList

  return (
    <>
      <PageNavbar />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
      <section className="hero-section relative py-32 sm:py-40 md:py-48 lg:py-56 xl:py-64 overflow-hidden -mt-20 pt-64 sm:pt-80 md:pt-88 lg:pt-96 xl:pt-104">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/5-web-or-mls-royal (25 of 47).JPG')",
            backgroundAttachment: "fixed"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-lexend leading-tight">
              {pageT.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed px-4">
              {pageT.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="my-journey">
        <TimelineSection />
      </section>

      {/* Credentials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/images/5-web-or-mls-royal (25 of 47).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
        </div>
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-lexend leading-tight">
              {pageT.credentials.title}
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-2">
              {pageT.credentials.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {credentials.map((credential, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:bg-white/95 h-full">
                <CardContent className="p-2 sm:p-4 lg:p-5 text-center space-y-1 sm:space-y-3 flex flex-col h-full">
                  <div className="flex justify-center min-h-[3rem] sm:min-h-[4rem] items-center">
                    <div className={`flex items-center justify-center ${index === 0 || index === 1 ? 'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16' : 'w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8'} text-coastal-teal`}>
                      {credential.icon}
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-foreground group-hover:text-coastal-teal transition-colors whitespace-pre-line leading-tight">
                    {credential.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-grow">
                    {credential.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
            <div className="space-y-4 sm:space-y-5">
              {/* Decorative element before title */}
              <img 
                src="/icons/about/about elements-02.png" 
                alt="Decorative element" 
                className="w-32 h-auto mb-0 relative z-10"
              />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-coastal-charcoal font-lexend leading-tight -mt-6">
                {pageT.values.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-coastal-slate leading-relaxed">
                {pageT.values.subtitle}
              </p>
              <div className="space-y-2 sm:space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm md:text-base text-coastal-slate leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 sm:space-y-5 mt-6 lg:mt-0">
              <Card className="p-3 sm:p-4 md:p-5 bg-gradient-to-br from-secondary/10 to-coastal-teal/10 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <img src="/icons/about/about elements-05.png" alt="Family First" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-coastal-charcoal leading-tight">{pageT.values.familyFirst.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-coastal-slate leading-relaxed">
                    {pageT.values.familyFirst.description}
                  </p>
                </div>
              </Card>
              
              <Card className="p-3 sm:p-4 md:p-5 bg-gradient-to-br from-coastal-teal/10 to-coastal-sage/10 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-secondary flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-coastal-charcoal leading-tight">{pageT.values.communityFocus.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-coastal-slate leading-relaxed">
                    {pageT.values.communityFocus.description}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strong Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
          <div className="relative mb-4">
            <img 
              src="/icons/home/elementos-06.png" 
              alt="Decorative element" 
              className="absolute -top-12 left-8 sm:left-12 lg:left-16 w-12 sm:w-16 lg:w-20 h-auto object-contain z-10"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-lexend leading-tight">
              {pageT.cta.title}
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
            {pageT.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" className="bg-coastal-teal hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 transition-all duration-300 w-full sm:w-auto" onClick={() => window.open('tel:+15416021026', '_self')}>
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {pageT.cta.callButton}
            </Button>
            <Button size="lg" className="bg-coastal-sage hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 transition-all duration-300 w-full sm:w-auto" onClick={() => window.open('mailto:ruben.o.banuelos@gmail.com', '_self')}>
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {pageT.cta.emailButtonFull}
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {pageT.cta.disclaimer}
          </p>
        </div>
      </section>

        <Footer />
      </main>
    </>
  )
}
