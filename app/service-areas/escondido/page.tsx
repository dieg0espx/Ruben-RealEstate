'use client'

import PageNavbar from "@/components/sections/PageNavbar"
import Footer from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import useLanguageStore from "@/hooks/useLanguageStore"

export default function EscondidoPage() {
  const { language } = useLanguageStore()
  const faqs = [
    {
      question: "Is Escondido a good place for real estate investment?",
      answer: "Yes! Escondido's strong rental market and diverse housing options make it a top destination for investors. The area offers excellent potential for both cash flow and appreciation, with affordable entry prices compared to coastal communities."
    },
    {
      question: "Can I use a VA loan to buy a home in Escondido?",
      answer: "Absolutely! Escondido's central location makes it a great home base for military families stationed near Camp Pendleton or MCAS Miramar. Ruben specializes in helping veterans use their VA loan benefits effectively with zero-down financing and no PMI."
    },
    {
      question: "What are the best family neighborhoods in Escondido?",
      answer: "Felicita, South Escondido, and areas near Felicita Park are excellent for families. These neighborhoods offer access to schools like Classical Academy High School and attractions such as the San Diego Zoo Safari Park."
    },
    {
      question: "Does Ruben offer property management in Escondido?",
      answer: "Yes! Ruben Real Estate San Diego offers complete property management services designed to protect and grow your investment. From marketing and tenant placement to rent collection and maintenance coordination, the team handles every detail with professionalism and NARPM standards."
    }
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageNavbar />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="hero-section relative py-32 sm:py-40 md:py-48 lg:py-56 xl:py-64 overflow-hidden -mt-20 pt-64 sm:pt-80 md:pt-88 lg:pt-96 xl:pt-104">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/images/41-web-or-mls-Venice (39 of 53).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-lexend leading-tight">
                {language === 'en' ? 'Real Estate Services Escondido' : 'Servicios Inmobiliarios en Escondido'}
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                {language === 'en'
                  ? 'Serving Escondido families, veterans, and investors with professional guidance, local expertise, and a commitment to lasting results.'
                  : 'Sirviendo a familias, veteranos e inversionistas en Escondido con guía profesional, experiencia local y compromiso con resultados duraderos.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  variant="green"
                  className="text-lg px-8 py-6"
                  onClick={() => window.open('tel:+15416021026', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {language === 'en' ? 'Call (541) 602-1026' : 'Llamar (541) 602-1026'}
                </Button>
                <Button 
                  size="lg"
                  variant="whiteOnDark"
                  className="text-lg px-8 py-6"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {language === 'en' ? 'Free Consultation' : 'Consulta Gratuita'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-coastal-sage font-lexend mb-8">
              {language === 'en' ? 'Helping Families, Veterans, and Investors in Escondido' : 'Apoyando a Familias, Veteranos e Inversionistas en Escondido'}
            </h2>
            
            {/* Featured Image */}
            <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden mb-8 shadow-xl">
              <Image
                src="/images/42-web-or-mls-Venice (40 of 53).JPG"
                alt="Escondido California real estate homes and neighborhoods"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Ruben Real Estate San Diego, we're proud to serve Escondido, one of North County's most historic and diverse cities. From charming downtown neighborhoods to hillside estates, Escondido offers something for every lifestyle. Whether you're buying your first home, selling a property, or investing in local real estate, Ruben Banuelos provides expert guidance built on integrity, care, and community knowledge.
              </p>
              <p>
                With a background as a Doctor of Physical Therapy turned real estate broker, Ruben brings a calm, professional, and detail-oriented approach to every transaction—helping clients make confident and informed decisions.
              </p>

              <div className="my-8">
                <Button 
                  variant="green"
                  onClick={() => window.location.href = '/contact'}
                >
                  {language === 'en' ? 'Start Your Escondido Home Search Today' : 'Comienza Hoy Tu Búsqueda de Casa en Escondido'}
                </Button>
              </div>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">VA Loan Expertise in Escondido, CA</h3>
              <p>
                Escondido's central location makes it a great home base for military families stationed near Camp Pendleton or MCAS Miramar. Ruben specializes in helping veterans and active-duty buyers use their VA loan benefits effectively.
              </p>
              <p>
                He works with VA-approved lenders to streamline the process and secure zero-down financing, no PMI, and competitive rates. Ruben ensures that veterans understand every step—from eligibility and pre-approval to closing—while helping them find homes that fit their lifestyle and budget.
              </p>
              <p>
                From family neighborhoods near Felicita Park to modern communities in South Escondido, Ruben helps clients find the right property and ensures a smooth, stress-free buying experience.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Investment Property Guidance in Escondido</h3>
              <p>
                Escondido's strong rental market and diverse housing options make it a top destination for investors. Ruben helps clients identify high-performing properties with excellent potential for both cash flow and appreciation.
              </p>
              <p>
                As both a licensed broker and NARPM-certified property manager, he offers guidance on acquisition strategy, ROI analysis, and long-term management. Whether you're interested in multi-family units downtown or single-family rentals near San Pasqual Valley, Ruben provides the tools and insight to make confident investment decisions backed by real data and experience.
              </p>

              <div className="my-8 bg-coastal-cream/20 p-6 rounded-lg border-l-4 border-[#5F7D6D]">
                <p className="font-semibold text-[#5F7D6D] mb-2">Looking for investment properties in Escondido?</p>
                <Button 
                  variant="green"
                  onClick={() => window.open('tel:+15416021026', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Discuss Investment Opportunities
                </Button>
              </div>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Family-First Homebuying in Escondido</h3>
              <p>
                Ruben's family-first approach is at the heart of every client relationship. He knows that buying a home is more than a transaction—it's about building a foundation for the future.
              </p>
              <p>
                Families in Escondido benefit from his neighborhood insight, from schools like Classical Academy High School to parks and local attractions such as the San Diego Zoo Safari Park. Ruben ensures every client finds a home that fits their needs, lifestyle, and long-term financial goals.
              </p>
              <p>
                His transparent communication, patience, and focus on client education help families navigate the process with confidence and peace of mind.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Property Management Services in Escondido</h3>
              <p>
                For property owners in Escondido, Ruben Real Estate San Diego offers complete property management services designed to protect and grow your investment.
              </p>
              <p>
                From marketing and tenant placement to rent collection and maintenance coordination, his team handles every detail with professionalism and care. With Ruben's NARPM membership, property owners can trust that management practices meet the highest ethical and operational standards.
              </p>
              <p>
                Whether managing a single-family home or a multi-unit property, Ruben's proactive approach helps ensure steady income and long-term tenant satisfaction.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Local Escondido Expertise and Community Insight</h3>
              <p>
                As a North County native, Ruben understands Escondido's unique mix of historic neighborhoods, new developments, and rural communities. He stays up to date on local zoning updates, housing trends, and new construction projects—giving clients the knowledge to buy, sell, or invest strategically.
              </p>
              <p>
                Ruben's community-driven approach reflects his belief that real estate should serve families and strengthen neighborhoods. His goal is to help each client build stability and wealth through property ownership in Escondido's evolving market.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Buying and Selling Homes in Escondido</h3>
              <p>
                Whether you're purchasing your first home or selling your current one, Ruben offers a full-service experience built around your goals.
              </p>
              <p>
                <strong>For Buyers:</strong> personalized home searches, detailed market insight, skilled negotiation, and trusted referrals for lending and inspection.
              </p>
              <p>
                <strong>For Sellers:</strong> professional photography, strategic pricing, and marketing campaigns that drive maximum exposure and top value.
              </p>
              <p>
                As a Rising Star Award recipient at Team Fearless Realty, Ruben's record of results and client satisfaction has made him one of the most trusted names in North County real estate.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/30 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend mb-8 text-center">
              Why Work With Ruben Real Estate San Diego in Escondido
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "Specializes in VA loans, investment properties, and property management",
                "Dual background in healthcare and real estate for empathy and precision",
                "Deep understanding of Escondido's neighborhoods and market trends",
                "Certified member of NARPM and licensed California broker",
                "Commitment to serving families, veterans, and investors with care and integrity"
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-coastal-teal flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button 
                size="lg"
                variant="green"
                className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/contact'}
              >
                Work With an Escondido Real Estate Expert
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/images/42-web-or-mls-Venice (40 of 53).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-lexend text-center mb-12">
              {language === 'en' ? 'Escondido Real Estate FAQ' : 'Preguntas Frecuentes de Bienes Raíces en Escondido'}
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6 py-2 last:border-b border-b-gray-200 bg-white/90 backdrop-blur-sm">
                  <AccordionTrigger className="text-left font-semibold text-coastal-sage hover:text-coastal-teal py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Google Map */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend text-center mb-12">
              {language === 'en' ? 'Explore Escondido, California' : 'Explora Escondido, California'}
            </h2>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106812.15834265789!2d-117.14213984843749!3d33.12515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf1b0ca6e29cb%3A0xa85ae63e804d2f02!2sEscondido%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Escondido California map"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend text-center mb-8">
              {language === 'en' ? 'Nearby North County Service Areas' : 'Áreas de Servicio Cercanas en North County'}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Ruben Real Estate San Diego also serves these neighboring communities in North San Diego County:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "San Marcos", slug: "san-marcos", image: "/images/3-web-or-mls-Encenitas blvd (2 of 28).JPG" },
                { name: "Vista", slug: "vista", image: "/images/51-web-or-mls-Riviera (50 of 55).JPG" },
                { name: "Oceanside", slug: "oceanside", image: "/images/7-web-or-mls-royal (27 of 47).JPG" },
                { name: "Carlsbad", slug: "carlsbad", image: "/images/40-web-or-mls-Venice (38 of 53).JPG" }
              ].map((area, index) => (
                <Link key={index} href={`/service-areas/${area.slug}`} className="group">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="relative h-48">
                      <Image
                        src={area.image}
                        alt={`${area.name} real estate services`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-coastal-cream transition-colors">
                          {area.name}
                        </h3>
                        <p className="text-white/90 text-sm">{language === 'en' ? 'View Services' : 'Ver Servicios'}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/30 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-lexend">
              {language === 'en' ? 'Ready to Get Started in Escondido?' : '¿Listo para Comenzar en Escondido?'}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              If you're looking to buy, sell, or invest in Escondido, Ruben Banuelos is ready to help you make your next move with confidence. His local expertise and client-first approach make the process seamless from start to finish.
            </p>
            <p className="text-lg text-muted-foreground">
              Start today by reaching out to Ruben Real Estate San Diego or simply contact the team to schedule your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="green"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('tel:+15416021026', '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                (541) 602-1026
              </Button>
              <Button 
                size="lg"
                variant="blackOnLight"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
