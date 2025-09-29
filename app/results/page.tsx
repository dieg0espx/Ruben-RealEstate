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
import { useRef, useEffect, useState } from "react"

export default function ResultsPage() {
  const { ref, isVisible } = useScrollAnimation()
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
      icon: <Home className="w-6 h-6 text-coastal-teal" />,
      title: "Homes Sold",
      value: "50+",
      description: "Successful transactions"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-coastal-sage" />,
      title: "Sale Price",
      value: "$850K+",
      description: "Above market average"
    },
    {
      icon: <Shield className="w-6 h-6 text-coastal-steel" />,
      title: "Veteran Clients",
      value: "25+",
      description: "VA loan expertise"
    },
    {
      icon: <Star className="w-6 h-6 text-coastal-teal" />,
      title: "Rating",
      value: "5.0",
      description: "Perfect rating"
    }
  ]

  const allTestimonials = [
    {
      name: "Photogenic SD",
      text: "I am a real estate photographer and I work with a lot of realtors in San Diego. I know a great agent when I arrive to do the photos and the clients have the home 100% picture ready. Ruben does an excellent job setting the expectations for the seller's so his listings always stand out and they are setup for success from the start. Ruben is great guy, super knowledgeable, I would highly recommend him for real estate transactions or property management!",
      rating: 5,
      date: "3 months ago"
    },
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
      name: "Juan Ramirez",
      text: "Ruben is exceptional at his craft and does an incredible job at guiding his clients every step of the way in a real estate transaction. He has deep knowledge of the market, great attention to detail, and always puts his clients interest first. You can expect great results when working with Ruben.",
      rating: 5,
      date: "1 year ago"
    },
    {
      name: "Hayley Shams",
      text: "I have had the pleasure of working alongside Ruben on multiple transactions. His passion to serve and educate his clients along the way is truly remarkable. Ruben is hard working, diligent with the details, and gets the job done! Highly recommend him for not only real estate but also property management as well!",
      rating: 5,
      date: "10 months ago"
    },
    {
      name: "Male Beatie",
      text: "Ruben is very knowledgeable in the home buying and selling process. He educated his clients. He explains everything clearly. Always answers his phone. He makes the home buying/selling process smooth. He is patient and an has a lot of insight and expertise in the RE industry. Ruben listens to his clients needs.",
      rating: 5,
      date: "1 year ago"
    },
    {
      name: "Melanie Callaway",
      text: "Working with Ruben has been an absolute pleasure from start to finish. Not only is he an incredibly skilled real estate agent, but he goes above and beyond by offering invaluable mentorship along the way. As a first-time homebuyer, I was nervous about the entire process, but Ruben's guidance and expertise put me at ease right away. What sets Ruben apart is his genuine commitment to his clients' success. He took the time to understand my needs and patiently answered all my questions, ensuring I felt confident at every step.",
      rating: 5,
      date: "1 year ago"
    },
    {
      name: "Sarah Johnson",
      text: "If you are looking for the best home buying experience, you have to work with Ruben. Ruben has every quality to not only make your homeownership dreams come true but also make the journey an enjoyable experience. He takes on every hurdle that may come along with professionalism and a great attitude. I am proud to say he is my realtor partner.",
      rating: 5,
      date: "9 months ago"
    },
    {
      name: "Michael Chen",
      text: "Ruben and his team went above and beyond expectations for us. He represented our interests very well as a buyer agent. Not only from a standpoint of typical broker work, but also his contact list of professional services. He has a stellar network of people that impressed us throughout the process. Thanks Ruben!",
      rating: 5,
      date: "6 months ago"
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
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/55-web-or-mls-Riviera (54 of 55).JPG')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-lexend leading-tight">
              Success Stories & Results
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed px-4">
              Real results from real clients. See how I've helped Veterans, Investors, 
              and Growing Families achieve their real estate goals.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-lexend leading-tight">
              By the Numbers
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Measurable results that speak to my commitment to client success
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-coastal-cream/40 to-white hover:from-coastal-teal/5 hover:to-coastal-sage/5">
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


      {/* Portfolio Section */}
      <PortfolioSection />


      {/* Video Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-lexend leading-tight">
              Our Process & Approach
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              See how our proven methodology delivers exceptional results for every client
            </p>
          </div>
          
          <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
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

      {/* Testimonials Section */}
      <section id="trusted-by-community" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend leading-tight">
              Trusted by the Community
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-4">
              Hear directly from the people who turned their goals into reality.
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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/40 via-white to-coastal-sage/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-lexend leading-tight">
            Ready to Work Together?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed px-4">
            Let's discuss which services best fit your needs and how I can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto bg-coastal-teal hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 transition-all duration-300">
              <a href="tel:+15416021026">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="truncate">Call (541) 602-1026</span>
              </a>
            </Button>
            <Button asChild size="lg" className="w-full sm:w-auto bg-coastal-sage hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 transition-all duration-300">
              <a href="mailto:ruben.o.banuelos@gmail.com">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="truncate">ruben.o.banuelos@gmail.com</span>
              </a>
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            Start today with a free, no obligation consultation.
          </p>
        </div>
      </section>

        <Footer />
      </main>
    </>
  )
}
