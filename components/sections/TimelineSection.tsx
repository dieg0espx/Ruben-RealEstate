"use client"

import useScrollAnimation from "@/hooks/useScrollAnimation"
import useLanguageStore from "@/hooks/useLanguageStore"
import { GraduationCap, Award, Home, Users, Star, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TimelineItem {
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const getTimelineData = (t: (key: string) => string): TimelineItem[] => [
  {
    title: t('about.step1.title'),
    description: t('about.step1.description'),
    icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />,
    color: "text-coastal-sage"
  },
  {
    title: t('about.step2.title'),
    description: t('about.step2.description'),
    icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />,
    color: "text-coastal-sage"
  },
  {
    title: t('about.step3.title'),
    description: t('about.step3.description'),
    icon: <Home className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />,
    color: "text-coastal-sage"
  },
  {
    title: t('about.step4.title'),
    description: t('about.step4.description'),
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />,
    color: "text-coastal-sage"
  }
]

export default function TimelineSection() {
  const { ref, isVisible } = useScrollAnimation()
  const { t } = useLanguageStore()
  const timelineData = getTimelineData(t)

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Timeline - Left Column */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 sm:left-6 md:left-7 lg:left-8 xl:left-9 top-0 bottom-0 w-0.5 opacity-60 z-0 hidden md:block" style={{
              background: 'linear-gradient(to bottom, #5F7D6D 0%, #5F7D6D 70%, transparent 100%)'
            }}></div>
            
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start space-x-8 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-20 flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                      <div className="text-white">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 min-w-0">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90">
                      <CardContent className="pt-1 px-3 sm:px-4 md:px-5 lg:px-6 pb-2">
                        <div className="mb-1 sm:mb-2">
                          <span className="font-semibold text-sm sm:text-base md:text-lg text-coastal-sage leading-tight">{item.title}</span>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Right Column */}
          <div className="relative flex">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/Fearless Headshot.jpg" 
                alt="Ruben Banuelos - Real Estate Professional"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Badges overlay on image - Top Left */}
            <div className="absolute top-2 left-2 sm:top-6 sm:left-6 space-y-2 sm:space-y-4">
              <div className="bg-secondary/90 backdrop-blur-sm px-2 py-2 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl shadow-xl">
                <div className="text-xs sm:text-lg font-bold text-white">{t('about.imageOverlay.dreNumber')}</div>
                <div className="text-xs sm:text-sm text-white/80">{t('about.imageOverlay.licensedBroker')}</div>
              </div>
              <div className="bg-secondary/90 backdrop-blur-sm px-2 py-2 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl shadow-xl">
                <div className="text-xs sm:text-lg font-bold text-white">{t('about.imageOverlay.narpm')}</div>
                <div className="text-xs sm:text-sm text-white/80">{t('about.imageOverlay.member')}</div>
              </div>
            </div>
            
            {/* Badge overlay on image - Bottom Right */}
            <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6">
              <div className="bg-secondary/90 backdrop-blur-sm px-2 py-2 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl shadow-xl">
                <div className="text-xs sm:text-lg font-bold text-white">{t('about.imageOverlay.risingStar')}</div>
                <div className="text-xs sm:text-sm text-white/80">{t('about.imageOverlay.teamFearless')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
