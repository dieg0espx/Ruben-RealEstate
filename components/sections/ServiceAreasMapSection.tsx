"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageStore } from "@/hooks/useLanguageStore"

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => <div className="h-96 bg-coastal-cream rounded-2xl flex items-center justify-center">Loading map...</div>
})

const areas = [
  {
    name: "San Marcos",
    image: "/images/1-web-or-mls-royal (6 of 47).JPG",
    description: "Growing community with excellent schools",
    translationKey: "service_areas.san_marcos.description"
  },
  {
    name: "Escondido", 
    image: "/images/1-web-or-mls-Venice (20 of 53).JPG",
    description: "Historic charm meets modern amenities",
    translationKey: "service_areas.escondido.description"
  },
  {
    name: "Vista",
    image: "/images/1-web-or-mls-Riviera_drone (9 of 12).JPG", 
    description: "Family-friendly with great parks",
    translationKey: "service_areas.vista.description"
  },
  {
    name: "Carlsbad",
    image: "/images/2-web-or-mls-royal (22 of 47).JPG",
    description: "Coastal living at its finest",
    translationKey: "service_areas.carlsbad.description"
  },
  {
    name: "Oceanside",
    image: "/images/1-web-or-mls-Riviera_drone (7 of 12).JPG",
    description: "Beach community with character",
    translationKey: "service_areas.oceanside.description"
  }
]

export default function ServiceAreasMapSection() {
  const { t } = useLanguageStore()
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentAreaIndex((prevIndex) => (prevIndex - 1 + areas.length) % areas.length)
  }

  const goToNext = () => {
    setCurrentAreaIndex((prevIndex) => (prevIndex + 1) % areas.length)
  }


  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-lexend animate-fade-in-up">
            {t('service_areas.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 animate-fade-in-up animation-delay-200">
            {t('service_areas.subtitle')}
          </p>
        </div>
        
        {/* Side-by-side layout: Map on left, Slideshow on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left Column - Interactive Map */}
          <div className="relative order-1 lg:order-1 animate-fade-in-left">
            <p className="text-center text-coastal-sage font-medium mb-4 text-sm sm:text-base">
              {t('service_areas.map_instruction')}
            </p>
            <div className="h-[20rem] sm:h-[24rem] lg:h-[28rem] rounded-2xl overflow-hidden bg-coastal-cream">
              <MapComponent 
                currentAreaIndex={currentAreaIndex}
                setCurrentAreaIndex={setCurrentAreaIndex}
              />
            </div>
            
            {/* Area Indicators below the map */}
            <div className="flex justify-center gap-2 mt-4">
              {areas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAreaIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentAreaIndex 
                      ? 'bg-coastal-sage scale-125' 
                      : 'bg-coastal-cream hover:bg-coastal-slate'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Slideshow */}
          <div className="space-y-6 order-2 lg:order-2 animate-fade-in-right">
            <div className="mb-6 sm:mb-10"></div>
            <div className="relative h-[20rem] sm:h-[24rem] lg:h-[28rem] rounded-xl overflow-hidden shadow-2xl">
              <div className="relative h-full">
                <Image
                  src={areas[currentAreaIndex].image}
                  alt={areas[currentAreaIndex].name}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  aria-label="Previous area"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  aria-label="Next area"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {areas[currentAreaIndex].name}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    {t(areas[currentAreaIndex].translationKey)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Button 
            size="lg" 
            className="bg-coastal-teal hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            {t('service_areas.button')}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
