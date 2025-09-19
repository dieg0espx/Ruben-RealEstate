'use client'

import { Button } from "@/components/ui/button"
import { Phone, TrendingUp, Home } from "lucide-react"
import Image from "next/image"
import { useLanguageStore } from "@/hooks/useLanguageStore"

export default function HeroSection() {
  const { t } = useLanguageStore()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight font-lexend text-white">
            {t('hero.title')}
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-pretty">
            {t('hero.subtitle')}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
            <Button size="lg" className="bg-coastal-teal/20 hover:bg-coastal-teal/30 hover:scale-105 backdrop-blur-sm text-white text-lg px-8 py-4 transition-all duration-300 cursor-pointer">
              <Phone className="w-5 h-5 mr-2" />
              {t('hero.schedule_call')}
            </Button>
            <Button size="lg" className="bg-coastal-sage/20 hover:bg-coastal-sage/30 hover:scale-105 backdrop-blur-sm text-white text-lg px-8 py-4 transition-all duration-300 cursor-pointer">
              <TrendingUp className="w-5 h-5 mr-2" />
              {t('hero.investment_options')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
