'use client'

import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, Heart, Home, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useLanguageStore } from "@/hooks/useLanguageStore"

export default function AboutSection() {
  const { t } = useLanguageStore()

  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left Column - Image with Badges */}
            <div className="relative h-full">
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-full rounded-2xl overflow-hidden">
                <Image
                  src="/Fearless Headshot.jpg"
                  alt="Ruben Banuelos - Real Estate Expert"
                  fill
                  className="object-cover"
                />
                
              {/* Badges overlay on image */}
              <div className="absolute top-2 left-2 sm:top-6 sm:left-6 space-y-2 sm:space-y-4">
                <div className="bg-white/90 backdrop-blur-sm px-2 py-2 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl shadow-xl">
                  <div className="text-xs sm:text-lg font-bold text-coastal-charcoal">DRE# 02153497</div>
                  <div className="text-xs sm:text-sm text-coastal-sage">Licensed Broker</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-2 py-2 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl shadow-xl">
                  <div className="text-xs sm:text-lg font-bold text-coastal-teal">NARPM</div>
                  <div className="text-xs sm:text-sm text-coastal-sage">Member</div>
                </div>
              </div>
              
              <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6">
                <div className="bg-white/90 backdrop-blur-sm px-2 py-2 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl shadow-xl">
                  <div className="text-xs sm:text-lg font-bold text-coastal-charcoal">"Rising Star"</div>
                  <div className="text-xs sm:text-sm text-coastal-sage">1st Year at Team Fearless 2024</div>
                </div>
              </div>
              </div>
            </div>
            
            {/* Right Column - Timeline */}
            <div className="space-y-6">
              {/* Timeline Title and Subtitle */}
              <div className="space-y-4">
                <Badge className="bg-coastal-cream/20 text-coastal-slate border-coastal-cream">
                  <Users className="w-4 h-4 mr-2" />
                  {t('about.badge')}
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-lexend">
                  {t('about.title')}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {t('about.subtitle')}
                </p>
              </div>
              
              {/* Timeline Steps */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-0.5 opacity-60 z-10" style={{
                  background: 'linear-gradient(to bottom, #5F7D6D 0%, #5F7D6D 70%, transparent 100%)'
                }}></div>
                
                <div className="space-y-6 sm:space-y-8">
              {/* Step 1: Healthcare Foundation */}
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg relative z-20" style={{backgroundColor: '#5F7D6D'}}>
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{t('about.step1.title')}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t('about.step1.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2: Family Motivation */}
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg relative z-20" style={{backgroundColor: '#5F7D6D'}}>
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{t('about.step2.title')}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t('about.step2.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Real Estate Transition */}
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg relative z-20" style={{backgroundColor: '#5F7D6D'}}>
                    <Home className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{t('about.step3.title')}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t('about.step3.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4: Rising Star */}
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg relative z-20" style={{backgroundColor: '#5F7D6D'}}>
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{t('about.step4.title')}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
