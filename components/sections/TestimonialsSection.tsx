"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguageStore } from "@/hooks/useLanguageStore"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
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

        {/* Testimonials Carousel */}
        <div className={`transition-all duration-800 delay-600 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12'}`}>
          <div className="testimonials-carousel">
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-3">
                  <Card className="group hover:shadow-2xl transition-all duration-500 h-[650px] border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:scale-[1.02] flex flex-col">
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
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </section>
  )
}
