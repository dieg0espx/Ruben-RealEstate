'use client'

import PageNavbar from "@/components/sections/PageNavbar"
import Footer from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

export default function SanMarcosPage() {
  const faqs = [
    {
      question: "What makes San Marcos a good place for real estate investment?",
      answer: "San Marcos is a prime market for real estate investors, driven by demand from Cal State San Marcos and the expanding 78 corridor. The area offers strong rental demand, steady appreciation, and excellent cash flow potential for both student housing and family rentals."
    },
    {
      question: "Do you help veterans with VA loans in San Marcos?",
      answer: "Yes! Ruben specializes in guiding San Marcos military families through every step of the VA process. From confirming eligibility to partnering with trusted VA-approved lenders, he ensures clients maximize advantages like zero-down financing, no PMI, and competitive rates."
    },
    {
      question: "What neighborhoods in San Marcos are best for families?",
      answer: "San Elijo Hills, Twin Oaks Valley, and Discovery Hills are excellent for families. These neighborhoods offer top-rated schools, parks, and community amenities that align with both lifestyle and long-term goals."
    },
    {
      question: "Does Ruben Real Estate offer property management in San Marcos?",
      answer: "Yes! Ruben Real Estate San Diego offers comprehensive property management services for San Marcos owners. From tenant placement and maintenance coordination to rent collection and inspections, the team handles details with integrity and professionalism."
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
              backgroundImage: "url('/images/3-web-or-mls-Encenitas blvd (2 of 28).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-lexend leading-tight">
                Real Estate Services San Marcos
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Guiding San Marcos families, veterans, and investors through buying, selling, and property management with trust, care, and local expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  variant="green"
                  className="text-lg px-8 py-6"
                  onClick={() => window.open('tel:+15416021026', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (541) 602-1026
                </Button>
                <Button 
                  size="lg"
                  variant="whiteOnDark"
                  className="text-lg px-8 py-6"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-coastal-sage font-lexend mb-8">
              Helping Families and Investors Build Their Future in San Marcos
            </h2>
            
            {/* Featured Image */}
            <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden mb-8 shadow-xl">
              <Image
                src="/images/1-web-or-mls-royal (6 of 47).JPG"
                alt="San Marcos California real estate properties and neighborhoods"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Ruben Real Estate San Diego, we proudly serve San Marcos, one of North County's fastest-growing and most family-friendly communities. Whether you're a first-time buyer, veteran, or investor, Ruben Banuelos brings discipline, empathy, and expertise to every transaction. A former Doctor of Physical Therapy, Ruben applies the same care and precision from healthcare to real estate—helping clients make confident decisions that build lasting financial stability.
              </p>

              <div className="my-8">
                <Button 
                  variant="blackOnLight"
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule Your San Marcos Property Consultation
                </Button>
              </div>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">VA Loan Expertise in San Marcos, CA</h3>
              <p>
                Buying a home with a VA loan is one of the best benefits available to veterans and active-duty service members. Ruben specializes in guiding San Marcos military families through every step of the VA process. From confirming eligibility to partnering with trusted VA-approved lenders, he ensures clients maximize advantages like zero-down financing, no PMI, and competitive rates.
              </p>
              <p>
                With local knowledge of neighborhoods like San Elijo Hills, Twin Oaks Valley, and Discovery Hills, Ruben helps veterans find homes that fit their needs and budget. His background in service and attention to detail make the process smooth and stress-free from start to finish.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Investment Property Guidance in San Marcos</h3>
              <p>
                San Marcos is a prime market for real estate investors, driven by demand from Cal State San Marcos and the expanding 78 corridor. As both a licensed broker and NARPM-certified property manager, Ruben identifies opportunities that balance cash flow, appreciation, and long-term stability.
              </p>
              <p>
                He advises clients on analyzing rental potential, optimizing ROI, and managing properties efficiently. Whether acquiring multi-family units near the university or adding single-family rentals to a portfolio, Ruben provides the insight investors need to make data-driven decisions with confidence.
              </p>

              <div className="my-8 bg-coastal-cream/20 p-6 rounded-lg border-l-4 border-[#5F7D6D]">
                <p className="font-semibold text-[#5F7D6D] mb-2">Ready to invest in San Marcos real estate?</p>
                <Button 
                  variant="green"
                  onClick={() => window.open('tel:+15416021026', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Investment Analysis
                </Button>
              </div>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Family-First Homebuying in San Marcos</h3>
              <p>
                Ruben's approach to real estate is rooted in family values. As a husband and father, he understands that buying or selling a home is more than a financial move—it's a life milestone. He helps families explore San Marcos neighborhoods based on schools, parks, and community amenities, ensuring every home aligns with both lifestyle and long-term goals.
              </p>
              <p>
                With clear communication and patience, Ruben makes the process enjoyable and transparent, helping families achieve homeownership with confidence and peace of mind.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Property Management Services in San Marcos</h3>
              <p>
                Managing a rental property can be complex. Ruben Real Estate San Diego offers comprehensive property management services for San Marcos owners seeking reliable oversight.
              </p>
              <p>
                From tenant placement and maintenance coordination to rent collection and inspections, Ruben's team handles the details with integrity and professionalism. His NARPM membership ensures every property is managed to high ethical and operational standards, keeping owners protected and tenants satisfied.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Local San Marcos Expertise and Community Insight</h3>
              <p>
                As a longtime North County resident, Ruben knows San Marcos inside and out. He stays informed on housing trends, school districts, and new developments near the 78 corridor, offering clients the local insight that drives smarter buying and selling decisions.
              </p>
              <p>
                His deep community ties and background in service reflect his belief that real estate isn't just about properties—it's about people, neighborhoods, and long-term growth.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Buying and Selling Homes in San Marcos</h3>
              <p>
                Whether buying your first home or selling an existing property, Ruben provides full-service guidance with precision and care.
              </p>
              <p>
                <strong>For Buyers:</strong> personalized searches, expert negotiation, local neighborhood tours, and trusted referrals for lenders and inspectors.
              </p>
              <p>
                <strong>For Sellers:</strong> strategic pricing, professional marketing, and seamless transaction management.
              </p>
              <p>
                As a Rising Star Award recipient at Team Fearless Realty, Ruben's reputation for integrity and results speaks for itself.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/30 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend mb-8 text-center">
              Why Work With Ruben Real Estate San Diego in San Marcos
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "Dual background in healthcare and real estate for unmatched empathy and precision",
                "Expertise in VA loans, investment properties, and property management",
                "Commitment to families, veterans, and first-time buyers",
                "NARPM-certified and DRE-licensed broker",
                "Deep roots in the San Marcos and North County communities"
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
                Work With a San Marcos Real Estate Expert
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend text-center mb-12">
              San Marcos Real Estate FAQ
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6 py-2 last:border-b border-b-gray-200">
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
              Explore San Marcos, California
            </h2>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53617.89842447129!2d-117.19615783476564!3d33.14348979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbee96c6f46f7f%3A0x1f90e62d85e58a7!2sSan%20Marcos%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="San Marcos California map"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend text-center mb-8">
              Nearby North County Service Areas
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Ruben Real Estate San Diego also serves these neighboring communities in North San Diego County:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Escondido", slug: "escondido", image: "/images/41-web-or-mls-Venice (39 of 53).JPG" },
                { name: "Vista", slug: "vista", image: "/images/51-web-or-mls-Riviera (50 of 55).JPG" },
                { name: "Carlsbad", slug: "carlsbad", image: "/images/40-web-or-mls-Venice (38 of 53).JPG" },
                { name: "Oceanside", slug: "oceanside", image: "/images/7-web-or-mls-royal (27 of 47).JPG" }
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
                        <p className="text-white/90 text-sm">View Services</p>
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
              Ready to Get Started in San Marcos?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              If you're buying, selling, or investing in San Marcos, Ruben Banuelos is here to help. His hands-on approach, attention to detail, and deep community connections ensure exceptional results.
            </p>
            <p className="text-lg text-muted-foreground">
              Start your real estate journey today—reach out to Ruben Real Estate San Diego to schedule your free consultation or simply contact the team to get started.
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
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
