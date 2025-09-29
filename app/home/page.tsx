"use client"

import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import FeaturesSection from "@/components/sections/FeaturesSection"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, TrendingUp, Home, Star, CheckCircle, ArrowRight, Phone, Mail, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import("@/components/sections/MapComponent"), {
  ssr: false,
  loading: () => <div className="h-96 bg-coastal-cream rounded-2xl flex items-center justify-center">Loading map...</div>
})

const areas = [
  {
    name: "San Marcos",
    image: "/images/1-web-or-mls-royal (6 of 47).JPG",
    description: "Growing community with excellent schools"
  },
  {
    name: "Escondido", 
    image: "/images/1-web-or-mls-Venice (20 of 53).JPG",
    description: "Historic charm meets modern amenities"
  },
  {
    name: "Vista",
    image: "/images/1-web-or-mls-Riviera_drone (9 of 12).JPG", 
    description: "Family-friendly with great parks"
  },
  {
    name: "Carlsbad",
    image: "/images/2-web-or-mls-royal (22 of 47).JPG",
    description: "Coastal living at its finest"
  },
  {
    name: "Oceanside",
    image: "/images/62-web-or-mls-Riviera_drone (8 of 12).JPG",
    description: "Beach community with character"
  }
]

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0)

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

  const goToPrevious = () => {
    setCurrentAreaIndex((prevIndex) => (prevIndex - 1 + areas.length) % areas.length)
  }

  const goToNext = () => {
    setCurrentAreaIndex((prevIndex) => (prevIndex + 1) % areas.length)
  }

  const quickValueProps = [
    {
      icon: <Shield className="w-8 h-8 text-coastal-teal" />,
      title: "VA Loan Expert",
      description: "Specialized knowledge to maximize your veteran benefits"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-coastal-sage" />,
      title: "Investment Focus",
      description: "Strategic guidance for building real estate wealth"
    },
    {
      icon: <Home className="w-8 h-8 text-coastal-steel" />,
      title: "Family First",
      description: "Healthcare background brings empathy to every transaction"
    }
  ]

  const serviceAreas = [
    "San Diego", "Chula Vista", "Oceanside", "Escondido", 
    "Carlsbad", "El Cajon", "Vista", "San Marcos"
  ]

  const miniTestimonials = [
    {
      name: "Ella Durbin",
      text: "Ruben was incredibly helpful for us when we were looking for a tenant for our home. He is knowledgeable, responsive, kind, and understanding. He was able to learn with us and took all our feedback seriously. Couldn't recommend him enough. We will definitely be working with Ruben in the future for any placement or property manager needs.",
      rating: 5,
      date: "7 months ago"
    },
    {
      name: "Jackson W", 
      text: "Ruben is awesome! If there were a way to give him 6 stars I would. He is super responsive, and really stays on top of things well. It was very comforting to know we had someone who we could really trust throughout the process. He made everything very smooth and seamless, answered all of our questions and had excellent insight. If you're looking for a real estate agent, Ruben will exceed your expectations.",
      rating: 5,
      date: "8 months ago"
    },
    {
      name: "Male Beatie",
      text: "Ruben is very knowledgeable in the home buying and selling process. He educated his clients. He explains everything clearly. Always answers his phone. He makes the home buying/selling process smooth. He is patient and an has a lot of insight and expertise in the RE industry. Ruben listens to his clients needs.",
      rating: 5,
      date: "1 year ago"
    }
  ]

  return (
    <main className="flex-1 bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[100vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
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
              src="/images/61-web-or-mls-Riviera_drone (7 of 12).JPG"
              alt="San Diego Real Estate"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </video>
          {/* Dark gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-lexend">
              Your North County Home Starts Here
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Guiding veterans families and investors to their next chapter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-coastal-teal/20 hover:bg-coastal-teal hover:text-white backdrop-blur-sm text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300">
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" className="bg-coastal-sage/20 hover:bg-coastal-sage hover:text-white backdrop-blur-sm text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300">
                Call (619) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Logos */}
      <FeaturesSection />

      {/* Quick Value Props */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/40 via-white to-coastal-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
              Why Choose Ruben?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unique advantages that set me apart from traditional real estate agents
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {quickValueProps.map((prop, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-coastal-cream/20 to-coastal-sage/10 hover:from-coastal-teal/5 hover:to-coastal-sage/5">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-coastal-teal transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
              Experience the Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how our process works and why clients trust us
            </p>
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
              Local Expertise Where It Matters Most
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Knowledge of schools, commutes and neighborhood markets.
            </p>
          </div>
          
          {/* Side-by-side layout: Map placeholder on left, Slideshow on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Left Column - Interactive Map */}
            <div className="relative order-1 lg:order-1">
              <p className="text-center text-coastal-sage font-medium mb-4 text-sm sm:text-base">
                Click on the locations to explore each area
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
            <div className="space-y-6 order-2 lg:order-2">
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
              className="bg-coastal-teal hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300"
            >
              Explore My Service Areas
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Mini About */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/Fearless Headshot.jpg" 
                  alt="Ruben Banuelos - Real Estate Professional"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 38%' }}
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
                About Ruben
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From healthcare to real estate, Ruben brings discipline, empathy, and a service-first mindset to every client. As a Broker and Property Manager, he helps veterans, families, and investors achieve financial independence through smart homeownership and investments.
              </p>
              <Button size="lg" className="bg-coastal-teal hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300">
                Learn More About Ruben
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/7-web-or-mls-royal (27 of 47).JPG')"
            }}
          ></div>
        </div>
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-lexend">
              Trusted by the Community
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Hear directly from the people who turned their goals into reality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {miniTestimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:bg-white/95 flex flex-col">
                <CardContent className="p-8 space-y-4 flex flex-col flex-1">
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-base text-muted-foreground leading-relaxed italic flex-1">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="text-left mt-auto">
                    <p className="font-semibold text-foreground">- {testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-white hover:bg-secondary hover:text-white text-coastal-teal text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300">
              View All Testimonials
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Strong Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
            Let's Build Your Future Together
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you're ready to buy, invest, or take the next step for your family, I'm here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-coastal-teal hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call (541) 602-1026
            </Button>
            <Button size="lg" className="bg-coastal-sage hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              ruben.o.banuelos@gmail.com
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Start today with a free, no obligation consultation.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
