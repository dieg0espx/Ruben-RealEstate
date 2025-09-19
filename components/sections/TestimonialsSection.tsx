"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState } from "react"
import { useLanguageStore } from "@/hooks/useLanguageStore"

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
    name: "Olivia Guinn",
    rating: 5,
    date: "1 year ago",
    translationKey: "testimonials.8"
  },
  {
    id: 9,
    name: "C.J. Penkert",
    rating: 5,
    date: "1 year ago",
    translationKey: "testimonials.9"
  },
  {
    id: 10,
    name: "Irene Dolan",
    rating: 5,
    date: "1 year ago",
    translationKey: "testimonials.10"
  }
]

export default function TestimonialsSection() {
  const { t } = useLanguageStore()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 3) % testimonials.length)
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 3 + testimonials.length) % testimonials.length)
  }

  const goToTestimonials = (index: number) => {
    setCurrentIndex(index)
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
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  const getTotalPages = () => {
    return Math.ceil(testimonials.length / 3)
  }

  const getCurrentPage = () => {
    return Math.floor(currentIndex / 3)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-coastal-cream/30 to-coastal-sage/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-coastal-sage/20 text-coastal-slate border-coastal-sage">
            <Quote className="w-4 h-4 mr-2" />
            {t('testimonials.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-lexend">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300  h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="space-y-4 flex-1">
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <div className="p-2 rounded-full bg-coastal-sage/10">
                        <Quote className="w-6 h-6 text-coastal-sage" />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-sm md:text-base text-muted-foreground leading-relaxed italic text-center">
                      "{t(testimonial.translationKey)}"
                    </blockquote>
                  </div>

                  {/* Client Info */}
                  <div className="text-center space-y-1 mt-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonials}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-coastal-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonials}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-coastal-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: getTotalPages() }, (_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonials(index * 3)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === getCurrentPage()
                  ? 'bg-coastal-sage scale-125'
                  : 'bg-coastal-sage/30 hover:bg-coastal-sage/50'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
      </div>
    </section>
  )
}
