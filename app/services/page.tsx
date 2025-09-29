'use client'

import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, TrendingUp, Home, Star, CheckCircle, ArrowRight, MapPin, Heart, Building, Award, Phone, Mail } from "lucide-react"
import { useLanguageStore } from "@/hooks/useLanguageStore"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import Image from "next/image"

export default function ServicesPage() {
  const { t } = useLanguageStore()
  const { ref, isVisible } = useScrollAnimation()

  const clientTypes = [
    {
      icon: <Shield className="w-12 h-12" style={{color: '#5F7D6D'}} />,
      title: "Veterans",
      subtitle: "Honoring Those Who Served",
      description: "Specialized expertise in VA loans, military relocations, and understanding the unique needs of veteran families.",
      features: [
        "VA Loan Expertise",
        "Military Relocation Support", 
        "Zero Down Payment Options",
        "Understanding of Military Life",
        "Priority Service"
      ],
      advantages: [
        "Dual expertise in healthcare and real estate",
        "Deep understanding of veteran needs",
        "Comprehensive VA loan guidance",
        "Personalized relocation assistance"
      ],
      cta: "Learn More About Veterans Services",
      successImage: "/images/64-web-or-mls-Riviera_drone (11 of 12).JPG"
    },
    {
      icon: <TrendingUp className="w-12 h-12" style={{color: '#5F7D6D'}} />,
      title: "Investors",
      subtitle: "Building Wealth Through Real Estate",
      description: "Strategic investment guidance with market analysis, property management, and portfolio optimization.",
      features: [
        "Market Analysis & Trends",
        "Investment Property Sourcing",
        "Portfolio Optimization",
        "Property Management",
        "ADU Development"
      ],
      advantages: [
        "Healthcare background brings analytical approach",
        "NARPM certification for property management",
        "Local market expertise",
        "Long-term wealth building strategies"
      ],
      cta: "Learn More About Investor Services",
      successImage: "/images/62-web-or-mls-Riviera_drone (8 of 12).JPG"
    },
    {
      icon: <Home className="w-12 h-12" style={{color: '#5F7D6D'}} />,
      title: "Growing Families",
      subtitle: "Creating Your Dream Home",
      description: "Compassionate guidance for families at every stage, from first-time buyers to upsizing for growing needs.",
      features: [
        "First-Time Buyer Programs",
        "Family-Friendly Neighborhoods",
        "School District Expertise",
        "Upsizing & Downsizing",
        "ADU Opportunities"
      ],
      advantages: [
        "Family-first approach",
        "Understanding of family dynamics",
        "Healthcare background for safety considerations",
        "Community-focused service"
      ],
      cta: "Learn More About Family Services",
      successImage: "/images/49-web-or-mls-Riviera (48 of 55).JPG"
    }
  ]

  const competitiveAdvantages = [
    {
      icon: <Heart className="w-8 h-8" style={{color: '#5F7D6D'}} />,
      title: "Dual Expertise",
      description: "Healthcare background + Real Estate expertise = A unique perspective on what makes a home truly livable"
    },
    {
      icon: <Shield className="w-8 h-8" style={{color: '#5F7D6D'}} />,
      title: "VA Loan Specialist",
      description: "Deep knowledge of VA loan programs, helping veterans maximize their benefits and minimize costs"
    },
    {
      icon: <Building className="w-8 h-8" style={{color: '#5F7D6D'}} />,
      title: "ADU Development",
      description: "Expert guidance on Accessory Dwelling Units for additional income or multi-generational living"
    },
    {
      icon: <Award className="w-8 h-8" style={{color: '#5F7D6D'}} />,
      title: "Property Management",
      description: "NARPM certified for comprehensive property management services for investors"
    }
  ]

  return (
    <main className="flex-1 bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-48 lg:py-72 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/59-web-or-mls-Riviera_drone (5 of 12).JPG')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-lexend">
              Three Client Types, One Mission
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Whether you're a Veteran, Investor, or Growing Family, Ruben brings specialized expertise 
              and personalized service to help you achieve your real estate goals.
            </p>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section ref={ref} className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-35">
            {clientTypes.map((client, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    {client.icon}
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend">
                        {client.title}
                      </h2>
                      <p className="text-lg text-gray-600 font-semibold">
                        {client.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {client.description}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-coastal-sage">What I Provide:</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {client.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-coastal-teal flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-coastal-sage">My Advantages:</h3>
                    <div className="space-y-3">
                      {client.advantages.map((advantage, advantageIndex) => (
                        <div key={advantageIndex} className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-coastal-sage flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button size="lg" className="bg-coastal-teal hover:bg-[#5F7D6D] hover:text-white text-foreground text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 font-semibold">
                    {client.cta}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative h-[585px] rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    <img
                      src={client.successImage}
                      alt={`${client.title} property`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/8-web-or-mls-royal (28 of 47).JPG')"
            }}
          ></div>
        </div>
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-lexend">
              What Sets Me Apart
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Ruben's unique combination of a healthcare background and real estate expertise provides 
              advantages that traditional agents simply cannot match.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:bg-white/95">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-coastal-teal transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-coastal-sage font-lexend">
              Explore Service Areas
            </h2>
            <p className="text-lg text-coastal-teal max-w-3xl mx-auto leading-relaxed">
              Discover the neighborhoods where Ruben specializes, including San Marcos, Escondido, Vista, Carlsbad, and Oceanside. Each community offers unique opportunities for buyers, families, and investors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'San Marcos',
                image: '/images/1-web-or-mls-royal (6 of 47).JPG',
                description: 'Growing community with excellent schools and modern amenities',
                highlights: ['Top-rated schools', 'Family-friendly neighborhoods', 'Expanding economy']
              },
              {
                name: 'Escondido',
                image: '/images/1-web-or-mls-Venice (20 of 53).JPG',
                description: 'Historic charm meets modern growth in a vibrant inland city',
                highlights: ['Revitalized downtown', 'Cultural attractions', 'Diverse, affordable housing']
              },
              {
                name: 'Vista',
                image: '/images/39-web-or-mls-Venice (37 of 53).JPG',
                description: 'A welcoming community with parks, events, and accessible living',
                highlights: ['Great parks and trails', 'Strong community vibe', 'Central North County location']
              },
              {
                name: 'Carlsbad',
                image: '/images/50-web-or-mls-Riviera (49 of 55).JPG',
                description: 'Upscale coastal living with premium lifestyle options',
                highlights: ['Beachfront access', 'Luxury homes', 'High long-term value']
              },
              {
                name: 'Oceanside',
                image: '/images/62-web-or-mls-Riviera_drone (8 of 12).JPG',
                description: 'A relaxed beach town with strong investment potential',
                highlights: ['Ocean views', 'Affordable coastal options', 'Vibrant downtown scene']
              },
              {
                name: 'Other North County Areas',
                image: '/images/2-web-or-mls-royal (22 of 47).JPG',
                description: 'North County San Diego offers hidden gems that blend quality of life with strong investment potential.',
                highlights: ['Encinitas coastal charm', 'Poway schools and safety', 'Fallbrook semi-rural lifestyle']
              }
            ].map((area, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden relative p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={area.image}
                    alt={`${area.name} real estate`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-coastal-cream transition-colors">
                      {area.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {area.description}
                    </p>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-coastal-teal flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/40 via-white to-coastal-sage/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Let's discuss which services best fit your needs and how I can help you achieve your goals.
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
