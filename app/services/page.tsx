'use client'

import PageNavbar from "@/components/sections/PageNavbar"
import Footer from "@/components/sections/Footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, CheckCircle, ArrowRight, MapPin, Phone, Mail, CalendarDays } from "lucide-react"
import useLanguageStore from "@/hooks/useLanguageStore"
import useScrollAnimation from "@/hooks/useScrollAnimation"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import type { servicesTranslations } from "@/translations/services/en"

export default function ServicesPage() {
  const { t, getPage } = useLanguageStore()
  const { ref, isVisible } = useScrollAnimation()
  const pageT = getPage('services') as typeof servicesTranslations

  // Handle smooth scroll from other pages
  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = sessionStorage.getItem('scrollToHash')
      if (hash) {
        console.log('Services page: Scrolling to hash:', hash)
        sessionStorage.removeItem('scrollToHash')
        
        // Wait for page to fully load
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            console.log('Services page: Found element, scrolling to:', hash)
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            
            // Scroll directly to the target section
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          } else {
            console.log('Services page: Element not found:', hash)
          }
        }, 500) // Wait for page to load
      }
    }

    handleScrollToSection()
  }, [])

  const clientTypes = [
    {
      icon: <img src="/icons/services/services elements-01.png" alt="Veterans Icon" className="w-12 h-12" />,
      title: pageT.clientTypes.veterans.title,
      subtitle: pageT.clientTypes.veterans.subtitle,
      description: pageT.clientTypes.veterans.description,
      features: pageT.clientTypes.veterans.features,
      advantages: pageT.clientTypes.veterans.advantages,
      cta: "Learn More About Veterans Services",
      successImage: "/images/63-web-or-mls-Riviera_drone (10 of 12).JPG"
    },
    {
      icon: <img src="/icons/services/services elements-02.png" alt="Investors Icon" className="w-12 h-12" />,
      title: pageT.clientTypes.investors.title,
      subtitle: pageT.clientTypes.investors.subtitle,
      description: pageT.clientTypes.investors.description,
      features: pageT.clientTypes.investors.features,
      advantages: pageT.clientTypes.investors.advantages,
      cta: "Learn More About Investor Services",
      successImage: "/images/53-web-or-mls-Riviera (52 of 55).JPG"
    },
    {
      icon: <img src="/icons/services/services elements-03.png" alt="Growing Families Icon" className="w-12 h-12" />,
      title: pageT.clientTypes.families.title,
      subtitle: pageT.clientTypes.families.subtitle,
      description: pageT.clientTypes.families.description,
      features: pageT.clientTypes.families.features,
      advantages: pageT.clientTypes.families.advantages,
      cta: "Learn More About Family Services",
      successImage: "/images/58-web-or-mls-Riviera_drone (4 of 12).JPG"
    }
  ]

  const competitiveAdvantages = [
    {
      icon: <img src="/icons/services/services elements-07.png" alt="" aria-hidden="true" className="w-10 h-auto sm:w-12 md:w-14" />,
      title: pageT.competitiveAdvantages.dualExpertise.title,
      description: pageT.competitiveAdvantages.dualExpertise.description
    },
    {
      icon: <img src="/icons/services/services elements-08.png" alt="" aria-hidden="true" className="w-10 h-auto sm:w-12 md:w-14" />,
      title: pageT.competitiveAdvantages.vaSpecialist.title,
      description: pageT.competitiveAdvantages.vaSpecialist.description
    },
    {
      icon: <img src="/icons/services/services elements-09.png" alt="" aria-hidden="true" className="w-10 h-auto sm:w-12 md:w-14" />,
      title: pageT.competitiveAdvantages.aduDevelopment.title,
      description: pageT.competitiveAdvantages.aduDevelopment.description
    },
    {
      icon: <img src="/icons/services/services elements-03.png" alt="" aria-hidden="true" className="w-10 h-auto sm:w-12 md:w-14" />,
      title: pageT.competitiveAdvantages.propertyManagement.title,
      description: pageT.competitiveAdvantages.propertyManagement.description
    }
  ]

  return (
    <>
      <PageNavbar />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
      <section className="hero-section relative py-32 sm:py-40 md:py-48 lg:py-56 xl:py-64 overflow-hidden -mt-20 pt-64 sm:pt-80 md:pt-88 lg:pt-96 xl:pt-104">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/57-web-or-mls-Riviera_drone (3 of 12).JPG')",
            backgroundAttachment: "fixed"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend leading-tight">
              {pageT.hero.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-2">
              {pageT.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" variant="green" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4" onClick={() => window.open('tel:+15416021026', '_self')}>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Discuss Your Real Estate Goals
              </Button>
              <Button size="lg" variant="whiteOnDark" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4" onClick={() => window.location.href = '/contact'}>
                <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section ref={ref} className="pt-12 pb-8 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-20 md:space-y-24 lg:space-y-28">
            {clientTypes.map((client, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-3 sm:space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    {client.icon}
                    <div>
                      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-coastal-sage font-lexend leading-tight">
                        {client.title}
                      </h2>
                      <p className="text-sm sm:text-lg text-gray-600 font-semibold">
                        {client.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
                    {client.description}
                  </p>

                  <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-base sm:text-xl font-bold text-coastal-sage">{pageT.clientTypes.provideTitle}:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-3">
                      {client.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                          <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5 text-coastal-teal flex-shrink-0" />
                          <span className="text-xs sm:text-base text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-base sm:text-xl font-bold text-coastal-sage">{pageT.clientTypes.advantagesTitle}:</h3>
                    <div className="space-y-1.5 sm:space-y-3">
                      {client.advantages.map((advantage, advantageIndex) => (
                        <div key={advantageIndex} className="flex items-start space-x-2 sm:space-x-3">
                          <Star className="w-3 h-3 sm:w-5 sm:h-5 text-coastal-sage flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-base text-muted-foreground leading-relaxed">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[585px] rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    <img
                      src={client.successImage}
                      alt={`${client.title} property`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {index === 0 && (
                    <img
                      src="/icons/services/services elements-06.png"
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none select-none absolute z-20 -right-24 sm:-right-32 bottom-[-48px] sm:bottom-[-64px] w-56 sm:w-72 md:w-80 lg:w-96"
                    />
                  )}
                  {index === 1 && (
                    <img
                      src="/icons/services/services elements-05.png"
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none select-none absolute z-30 -left-40 sm:-left-56 md:-left-72 lg:-left-[20rem] bottom-[-48px] sm:bottom-[-64px] w-56 sm:w-72 md:w-80 lg:w-96"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/images/3-web-or-mls-Encenitas blvd (2 of 28).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
        </div>
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-lexend leading-tight">
              {pageT.competitiveAdvantages.title}
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto px-2">
              {pageT.competitiveAdvantages.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <Card
                key={index}
                className="relative overflow-visible group border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-300 rounded-xl"
              >
                <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    {advantage.icon}
                  </div>
                </div>
                <CardContent className="pt-10 sm:pt-14 p-3 sm:p-6 lg:p-8 text-center space-y-2 sm:space-y-4">
                  <h3 className="text-base sm:text-xl font-bold text-foreground group-hover:text-coastal-teal transition-colors leading-tight">
                    {advantage.title}
                  </h3>
                  <p className="text-xs sm:text-base text-muted-foreground leading-relaxed line-clamp-4 sm:line-clamp-none">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="explore-service-areas" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/30 to-white overflow-visible">
        <img
          src="/icons/services/services elements-05.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute z-10 top-0 right-[-4rem] sm:-right-24 w-40 sm:w-56 md:w-72 lg:w-96"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-coastal-sage font-lexend leading-tight">
              {pageT.serviceAreas.title}
            </h2>
            <p className="text-base sm:text-lg text-coastal-teal max-w-3xl mx-auto leading-relaxed px-2">
              {pageT.serviceAreas.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                name: pageT.serviceAreas.areas.sanMarcos.name,
                slug: 'san-marcos',
                image: '/images/3-web-or-mls-Encenitas blvd (2 of 28).JPG',
                description: pageT.serviceAreas.areas.sanMarcos.description,
                highlights: pageT.serviceAreas.areas.sanMarcos.highlights
              },
              {
                name: pageT.serviceAreas.areas.escondido.name,
                slug: 'escondido',
                image: '/images/41-web-or-mls-Venice (39 of 53).JPG',
                description: pageT.serviceAreas.areas.escondido.description,
                highlights: pageT.serviceAreas.areas.escondido.highlights
              },
              {
                name: pageT.serviceAreas.areas.vista.name,
                slug: 'vista',
                image: '/images/51-web-or-mls-Riviera (50 of 55).JPG',
                description: pageT.serviceAreas.areas.vista.description,
                highlights: pageT.serviceAreas.areas.vista.highlights
              },
              {
                name: pageT.serviceAreas.areas.carlsbad.name,
                slug: 'carlsbad',
                image: '/images/40-web-or-mls-Venice (38 of 53).JPG',
                description: pageT.serviceAreas.areas.carlsbad.description,
                highlights: pageT.serviceAreas.areas.carlsbad.highlights
              },
              {
                name: pageT.serviceAreas.areas.oceanside.name,
                slug: 'oceanside',
                image: '/images/7-web-or-mls-royal (27 of 47).JPG',
                description: pageT.serviceAreas.areas.oceanside.description,
                highlights: pageT.serviceAreas.areas.oceanside.highlights
              },
              {
                name: pageT.serviceAreas.areas.other.name,
                slug: null,
                image: '/images/57-web-or-mls-Riviera_drone (3 of 12).JPG',
                description: pageT.serviceAreas.areas.other.description,
                highlights: pageT.serviceAreas.areas.other.highlights
              }
            ].map((area, index) => (
              area.slug ? (
                <Link key={index} href={`/service-areas/${area.slug}`}>
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden relative p-0 bg-white cursor-pointer h-full">
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img
                        src={area.image}
                        alt={`${area.name} real estate`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-1 sm:bottom-2 left-3 sm:left-4 right-3 sm:right-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-0 group-hover:text-coastal-cream transition-colors leading-tight">
                          {area.name}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                      <div className="space-y-1 sm:space-y-1">
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {area.description}
                        </p>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {area.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-coastal-teal flex-shrink-0" />
                              <span className="text-muted-foreground text-xs sm:text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-2 flex items-center text-coastal-teal font-semibold text-sm group-hover:text-coastal-sage transition-colors">
                          Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden relative p-0 bg-white h-full">
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={area.image}
                      alt={`${area.name} real estate`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-1 sm:bottom-2 left-3 sm:left-4 right-3 sm:right-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-0 group-hover:text-coastal-cream transition-colors leading-tight">
                        {area.name}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                    <div className="space-y-1 sm:space-y-1">
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {area.description}
                      </p>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {area.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-coastal-teal flex-shrink-0" />
                            <span className="text-muted-foreground text-xs sm:text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - match About page style */}
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
              {pageT.cta.emailButtonFull}
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
