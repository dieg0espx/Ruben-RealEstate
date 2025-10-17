'use client'

import PageNavbar from "@/components/sections/PageNavbar"
import Footer from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

export default function OceansidePage() {
  const faqs = [
    {
      question: "Is Oceanside a good place for military families?",
      answer: "Absolutely! Oceanside's proximity to Marine Corps Base Camp Pendleton makes it one of the most popular cities for military families. Ruben specializes in military relocations and VA financing, helping service members take full advantage of their benefits."
    },
    {
      question: "Can I use a VA loan to buy a home in Oceanside?",
      answer: "Yes! Ruben works closely with VA-approved lenders to help veterans and military families secure zero-down financing and no PMI options. He guides you through every step from eligibility to closing."
    },
    {
      question: "Are there good investment opportunities in Oceanside?",
      answer: "Yes! Oceanside's mix of beachfront homes, short-term rentals, and residential neighborhoods creates strong opportunities for investors. Properties near The Strand and MiraCosta College are especially popular for rental income."
    },
    {
      question: "Does Ruben offer property management in Oceanside?",
      answer: "Yes! Ruben offers comprehensive property management services for Oceanside owners, including marketing, tenant screening, maintenance, and compliance with California's short-term rental regulations."
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
              backgroundImage: "url('/images/7-web-or-mls-royal (27 of 47).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-lexend leading-tight">
                Real Estate Services Oceanside
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Helping Oceanside families, veterans, and investors make confident real estate moves backed by proven experience and North County insight.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-coastal-teal hover:bg-[#5F7D6D] text-white text-lg px-8 py-6"
                  onClick={() => window.open('tel:+15416021026', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (541) 602-1026
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-coastal-cream text-coastal-sage text-lg px-8 py-6"
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
              Helping Families, Veterans, and Investors in Oceanside
            </h2>
            
            {/* Featured Image */}
            <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden mb-8 shadow-xl">
              <Image
                src="/images/5-web-or-mls-Encenitas blvd (4 of 28).JPG"
                alt="Oceanside California beachfront real estate and coastal properties"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Ruben Real Estate San Diego, we're proud to serve Oceanside, a vibrant coastal city with a strong military community, thriving rental market, and growing family neighborhoods. Whether you're buying your first home, investing in property, or selling in today's competitive market, Ruben Banuelos provides expert guidance built on trust, empathy, and local experience.
              </p>
              <p>
                As a former Doctor of Physical Therapy turned licensed real estate broker, Ruben combines healthcare discipline with real estate expertise—ensuring every decision is handled with precision and care.
              </p>

              <div className="my-8">
                <Button 
                  size="lg"
                  className="bg-[#5F7D6D] hover:bg-[#4d6558] hover:scale-105 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start Your Oceanside Home Search Today
                </Button>
              </div>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">VA Loan Expertise in Oceanside, CA</h3>
              <p>
                Oceanside is home to many active-duty and retired service members from nearby Camp Pendleton, making VA loans one of the best options for local buyers. Ruben specializes in helping veterans and military families take full advantage of their benefits.
              </p>
              <p>
                He works closely with VA-approved lenders, streamlines pre-approval, and helps clients secure zero-down financing and no PMI options. With his experience, you'll confidently navigate every step—from eligibility to closing.
              </p>
              <p>
                Whether you're looking for a home near the beach, downtown Oceanside, or in family communities like Rancho Del Oro and Fire Mountain, Ruben makes sure you find a property that fits your lifestyle and long-term goals.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Investment Property Guidance in Oceanside</h3>
              <p>
                Oceanside's mix of beachfront homes, short-term rentals, and residential neighborhoods creates strong opportunities for investors. Ruben helps clients identify profitable rental and investment properties that align with their financial objectives.
              </p>
              <p>
                As both a broker and NARPM-certified property manager, Ruben provides detailed market analysis and hands-on management strategies for long-term success. He guides investors through cash flow projections, tenant placement, and portfolio expansion.
              </p>
              <p>
                Whether acquiring vacation rentals near The Strand or duplexes close to MiraCosta College, Ruben ensures your Oceanside investments deliver consistent results and appreciation potential.
              </p>

              <div className="my-8 bg-coastal-cream/20 p-6 rounded-lg border-l-4 border-[#5F7D6D]">
                <p className="font-semibold text-[#5F7D6D] mb-2">Interested in Oceanside rental properties?</p>
                <Button 
                  variant="outline"
                  className="border-[#5F7D6D] text-[#5F7D6D] hover:bg-[#5F7D6D] hover:text-white"
                  onClick={() => window.open('tel:+15416021026', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Discuss Investment Opportunities
                </Button>
              </div>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Family-First Homebuying in Oceanside</h3>
              <p>
                For families seeking the perfect balance of coastal living and community, Oceanside offers it all. Ruben helps families explore safe, welcoming neighborhoods close to quality schools, local parks, and ocean views.
              </p>
              <p>
                His family-first philosophy means each client receives personalized support—from home searches to closing day. Ruben understands the importance of finding a home that feels right both emotionally and financially. His communication, transparency, and calm approach make the process stress-free, even in a fast-moving market.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Property Management in Oceanside, California</h3>
              <p>
                Managing rental properties in Oceanside requires local expertise, especially with the area's short-term rental regulations and tenant laws. Ruben offers comprehensive property management services to help owners maintain their investments and maximize returns.
              </p>
              <p>
                From marketing and screening tenants to handling maintenance requests and inspections, his team manages every detail with professionalism and care. Ruben's NARPM certification ensures all properties meet California's legal and ethical standards, protecting both landlords and tenants.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Local Oceanside Expertise and Community Insight</h3>
              <p>
                As a North County local, Ruben has a deep understanding of Oceanside's evolving market—from beachfront redevelopment to new residential growth. He helps buyers and investors make informed decisions based on neighborhood trends, market shifts, and local demand.
              </p>
              <p>
                Ruben's focus on community and service reflects his belief that real estate is about more than transactions—it's about helping families and individuals build better lives through homeownership and smart investment.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Buying and Selling in Oceanside</h3>
              <p>
                Ruben provides full-service guidance for buyers and sellers throughout Oceanside.
              </p>
              <p>
                <strong>For Buyers:</strong> personalized property searches, local neighborhood insight, skilled negotiation, and access to trusted loan and inspection partners.
              </p>
              <p>
                <strong>For Sellers:</strong> professional marketing, accurate pricing, and seamless communication to help you achieve top value in your sale.
              </p>
              <p>
                Recognized as a Rising Star at Team Fearless Realty, Ruben's consistent results and reputation for integrity make him one of North County's trusted real estate professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/30 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend mb-8 text-center">
              Why Work With Ruben Real Estate San Diego in Oceanside
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "Expertise in VA loans, investment properties, and property management",
                "Background in healthcare, bringing empathy and precision to every deal",
                "Deep knowledge of Oceanside's neighborhoods, schools, and market trends",
                "NARPM-certified and licensed broker under the California Department of Real Estate",
                "Commitment to helping veterans, families, and investors reach their goals"
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
                className="bg-[#5F7D6D] hover:bg-[#4d6558] hover:scale-105 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/contact'}
              >
                Work With an Oceanside Real Estate Expert
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend text-center mb-12">
              Oceanside Real Estate FAQ
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
              Explore Oceanside, California
            </h2>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107025.44267634892!2d-117.41476834843749!3d33.22094749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc6e0d89c04b9d%3A0x6e1e5f7d2f3e4d2e!2sOceanside%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oceanside California map"
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
                { name: "Carlsbad", slug: "carlsbad", image: "/images/40-web-or-mls-Venice (38 of 53).JPG" },
                { name: "Vista", slug: "vista", image: "/images/51-web-or-mls-Riviera (50 of 55).JPG" },
                { name: "San Marcos", slug: "san-marcos", image: "/images/3-web-or-mls-Encenitas blvd (2 of 28).JPG" },
                { name: "Escondido", slug: "escondido", image: "/images/41-web-or-mls-Venice (39 of 53).JPG" }
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
              Ready to Get Started in Oceanside?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're buying, selling, or investing in Oceanside real estate, Ruben Banuelos is ready to help you take the next step with confidence. His proven process and local expertise make your experience seamless from start to finish.
            </p>
            <p className="text-lg text-muted-foreground">
              Start your next chapter today—reach out to Ruben Real Estate San Diego or contact the team to schedule your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#5F7D6D] hover:bg-[#4d6558] hover:scale-105 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('tel:+15416021026', '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                (541) 602-1026
              </Button>
              <Button 
                size="lg" 
                className="bg-[#5F7D6D] hover:bg-[#4d6558] hover:scale-105 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
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
