'use client'

import { Button } from "@/components/ui/button"
import { Phone, TrendingUp, Home } from "lucide-react"
import Image from "next/image"
import useLanguageStore from "@/hooks/useLanguageStore"
import useScrollAnimation from "@/hooks/useScrollAnimation"

export default function HeroSection() {
  const { t } = useLanguageStore()

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
  }

  return (
    <section className="relative min-h-[100vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dku1gnuat/video/upload/v1758299891/HeroPageVideo_wd7fp5.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <Image
            src="/images/61-web-or-mls-Riviera_drone (7 of 12).JPG"
            alt="San Diego Real Estate"
            fill
            className="object-cover"
            priority
          />
        </video>
        {/* Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight font-lexend text-white animate-fade-in-up">
            {t('hero.title')}
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-pretty px-4 animate-fade-in-up animation-delay-200">
            {t('hero.subtitle')}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-6 px-4 animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              className="w-auto bg-coastal-teal/20 hover:bg-[#5F7D6D] hover:text-white backdrop-blur-sm text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 cursor-pointer"
              onClick={() => scrollToSection('contact')}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {t('hero.schedule_call')}
            </Button>
            <Button 
              size="lg" 
              className="w-auto bg-coastal-sage/20 hover:bg-[#5F7D6D] hover:text-white backdrop-blur-sm text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 cursor-pointer"
              onClick={() => scrollToSection('properties')}
            >
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {t('hero.investment_options')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
