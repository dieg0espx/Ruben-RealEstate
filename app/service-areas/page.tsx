'use client'

import PageNavbar from "@/components/sections/PageNavbar"
import Footer from "@/components/sections/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, ArrowRight, CheckCircle, Home, TrendingUp, Users } from "lucide-react"
import useLanguageStore from "@/hooks/useLanguageStore"
import Link from "next/link"
import Image from "next/image"

export default function ServiceAreasHubPage() {
  const { language } = useLanguageStore()

  const serviceAreas = [
    {
      slug: 'san-marcos',
      name: 'San Marcos',
      description: language === 'en' 
        ? 'Family-friendly community with top-rated schools and growing opportunities for homeowners and investors alike.'
        : 'Comunidad familiar con escuelas de primer nivel y crecientes oportunidades para propietarios e inversionistas.',
      image: '/images/3-web-or-mls-Encenitas blvd (2 of 28).JPG',
      highlights: language === 'en' 
        ? ['Cal State San Marcos', 'Excellent Schools', 'Growing Market', 'Family-Friendly']
        : ['Cal State San Marcos', 'Escuelas Excelentes', 'Mercado en Crecimiento', 'Familiar'],
      stats: { avgPrice: '$750K', growth: '+5.2%', inventory: '120+' }
    },
    {
      slug: 'oceanside',
      name: 'Oceanside',
      description: language === 'en'
        ? 'Coastal living at its finest with beautiful beaches, vibrant downtown, and strong investment potential.'
        : 'Vida costera en su máxima expresión con hermosas playas, centro vibrante y gran potencial de inversión.',
      image: '/images/7-web-or-mls-royal (27 of 47).JPG',
      highlights: language === 'en'
        ? ['Beach Access', 'Historic Downtown', 'Military Friendly', 'Strong Rentals']
        : ['Acceso a Playas', 'Centro Histórico', 'Militar Amigable', 'Rentas Fuertes'],
      stats: { avgPrice: '$825K', growth: '+6.1%', inventory: '150+' }
    },
    {
      slug: 'escondido',
      name: 'Escondido',
      description: language === 'en'
        ? 'Affordable living with diverse neighborhoods, excellent amenities, and prime ADU development opportunities.'
        : 'Vivienda asequible con vecindarios diversos, excelentes amenidades y oportunidades para desarrollo de ADUs.',
      image: '/images/41-web-or-mls-Venice (39 of 53).JPG',
      highlights: language === 'en'
        ? ['Affordable Options', 'Safari Park', 'ADU Potential', 'Great Climate']
        : ['Opciones Asequibles', 'Safari Park', 'Potencial ADU', 'Clima Ideal'],
      stats: { avgPrice: '$680K', growth: '+4.8%', inventory: '140+' }
    },
    {
      slug: 'vista',
      name: 'Vista',
      description: language === 'en'
        ? 'Central location with diverse housing options and excellent value for both buyers and investors.'
        : 'Ubicación central con opciones de vivienda diversas y excelente valor para compradores e inversionistas.',
      image: '/images/51-web-or-mls-Riviera (50 of 55).JPG',
      highlights: language === 'en'
        ? ['Central Location', 'Diverse Housing', 'Value Market', 'Investment Ready']
        : ['Ubicación Central', 'Vivienda Diversa', 'Mercado de Valor', 'Listo para Invertir'],
      stats: { avgPrice: '$700K', growth: '+5.5%', inventory: '110+' }
    },
    {
      slug: 'carlsbad',
      name: 'Carlsbad',
      description: language === 'en'
        ? 'Premium coastal community with luxury homes, top schools, and prestigious lifestyle amenities.'
        : 'Comunidad costera premium con casas de lujo, escuelas de primer nivel y amenidades de prestigio.',
      image: '/images/40-web-or-mls-Venice (38 of 53).JPG',
      highlights: language === 'en'
        ? ['Luxury Market', 'Top Schools', 'Beach Village', 'Premium Living']
        : ['Mercado de Lujo', 'Escuelas Top', 'Village de Playa', 'Vida Premium'],
      stats: { avgPrice: '$1.2M', growth: '+7.3%', inventory: '90+' }
    }
  ]

  const whyLocalExpertise = [
    {
      icon: <MapPin className="w-8 h-8 text-coastal-teal" />,
      title: language === 'en' ? 'Local Expertise' : 'Experiencia Local',
      description: language === 'en' 
        ? 'Deep knowledge of each community, school district, and neighborhood trends. Ruben is a longtime North County resident with insider insight.'
        : 'Conocimiento profundo de cada comunidad, distrito escolar y tendencias del vecindario. Ruben es un residente de North County con conocimiento interno.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-coastal-teal" />,
      title: language === 'en' ? 'Dual Expertise' : 'Doble Experiencia',
      description: language === 'en'
        ? 'Former Doctor of Physical Therapy turned real estate broker—bringing healthcare discipline and empathy to every transaction.'
        : 'Ex Doctor en Terapia Física convertido en corredor de bienes raíces: trayendo disciplina y empatía a cada transacción.'
    },
    {
      icon: <Users className="w-8 h-8 text-coastal-teal" />,
      title: language === 'en' ? 'Full-Service Support' : 'Servicio Completo',
      description: language === 'en'
        ? 'From buying and selling to property management and VA loans—comprehensive real estate services for families, veterans, and investors.'
        : 'Desde comprar y vender hasta administración de propiedades y préstamos VA: servicios inmobiliarios completos para familias, veteranos e inversionistas.'
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
              backgroundImage: "url('/images/64-web-or-mls-Riviera_drone (11 of 12).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-lexend leading-tight">
                {language === 'en' ? 'Our Service Areas' : 'Nuestras Áreas de Servicio'}
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                {language === 'en' 
                  ? 'Ruben Banuelos serves families, veterans, and investors across North San Diego County with expert real estate and property management services'
                  : 'Ruben Banuelos sirve a familias, veteranos e inversionistas en todo el Norte de San Diego con servicios expertos de bienes raíces y administración de propiedades'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button 
                  size="lg"
                  variant="green"
                  className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4"
                  onClick={() => window.open('tel:+15416021026', '_self')}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  (541) 602-1026
                </Button>
                <Button 
                  size="lg"
                  variant="whiteOnDark"
                  className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4"
                  onClick={() => window.location.href = '/contact'}
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {language === 'en' ? 'Get Local Help' : 'Obtén Ayuda Local'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-4 mb-12">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {language === 'en'
                  ? 'Ruben Banuelos serves families, veterans, and investors across North San Diego County with expert real estate and property management services.'
                  : 'Ruben Banuelos sirve a familias, veteranos e inversionistas en todo el Norte de San Diego con servicios expertos de bienes raíces y administración de propiedades.'}
              </p>
            </div>

            <div className="space-y-6 lg:space-y-8">
              {/* Row 1: Large card (San Marcos) */}
              <Link href={`/service-areas/${serviceAreas[0].slug}`}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden cursor-pointer p-0 h-[400px] lg:h-[500px]">
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={serviceAreas[0].image}
                      alt={`${serviceAreas[0].name} real estate`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex flex-col">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 group-hover:text-coastal-cream transition-colors">
                          {serviceAreas[0].name}
                        </h3>
                        <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-4">
                          {serviceAreas[0].description}
                        </p>
                        <div className="flex items-center text-coastal-cream font-semibold text-sm group-hover:text-white transition-colors">
                          {language === 'en' ? 'Learn More' : 'Saber Más'}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>

              {/* Row 2: Two small cards side by side (Oceanside & Escondido) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 lg:mt-16">
                {serviceAreas.slice(1, 3).map((area, index) => (
                  <Link key={index} href={`/service-areas/${area.slug}`}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden cursor-pointer p-0 h-[300px] lg:h-[350px]">
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={area.image}
                          alt={`${area.name} real estate`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex flex-col">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-coastal-cream transition-colors">
                              {area.name}
                            </h3>
                            <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-4">
                              {area.description}
                            </p>
                            <div className="flex items-center text-coastal-cream font-semibold text-sm group-hover:text-white transition-colors">
                              {language === 'en' ? 'Learn More' : 'Saber Más'}
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Row 3: Two small cards side by side (Vista & Carlsbad) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {serviceAreas.slice(3).map((area, index) => (
                  <Link key={index} href={`/service-areas/${area.slug}`}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden cursor-pointer p-0 h-[300px] lg:h-[350px]">
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={area.image}
                          alt={`${area.name} real estate`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex flex-col">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-coastal-cream transition-colors">
                              {area.name}
                            </h3>
                            <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-4">
                              {area.description}
                            </p>
                            <div className="flex items-center text-coastal-cream font-semibold text-sm group-hover:text-white transition-colors">
                              {language === 'en' ? 'Learn More' : 'Saber Más'}
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend">
                {language === 'en' ? 'Covering North San Diego County' : 'Cubriendo el Norte de San Diego'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {language === 'en'
                  ? 'Explore our service areas across North San Diego County'
                  : 'Explora nuestras áreas de servicio en todo el Norte de San Diego'}
              </p>
            </div>
            <div className="h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] rounded-2xl overflow-hidden bg-coastal-cream">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215134.1826456!2d-117.35!3d33.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0c8a858fb817%3A0x6d2c0e8e51fc8fe7!2sNorth%20County%20San%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/30 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-lexend">
              {language === 'en' ? 'Ready to Get Started?' : '¿Listo para Comenzar?'}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {language === 'en'
                ? 'Contact Ruben Banuelos for expert real estate guidance in North San Diego County.'
                : 'Contacta a Ruben Banuelos para orientación experta en bienes raíces en el Norte del Condado de San Diego.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="green"
                className="hover:scale-105 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('tel:+15416021026', '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                (541) 602-1026
              </Button>
              <Button 
                size="lg"
                variant="green"
                className="hover:scale-105 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                <Mail className="w-5 h-5 mr-2" />
                {language === 'en' ? 'Schedule Consultation' : 'Programar Consulta'}
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

