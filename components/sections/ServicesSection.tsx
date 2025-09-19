'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Heart, CheckCircle, Play } from "lucide-react"
import { useLanguageStore } from "@/hooks/useLanguageStore"
import { useEffect, useRef } from "react"

const serviceData = [
  {
    id: 'veterans',
    title: 'services.veterans.title',
    description: 'services.veterans.description',
    features: [
      'services.veterans.feature1',
      'services.veterans.feature2', 
      'services.veterans.feature3'
    ],
    icon: Shield,
    color: 'coastal-teal'
  },
  {
    id: 'investors',
    title: 'services.investors.title',
    description: 'services.investors.description',
    features: [
      'services.investors.feature1',
      'services.investors.feature2',
      'services.investors.feature3'
    ],
    icon: TrendingUp,
    color: 'coastal-steel'
  },
  {
    id: 'families',
    title: 'services.families.title',
    description: 'services.families.description',
    features: [
      'services.families.feature1',
      'services.families.feature2',
      'services.families.feature3'
    ],
    icon: Heart,
    color: 'coastal-sage'
  }
]

export default function ServicesSection() {
  const { t } = useLanguageStore()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.log('Video autoplay failed:', error)
            })
          } else {
            video.pause()
          }
        })
      },
      {
        threshold: 0.5 // Play when 50% of the video is visible
      }
    )

    observer.observe(video)

    return () => {
      observer.unobserve(video)
    }
  }, [])

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-br from-coastal-cream/20 to-coastal-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <Badge className="bg-coastal-teal/20 text-coastal-slate border-coastal-teal">
            <Shield className="w-4 h-4 mr-2" />
            {t('services.badge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-lexend">
            {t('services.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {/* Left Side - Video */}
          <div className="relative lg:col-span-3 order-2 lg:order-1">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/placeholder.jpg"
                muted
                loop
              >
                <source 
                  src="https://res.cloudinary.com/dku1gnuat/video/upload/v1758300266/branded_rskkq0.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right Side - Service Cards */}
          <div className="space-y-4 lg:col-span-2 order-1 lg:order-2">
            {serviceData.map((service) => {
              const IconComponent = service.icon
              
              return (
                <Card 
                  key={service.id}
                  className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className={`p-2 rounded-lg bg-${service.color}/20 text-${service.color} flex-shrink-0`}>
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold font-lexend mb-2 text-foreground">
                          {t(service.title)}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground mb-3 leading-relaxed">
                          {t(service.description)}
                        </p>
                        
                        {/* Features - Only show first 2 */}
                        <ul className="space-y-2">
                          {service.features.slice(0, 2).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-coastal-teal flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-muted-foreground">
                                {t(feature)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
