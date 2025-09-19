"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
    detailedDescription: "San Marcos is the hometown hub of North County. Known for its strong schools, family-friendly neighborhoods, and expanding business scene, it's a prime location for both first-time buyers and seasoned investors."
  },
  {
    name: "Escondido", 
    image: "/images/1-web-or-mls-Venice (20 of 53).JPG",
    description: "Historic charm meets modern amenities",
    detailedDescription: "Escondido is a vibrant community in North County San Diego, offering excellent opportunities for both residents and investors. With its strategic location and growing amenities, it represents one of the most promising areas in the region."
  },
  {
    name: "Vista",
    image: "/images/1-web-or-mls-Riviera_drone (9 of 12).JPG", 
    description: "Family-friendly with great parks",
    detailedDescription: "Vista blends affordability with opportunity, making it attractive for house hackers and families alike. With its mix of suburban comfort and new development, Vista continues to draw those looking for long-term growth."
  },
  {
    name: "Carlsbad",
    image: "/images/1-web-or-mls-royal (6 of 47).JPG",
    description: "Coastal living at its finest",
    detailedDescription: "Carlsbad is coastal living at its best. Families love its beaches and top-ranked schools, while investors see strong rental demand and appreciation potential. It's the perfect balance of lifestyle and return."
  },
  {
    name: "Oceanside",
    image: "/images/1-web-or-mls-Venice (20 of 53).JPG",
    description: "Beach community with character",
    detailedDescription: "Oceanside combines a relaxed beach vibe with a revitalized downtown and military presence. From VA loan opportunities to waterfront investments, it offers something unique for veterans, families, and investors."
  }
]

export default function ServiceAreasMapSection() {
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentAreaIndex((prevIndex) => (prevIndex - 1 + areas.length) % areas.length)
  }

  const goToNext = () => {
    setCurrentAreaIndex((prevIndex) => (prevIndex + 1) % areas.length)
  }


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-lexend">
            Local Expertise Where It Matters Most
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Knowledge of schools, commutes and neighborhood markets.
          </p>
        </div>
        
        {/* Side-by-side layout: Map on left, Slideshow on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Interactive Map */}
          <div className="relative">
            <p className="text-center text-coastal-sage font-medium mb-4">
              Click on the locations to explore each area
            </p>
            <div className="h-[28rem] rounded-2xl overflow-hidden bg-coastal-cream">
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
          <div className="space-y-6">
            <div className="mb-10"></div>
            <div className="relative h-[28rem] rounded-xl overflow-hidden shadow-2xl">
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
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  aria-label="Previous area"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  aria-label="Next area"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {areas[currentAreaIndex].name}
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    {areas[currentAreaIndex].detailedDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
