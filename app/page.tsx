"use client"

import PageNavbar from "@/components/sections/PageNavbar"
import Footer from "@/components/sections/Footer"
import FeaturesSection from "@/components/sections/FeaturesSection"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, TrendingUp, Home, Star, CheckCircle, ArrowRight, Phone, Mail, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import useLanguageStore from "@/hooks/useLanguageStore"
import { homeTranslations } from "@/translations/home/en"

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import("@/components/sections/MapComponent"), {
  ssr: false,
  loading: () => <div className="h-96 bg-coastal-cream rounded-2xl flex items-center justify-center">Loading map...</div>
})

const getAreas = (pageT: typeof homeTranslations) => [
  {
    name: pageT.areas.sanMarcos.name,
    image: "/images/1-web-or-mls-royal (6 of 47).JPG",
    description: pageT.areas.sanMarcos.description
  },
  {
    name: pageT.areas.escondido.name,
    image: "/images/66-web-or-mls-Riviera_drone (1 of 12).JPG",
    description: pageT.areas.escondido.description
  },
  {
    name: pageT.areas.vista.name,
    image: "/images/54-web-or-mls-Riviera (53 of 55).JPG",
    description: pageT.areas.vista.description
  },
  {
    name: pageT.areas.carlsbad.name,
    image: "/images/4-web-or-mls-Encenitas blvd (3 of 28).JPG",
    description: pageT.areas.carlsbad.description
  },
  {
    name: pageT.areas.oceanside.name,
    image: "/images/49-web-or-mls-Riviera (48 of 55).JPG",
    description: pageT.areas.oceanside.description
  }
]

export default function HomePage() {
  const { t, getPage } = useLanguageStore()
  const pageT = getPage('home') as typeof homeTranslations
  const areas = getAreas(pageT)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const router = useRouter()

  // Smooth scroll function for cross-page navigation
  const scrollToSection = (href: string) => {
    console.log('Scrolling to:', href)
    const [path, hash] = href.split('#')
    console.log('Path:', path, 'Hash:', hash)
    console.log('Current pathname:', window.location.pathname)
    
    if (path === window.location.pathname || path === '/') {
      // Same page - scroll to section
      if (hash) {
        console.log('Same page scroll to:', hash)
        setIsScrolling(true)
        setTimeout(() => {
          const element = document.getElementById(hash)
          console.log('Found element:', element)
          if (element) {
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            console.log('Scrolling to position:', elementPosition)
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
            // Reset scrolling state after animation
            setTimeout(() => setIsScrolling(false), 1000)
          } else {
            console.log('Element not found:', hash)
            setIsScrolling(false)
          }
        }, 100)
      }
    } else {
      // Different page - navigate and scroll with effect
      console.log('Different page navigation to:', href)
      setIsScrolling(true)
      
      // Store the hash in sessionStorage for the target page to handle
      if (hash) {
        sessionStorage.setItem('scrollToHash', hash)
      }
      
      // Navigate directly to the target page
      router.push(href)
      setTimeout(() => setIsScrolling(false), 2000)
    }
  }

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

  // Handle smooth scrolling when page loads with hash
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          setTimeout(() => {
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          }, 100) // Small delay to ensure page is fully loaded
        }
      }
    }

    // Run on mount
    handleHashScroll()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashScroll)
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [])

  const goToPrevious = () => {
    setCurrentAreaIndex((prevIndex) => (prevIndex - 1 + areas.length) % areas.length)
  }

  const goToNext = () => {
    setCurrentAreaIndex((prevIndex) => (prevIndex + 1) % areas.length)
  }

  const quickValueProps = [
    {
      icon: <img src="/icons/home/elementos-03.png" alt="VA Expert Icon" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: pageT.whyChoose.vaExpert.title,
      description: pageT.whyChoose.vaExpert.description
    },
    {
      icon: <img src="/icons/home/elementos-04.png" alt="Investment Focus Icon" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: pageT.whyChoose.investmentFocus.title,
      description: pageT.whyChoose.investmentFocus.description
    },
    {
      icon: <img src="/icons/home/elementos-05.png" alt="Family First Icon" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: pageT.whyChoose.familyFirst.title,
      description: pageT.whyChoose.familyFirst.description
    }
  ]

  const serviceAreas = [
    "San Diego", "Chula Vista", "Oceanside", "Escondido", 
    "Carlsbad", "El Cajon", "Vista", "San Marcos"
  ]

  const miniTestimonials = [
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
    }
  ]

  return (
    <>
      <PageNavbar />
    <main className="flex-1 bg-background">
        {/* Hero Section */}
      <section className="hero-section relative py-32 sm:py-40 md:py-48 lg:py-56 xl:py-64 overflow-hidden -mt-20 pt-64 sm:pt-80 md:pt-88 lg:pt-96 xl:pt-104">
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
            <img
              src="/images/56-web-or-mls-Riviera (55 of 55).JPG"
              alt="San Diego North County real estate homes for sale | Ruben Banuelos realtor"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-lexend leading-tight">
              {pageT.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed px-4">
              {pageT.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" variant="whiteOnDark" className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 transition-all duration-300 w-full sm:w-auto" onClick={() => scrollToSection('/contact#consultation-form')}>
                {isScrolling ? pageT.hero.navigating : pageT.hero.scheduleCall}
                <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform ${isScrolling ? 'animate-pulse' : ''}`} />
              </Button>
              <Button size="lg" variant="green" className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 transition-all duration-300 w-full sm:w-auto" onClick={() => window.open('tel:+15416021026', '_self')}>
{pageT.hero.callButton}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Logos */}
      <FeaturesSection />

      {/* Quick Value Props */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/images/38-web-or-mls-Venice (36 of 53).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
        </div>
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 pt-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-lexend mb-6">
              {pageT.whyChoose.title}
            </h2>
            <div className="relative">
              <div className="flex items-center justify-center gap-40 sm:gap-48 lg:gap-56 absolute top-0 left-0 right-0 z-10 -translate-y-6">
                <img 
                  src="/icons/home/elementos_Mesa de trabajo 1.png" 
                  alt="Decorative element"
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
                <img 
                  src="/icons/home/elementos-02.png" 
                  alt="Decorative element"
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
              </div>
              <p className="text-lg text-white/90 max-w-3xl mx-auto relative z-20 mt-4">
                {pageT.whyChoose.subtitle.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < pageT.whyChoose.subtitle.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {quickValueProps.map((prop, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:bg-white/95 h-full">
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center space-y-2 sm:space-y-3 lg:space-y-4 flex flex-col h-full">
                  <div className="flex justify-center mb-1 sm:mb-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                      {prop.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground group-hover:text-coastal-teal transition-colors leading-tight">
                    {prop.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed flex-1">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
              {pageT.experience.title}
            </h2>
            <div className="relative flex items-center justify-center max-w-lg mx-auto">
              {/* Top-left decorative element */}
              <img 
                src="/icons/home/elementos-08.png" 
                alt="Decorative element" 
                className="absolute -top-2 -left-2 w-5 h-5 object-contain z-10"
              />
              
              {/* Subtitle text */}
              <p className="text-lg text-muted-foreground">
                {pageT.experience.subtitle}
              </p>
              
              {/* Bottom-right decorative element */}
              <img 
                src="/icons/home/elementos-09.png" 
                alt="Decorative element" 
                className="absolute -bottom-2 -right-2 w-5 h-5 object-contain z-10"
              />
            </div>
          </div>
          
          <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              poster="/images/1-web-or-mls-royal (6 of 47).JPG"
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

      {/* Service Areas Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-coastal-cream/40 via-white to-coastal-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-lexend">
              {pageT.serviceAreas.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              {pageT.serviceAreas.subtitle}
            </p>
          </div>
          
          {/* Side-by-side layout: Map placeholder on left, Slideshow on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-12 items-start">
            {/* Left Column - Interactive Map */}
            <div className="relative order-1 lg:order-1">
              <p className="text-center text-coastal-sage font-medium mb-4 text-sm sm:text-base px-4">
                {pageT.serviceAreas.mapInstruction}
              </p>
              <div className="h-[18rem] sm:h-[22rem] md:h-[24rem] lg:h-[28rem] xl:h-[32rem] rounded-2xl overflow-hidden bg-coastal-cream">
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
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                      index === currentAreaIndex 
                        ? 'bg-coastal-sage scale-125' 
                        : 'bg-coastal-cream hover:bg-coastal-slate'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Slideshow */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
              <div className="mb-4 sm:mb-6 lg:mb-10"></div>
              <div className="relative h-[18rem] sm:h-[22rem] md:h-[24rem] lg:h-[28rem] xl:h-[32rem] rounded-xl overflow-hidden shadow-2xl">
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
                    className="absolute left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                    aria-label="Previous area"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                    aria-label="Next area"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </button>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {areas[currentAreaIndex].name}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      {areas[currentAreaIndex].description}
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
              variant="blackOnLight"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300"
              onClick={() => scrollToSection('/services#explore-service-areas')}
            >
              {pageT.serviceAreas.exploreButton}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mini About */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
        {/* Background decorative element */}
        <img 
          src="/icons/home/elementos-07.png" 
          alt="Decorative element" 
          className="absolute bottom-0 -left-8 sm:-left-12 lg:-left-16 w-80 sm:w-96 lg:w-[28rem] h-auto object-contain opacity-40 z-0"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/Fearless Headshot.jpg" 
                  alt="Ruben Banuelos - San Diego real estate agent helping veterans, investors, and families"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 38%' }}
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend mb-1 sm:mb-2 lg:mb-3">
                  {pageT.about.title}
                </h2>
                <div className="flex items-center justify-start gap-16 sm:gap-20 lg:gap-24 relative z-10 -ml-2 sm:-ml-3 lg:-ml-4">
                  <img 
                    src="/icons/home/elementos_Mesa de trabajo 1.png" 
                    alt="Decorative element"
                    className="h-6 sm:h-7 lg:h-8 w-auto"
                  />
                  <img 
                    src="/icons/home/elementos-02.png" 
                    alt="Decorative element"
                    className="h-6 sm:h-7 lg:h-8 w-auto"
                  />
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {pageT.about.description}
              </p>
              <Button size="lg" variant="blackOnLight" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300" onClick={() => scrollToSection('/about#my-journey')}>
                {pageT.about.learnMoreButton}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-lexend">
              {pageT.testimonials.title}
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              {pageT.testimonials.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {miniTestimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:bg-white/95 flex flex-col h-full">
                <CardContent className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 flex flex-col flex-1">
                  <div className="flex space-x-1 justify-center sm:justify-start">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed italic flex-1 text-center sm:text-left">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="text-center sm:text-left mt-auto pt-2 border-t border-gray-200/50">
                    <p className="font-semibold text-foreground text-xs sm:text-sm lg:text-base">- {testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" variant="whiteOnDark" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300" onClick={() => scrollToSection('/results#trusted-by-community')}>
              {pageT.testimonials.viewAllButton}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Strong Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
          <div className="relative mb-4">
            <img 
              src="/icons/home/elementos-06.png" 
              alt="Decorative element" 
              className="absolute -top-12 left-8 sm:left-12 lg:left-16 w-12 sm:w-16 lg:w-20 h-auto object-contain z-10"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-lexend leading-tight">
              {pageT.finalCta.title}
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2">
            {pageT.finalCta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" variant="green" className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 transition-all duration-300 w-full sm:w-auto" onClick={() => window.open('tel:+15416021026', '_self')}>
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {pageT.finalCta.callButton}
            </Button>
            <Button size="lg" variant="blackOnLight" className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 transition-all duration-300 w-full sm:w-auto" onClick={() => window.open('mailto:ruben.o.banuelos@gmail.com', '_self')}>
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {pageT.finalCta.emailButton}
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {pageT.finalCta.disclaimer}
          </p>
        </div>
      </section>

      <Footer />
    </main>
    </>
  )
}
