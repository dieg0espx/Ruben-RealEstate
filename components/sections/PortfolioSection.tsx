"use client"

import { Badge } from "@/components/ui/badge"
import { Camera } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const portfolioItems = [
  {
    id: 1,
    src: "/images/2-web-or-mls-Encenitas blvd (1 of 28).JPG",
    caption: "ADU Project – Vista",
    category: "ADU"
  },
  {
    id: 2,
    src: "/images/5-web-or-mls-Encenitas blvd (4 of 28).JPG",
    caption: "Investment Property – San Marcos",
    category: "Investment"
  },
  {
    id: 3,
    src: "/images/2-web-or-mls-royal (22 of 47).JPG",
    caption: "Luxury Home – Carlsbad",
    category: "Luxury"
  },
  {
    id: 4,
    src: "/images/4-web-or-mls-royal (24 of 47).JPG",
    caption: "Family Home – Oceanside",
    category: "Residential"
  },
  {
    id: 5,
    src: "/images/38-web-or-mls-Venice (36 of 53).JPG",
    caption: "ADU Conversion – Escondido",
    category: "ADU"
  },
  {
    id: 6,
    src: "/images/42-web-or-mls-Venice (40 of 53).JPG",
    caption: "Investment Duplex – Vista",
    category: "Investment"
  },
  {
    id: 7,
    src: "/images/41-web-or-mls-Venice (39 of 53).JPG",
    caption: "Custom Build – San Marcos",
    category: "Residential"
  },
  {
    id: 8,
    src: "/images/2-web-or-mls-Venice (46 of 53).JPG",
    caption: "Multi-Family – Carlsbad",
    category: "Investment"
  },
  {
    id: 9,
    src: "/images/49-web-or-mls-Riviera (48 of 55).JPG",
    caption: "ADU Addition – Oceanside",
    category: "ADU"
  },
  {
    id: 10,
    src: "/images/52-web-or-mls-Riviera (51 of 55).JPG",
    caption: "Rental Property – Escondido",
    category: "Investment"
  },
  {
    id: 11,
    src: "/images/56-web-or-mls-Riviera (55 of 55).JPG",
    caption: "Family Residence – Vista",
    category: "Residential"
  },
  {
    id: 12,
    src: "/images/1-web-or-mls-Venice (20 of 53).JPG",
    caption: "Luxury Living – San Marcos",
    category: "Luxury"
  }
]

export default function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? portfolioItems.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === portfolioItems.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <>
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-coastal-sage/20 text-coastal-slate border-coastal-sage">
              <Camera className="w-4 h-4 mr-2" />
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-lexend">
              Project Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing successful real estate projects across North County San Diego
            </p>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full h-full">
              <Image
                src={portfolioItems[selectedImage].src}
                alt={portfolioItems[selectedImage].caption}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>


            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
              {selectedImage + 1} / {portfolioItems.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
