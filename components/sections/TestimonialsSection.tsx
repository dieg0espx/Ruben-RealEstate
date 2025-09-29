"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"
import useLanguageStore from "@/hooks/useLanguageStore"
import useScrollAnimation from "@/hooks/useScrollAnimation"

const testimonials = [
  {
    id: 1,
    name: "Photogenic SD",
    rating: 5,
    date: "3 months ago",
    translationKey: "testimonials.1"
  },
  {
    id: 2,
    name: "Ella Durbin",
    rating: 5,
    date: "7 months ago",
    translationKey: "testimonials.2"
  },
  {
    id: 3,
    name: "Jackson W",
    rating: 5,
    date: "8 months ago",
    translationKey: "testimonials.3"
  },
  {
    id: 4,
    name: "Juan Ramirez",
    rating: 5,
    date: "1 year ago",
    translationKey: "testimonials.4"
  },
  {
    id: 5,
    name: "Hayley Shams",
    rating: 5,
    date: "10 months ago",
    translationKey: "testimonials.5"
  },
  {
    id: 6,
    name: "Male Beatie",
    rating: 5,
    date: "1 year ago",
    translationKey: "testimonials.6"
  },
  {
    id: 7,
    name: "Melanie Callaway",
    rating: 5,
    date: "1 year ago",
    translationKey: "testimonials.7"
  },
  {
    id: 8,
    name: "Irene Dolan",
    rating: 5,
    date: "1 year ago",
    translationKey: "testimonials.10"
  },
  {
    id: 9,
    name: "C.J. Penkert",
    rating: 5,
    date: "1 year ago",
    translationKey: "testimonials.9"
  }
]

export default function TestimonialsSection() {
  const { t } = useLanguageStore()
  const { ref, isVisible } = useScrollAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToTestimonials = (index: number) => {
    const maxIndex = testimonials.length - 3
    setCurrentIndex(Math.min(index, maxIndex))
  }


  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = currentIndex + i
      if (index < testimonials.length) {
        visible.push(testimonials[index])
      }
    }
    return visible
  }

  const getTotalPages = () => {
    // We have 9 testimonials and show 3 per page, so we have 3 pages
    return Math.ceil(testimonials.length / 3)
  }

  const getCurrentPage = () => {
    return Math.floor(currentIndex / 3)
  }

  return (
    <section ref={ref} id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/40 via-white to-coastal-sage/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-coastal-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-coastal-sage rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-coastal-steel rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <Badge className={`bg-coastal-teal/20 text-coastal-slate border-coastal-teal px-4 sm:px-6 py-2 text-sm font-medium transition-all duration-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            {t('testimonials.badge')}
          </Badge>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-lexend transition-all duration-800 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            {t('testimonials.title')}
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 transition-all duration-800 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Mobile Testimonials Carousel */}
        <div className="block md:hidden">
          <div className="relative">
            <Card className="group hover:shadow-2xl transition-all duration-500 h-[600px] border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:scale-[1.02]">
              <CardContent className="p-6 h-full flex flex-col relative">
                {/* Enhanced Stars */}
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Enhanced Testimonial Text */}
                <blockquote className="text-base text-muted-foreground leading-relaxed text-center flex-1 italic">
                  "{t(testimonials[currentIndex].translationKey)}"
                </blockquote>

                {/* Enhanced Client Info */}
                <div className="text-center space-y-2 mt-6">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-coastal-teal transition-colors duration-300">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-coastal-sage font-medium">
                    {testimonials[currentIndex].date}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-black transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-black transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Testimonials Grid */}
        <div className={`hidden md:block transition-all duration-800 delay-600 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`}>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card key={testimonial.id} className="group hover:shadow-2xl transition-all duration-500 h-[650px] border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:scale-[1.02] flex flex-col">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col relative flex-1">
                  {/* Enhanced Stars */}
                  <div className="flex justify-center space-x-1 mb-4 sm:mb-6">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Enhanced Testimonial Text */}
                  <blockquote className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center flex-1 italic">
                    "{t(testimonial.translationKey)}"
                  </blockquote>

                  {/* Enhanced Client Info */}
                  <div className="text-center space-y-2 mt-6 sm:mt-8">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-coastal-teal transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-coastal-sage font-medium">
                      {testimonial.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-6 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-coastal-sage scale-125 shadow-lg'
                  : 'bg-coastal-sage/30 hover:bg-coastal-sage/60 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Desktop Dots Indicator */}
        <div className="hidden md:flex justify-center space-x-3 mt-8 sm:mt-12">
          {Array.from({ length: getTotalPages() }, (_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonials(index * 3)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === getCurrentPage()
                  ? 'bg-black scale-125 shadow-lg'
                  : 'bg-black/30 hover:bg-black/60 hover:scale-110'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}