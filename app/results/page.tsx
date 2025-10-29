"use client"

import PageNavbar from "@/components/sections/PageNavbar"
import Footer from "@/components/sections/Footer"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import PortfolioSection from "@/components/sections/PortfolioSection"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Home, Shield, Star, ArrowRight, CheckCircle, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import useScrollAnimation from "@/hooks/useScrollAnimation"
import useLanguageStore from "@/hooks/useLanguageStore"
import { resultsTranslations } from "@/translations/results/en"
import { useRef, useEffect, useState } from "react"

export default function ResultsPage() {
  const { ref, isVisible } = useScrollAnimation()
  const { t, getPage } = useLanguageStore()
  const pageT = getPage('results') as typeof resultsTranslations
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible, play it
            video.play().catch((error) => {
              console.log('Video autoplay failed:', error)
            })
          } else {
            // Video is not visible, pause it
            video.pause()
          }
        })
      },
      {
        threshold: 0.3, // Play when 30% of the video is visible (more sensitive)
        rootMargin: '0px 0px -10% 0px' // Start playing slightly before fully in view
      }
    )

    observer.observe(video)

    return () => {
      observer.unobserve(video)
    }
  }, [])

  // Handle smooth scroll from other pages
  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = sessionStorage.getItem('scrollToHash')
      if (hash) {
        console.log('Results page: Scrolling to hash:', hash)
        sessionStorage.removeItem('scrollToHash')
        
        // Wait for page to fully load
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            console.log('Results page: Found element, scrolling to:', hash)
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            
            // Scroll directly to the target section
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          } else {
            console.log('Results page: Element not found:', hash)
          }
        }, 500) // Wait for page to load
      }
    }

    handleScrollToSection()
  }, [])

  const successMetrics = [
    {
      icon: <img src="/icons/results/results elements-01.png" alt="Homes sold" className="w-12 h-auto sm:w-14 md:w-16" />,
      title: pageT.metrics.homesSold.title,
      value: pageT.metrics.homesSold.value,
      description: pageT.metrics.homesSold.description
    },
    {
      icon: <img src="/icons/results/results elements-02.png" alt="Average sale price" className="w-12 h-auto sm:w-14 md:w-16" />,
      title: pageT.metrics.salePrice.title,
      value: pageT.metrics.salePrice.value,
      description: pageT.metrics.salePrice.description
    },
    {
      icon: <img src="/icons/results/results elements-03.png" alt="Veteran clients" className="w-12 h-auto sm:w-14 md:w-16" />,
      title: pageT.metrics.veteranClients.title,
      value: pageT.metrics.veteranClients.value,
      description: pageT.metrics.veteranClients.description
    },
    {
      icon: <img src="/icons/results/results elements-04.png" alt="Rating" className="w-12 h-auto sm:w-14 md:w-16" />,
      title: pageT.metrics.rating.title,
      value: pageT.metrics.rating.value,
      description: pageT.metrics.rating.description
    }
  ]

  const allTestimonials = [
    {
      name: pageT.testimonials.testimonial1.name,
      text: pageT.testimonials.testimonial1.text,
      rating: 5,
      date: pageT.testimonials.testimonial1.date
    },
    {
      name: pageT.testimonials.testimonial2.name,
      text: pageT.testimonials.testimonial2.text,
      rating: 5,
      date: pageT.testimonials.testimonial2.date
    },
    {
      name: pageT.testimonials.testimonial3.name,
      text: pageT.testimonials.testimonial3.text,
      rating: 5,
      date: pageT.testimonials.testimonial3.date
    },
    {
      name: pageT.testimonials.testimonial4.name,
      text: pageT.testimonials.testimonial4.text,
      rating: 5,
      date: pageT.testimonials.testimonial4.date
    },
    {
      name: pageT.testimonials.testimonial5.name,
      text: pageT.testimonials.testimonial5.text,
      rating: 5,
      date: pageT.testimonials.testimonial5.date
    },
    {
      name: pageT.testimonials.testimonial6.name,
      text: pageT.testimonials.testimonial6.text,
      rating: 5,
      date: pageT.testimonials.testimonial6.date
    },
    {
      name: pageT.testimonials.testimonial7.name,
      text: pageT.testimonials.testimonial7.text,
      rating: 5,
      date: pageT.testimonials.testimonial7.date
    },
    {
      name: pageT.testimonials.testimonial8.name,
      text: pageT.testimonials.testimonial8.text,
      rating: 5,
      date: pageT.testimonials.testimonial8.date
    },
    {
      name: pageT.testimonials.testimonial9.name,
      text: pageT.testimonials.testimonial9.text,
      rating: 5,
      date: pageT.testimonials.testimonial9.date
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % allTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length)
  }

  return (
    <>
      <PageNavbar />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
      <section className="hero-section relative py-32 sm:py-40 md:py-48 lg:py-56 xl:py-64 overflow-hidden -mt-20 pt-64 sm:pt-80 md:pt-88 lg:pt-96 xl:pt-104">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/55-web-or-mls-Riviera (54 of 55).JPG')",
            backgroundAttachment: "fixed"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-lexend leading-tight">
              {pageT.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed px-4">
              {pageT.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Success Metrics Section */}
      <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/images/54-web-or-mls-Riviera (53 of 55).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
        </div>
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend leading-tight">
              {pageT.metrics.title}
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-4">
              {pageT.metrics.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:bg-white/95">
                <CardContent className="p-3 sm:p-4 text-center space-y-2">
                  <div className="flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-coastal-teal transition-colors">
                      {metric.value}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {metric.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {metric.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Video Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <img 
          src="/icons/results/results elements-06.png" 
          alt="" aria-hidden="true"
          className="absolute bottom-0 -right-8 sm:-right-12 md:-right-16 lg:-right-20 xl:-right-24 w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[28rem] select-none pointer-events-none z-10"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8 sm:mb-12 relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-lexend leading-tight">
              {pageT.process.title}
            </h2>
            <div className="relative flex items-center justify-center max-w-lg mx-auto">
              <img 
                src="/icons/home/elementos-08.png" 
                alt="" aria-hidden="true"
                className="absolute -top-2 -left-2 w-5 h-5 object-contain z-10 select-none pointer-events-none"/>
              <p className="text-base sm:text-lg text-muted-foreground px-4 relative z-10">
              {pageT.process.subtitle}
              </p>
              <img 
                src="/icons/home/elementos-09.png" 
                alt="" aria-hidden="true"
                className="absolute -bottom-2 -right-2 w-5 h-5 object-contain z-10 select-none pointer-events-none"/>
            </div>
          </div>
          
          <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              poster="/images/57-web-or-mls-Riviera_drone (3 of 12).JPG"
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
      </section>

      {/* Testimonials Section */}
      <section id="trusted-by-community" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/images/5-web-or-mls-royal (25 of 47).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
        </div>
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend leading-tight">
              {pageT.testimonials.title}
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-4">
              {pageT.testimonials.subtitle}
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {allTestimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:bg-white/95 flex flex-col h-full">
                      <CardContent className="p-4 sm:p-6 space-y-3 flex flex-col flex-1">
                        <div className="flex justify-center space-x-1">
                          {Array.from({ length: testimonial.rating }, (_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <blockquote className="text-sm sm:text-base text-muted-foreground leading-relaxed italic flex-1 text-center">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="text-center mt-auto">
                          <p className="font-semibold text-foreground text-sm sm:text-base">- {testimonial.name}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.date}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {allTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - match Services page style */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
          <div className="relative mb-4">
            <img 
              src="/icons/home/elementos-06.png" 
              alt="Decorative element" 
              className="absolute -top-12 left-8 sm:left-12 lg:left-16 w-12 sm:w-16 lg:w-20 h-auto object-contain z-10"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-lexend leading-tight">
              {pageT.cta.title}
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
            {pageT.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" variant="green" className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 transition-all duration-300 w-full sm:w-auto" onClick={() => window.open('tel:+15416021026', '_self')}>
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {pageT.cta.callButton}
            </Button>
            <Button size="lg" variant="blackOnLight" className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 transition-all duration-300 w-full sm:w-auto" onClick={() => window.open('mailto:ruben.o.banuelos@gmail.com', '_self')}>
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {pageT.cta.emailButton}
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {pageT.cta.disclaimer}
          </p>
        </div>
      </section>

        <Footer />
      </main>
    </>
  )
}
