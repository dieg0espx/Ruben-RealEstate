'use client'

import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, Heart, Home, TrendingUp } from "lucide-react"
import Image from "next/image"
import useLanguageStore from "@/hooks/useLanguageStore"
import useScrollAnimation from "@/hooks/useScrollAnimation"

export default function AboutSection() {
  const { t } = useLanguageStore()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id="about" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Left Column - Image with Badges */}
            <div className={`relative h-full transition-all duration-800 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full rounded-2xl overflow-hidden">
                <Image
                  src="/Fearless Headshot.jpg"
                  alt="Ruben Banuelos - Real Estate Expert"
                  fill
                  className="object-cover"
                />
                
              {/* Badges overlay on image */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6 space-y-2 sm:space-y-3 md:space-y-4">
                <div className="bg-white/90 backdrop-blur-sm px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-lg sm:rounded-xl shadow-xl">
                  <div className="text-xs sm:text-sm md:text-lg font-bold text-coastal-charcoal">DRE# 02153497</div>
                  <div className="text-xs sm:text-sm text-coastal-sage">Licensed Broker</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-lg sm:rounded-xl shadow-xl">
                  <div className="text-xs sm:text-sm md:text-lg font-bold text-coastal-teal">NARPM</div>
                  <div className="text-xs sm:text-sm text-coastal-sage">Member</div>
                </div>
              </div>
              
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6">
                <div className="bg-white/90 backdrop-blur-sm px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-lg sm:rounded-xl shadow-xl">
                  <div className="text-xs sm:text-sm md:text-lg font-bold text-coastal-charcoal">"Rising Star"</div>
                  <div className="text-xs sm:text-sm text-coastal-sage">1st Year at Team Fearless 2024</div>
                </div>
              </div>
              </div>
            </div>
            
            {/* Right Column - Timeline */}
            <div className="space-y-4 sm:space-y-6">
              {/* Timeline Title and Subtitle */}
              <div className="space-y-3 sm:space-y-4">
                <Badge className={`bg-coastal-cream/20 text-coastal-slate border-coastal-cream transition-all duration-800 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                  <Users className="w-4 h-4 mr-2" />
                  {t('about.badge')}
                </Badge>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-lexend transition-all duration-800 delay-400 leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                  {t('about.title')}
                </h2>
                <p className={`text-sm sm:text-base md:text-lg text-muted-foreground transition-all duration-800 delay-600 leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                  {t('about.subtitle')}
                </p>
              </div>
              
              {/* Timeline Steps */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1.5 sm:left-2.5 md:left-3.5 lg:left-4.5 top-6 bottom-6 w-0.5 bg-coastal-teal opacity-60 z-10"></div>
                
                <div className="space-y-6 sm:space-y-8 md:space-y-10">
              {/* Step 1: Healthcare Foundation */}
              <div className={`flex items-start gap-3 sm:gap-4 md:gap-6 transition-all duration-800 delay-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 rounded-full flex items-center justify-center shadow-lg relative z-30" style={{backgroundColor: '#5F7D6D'}}>
                    <GraduationCap className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5 shadow-lg border border-gray-100">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 leading-tight">{t('about.step1.title')}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t('about.step1.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2: Family Motivation */}
              <div className={`flex items-start gap-3 sm:gap-4 md:gap-6 transition-all duration-800 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 rounded-full flex items-center justify-center shadow-lg relative z-30" style={{backgroundColor: '#5F7D6D'}}>
                    <Heart className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5 shadow-lg border border-gray-100">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 leading-tight">{t('about.step2.title')}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t('about.step2.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Real Estate Transition */}
              <div className={`flex items-start gap-3 sm:gap-4 md:gap-6 transition-all duration-800 delay-1200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 rounded-full flex items-center justify-center shadow-lg relative z-30" style={{backgroundColor: '#5F7D6D'}}>
                    <Home className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5 shadow-lg border border-gray-100">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 leading-tight">{t('about.step3.title')}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t('about.step3.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4: Rising Star */}
              <div className={`flex items-start gap-3 sm:gap-4 md:gap-6 transition-all duration-800 delay-1400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 rounded-full flex items-center justify-center shadow-lg relative z-30" style={{backgroundColor: '#5F7D6D'}}>
                    <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5 shadow-lg border border-gray-100">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2 leading-tight">{t('about.step4.title')}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t('about.step4.description')}
                    </p>
                  </div>
                </div>
              </div>
                </div>
              </div>
              
            </div>
          </div>
      </div>
    </section>
  )
}
