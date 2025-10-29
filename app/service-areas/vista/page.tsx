'use client'

import PageNavbar from "@/components/sections/PageNavbar"
import Footer from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

export default function VistaPage() {
  const faqs = [
    {
      question: "Is Vista a good place to invest in real estate?",
      answer: "Yes! Vista's strong rental demand and growing economy make it ideal for real estate investors. The area offers affordable entry prices and excellent cash flow potential, with properties near Vista Village and Melrose Drive performing particularly well."
    },
    {
      question: "Can veterans use VA loans to buy homes in Vista?",
      answer: "Absolutely! Vista is home to many veterans and military families. Ruben specializes in helping service members use their VA loan benefits, partnering with trusted VA-approved lenders to secure zero-down loans, no PMI, and competitive rates."
    },
    {
      question: "What are the best neighborhoods for families in Vista?",
      answer: "Rancho Buena Vista, Shadowridge, and Bobier are excellent family-friendly neighborhoods. These areas offer excellent schools, parks, safe streets, and strong community atmosphere with convenient access to amenities."
    },
    {
      question: "Does Ruben offer property management in Vista?",
      answer: "Yes! Ruben Real Estate San Diego offers comprehensive property management services including marketing, tenant placement, maintenance, rent collection, and inspections. As a NARPM member, all properties are managed to strict professional and ethical standards."
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
              backgroundImage: "url('/images/51-web-or-mls-Riviera (50 of 55).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-lexend leading-tight">
                Real Estate Services Vista
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Trusted Vista real estate expert helping families, veterans, and investors buy, sell, and invest with clear communication and care.
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
              Helping Families, Veterans, and Investors in Vista
            </h2>
            
            {/* Featured Image */}
            <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden mb-8 shadow-xl">
              <Image
                src="/images/54-web-or-mls-Riviera (53 of 55).JPG"
                alt="Vista California real estate homes and properties"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Ruben Real Estate San Diego, we proudly serve Vista, a growing North County community known for its family neighborhoods, thriving downtown, and strong rental market. Whether you're buying your first home, investing in property, or selling, Ruben Banuelos offers expert guidance built on trust, care, and deep local knowledge.
              </p>
              <p>
                With a background as a Doctor of Physical Therapy turned real estate broker, Ruben combines empathy and precision—helping every client make smart, confident real estate decisions.
              </p>

              <div className="my-8">
                <Button 
                  variant="blackOnLight"
                  onClick={() => window.location.href = '/contact'}
                >
                  Begin Your Vista Home Journey Today
                </Button>
              </div>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">VA Loan Expertise in Vista, CA</h3>
              <p>
                Vista is home to many veterans and military families who can benefit from the VA loan program. Ruben specializes in helping service members and veterans use their benefits to achieve homeownership with ease.
              </p>
              <p>
                He partners with trusted VA-approved lenders and simplifies the process from pre-approval to closing—securing zero-down loans, no PMI, and competitive rates. Whether you're looking near Shadowridge, Buena Creek, or Downtown Vista, Ruben helps you find the right property for your needs. His detail-oriented approach ensures a smooth, stress-free experience for every veteran and military family.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Investment Property Guidance in Vista</h3>
              <p>
                Vista's strong rental demand and growing economy make it ideal for real estate investors. As both a broker and NARPM-certified property manager, Ruben provides investors with the insight and tools to build profitable portfolios.
              </p>
              <p>
                He helps clients identify high-performing properties, analyze returns, and manage rentals effectively. From duplexes near Vista Village to single-family homes around Melrose Drive, Ruben guides investors through every step—ensuring long-term financial growth and stability.
              </p>

              <div className="my-8 bg-coastal-cream/20 p-6 rounded-lg border-l-4 border-[#5F7D6D]">
                <p className="font-semibold text-[#5F7D6D] mb-2">Ready to build your Vista investment portfolio?</p>
                <Button 
                  variant="green"
                  onClick={() => window.open('tel:+15416021026', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Investment Consultation
                </Button>
              </div>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Family-First Homebuying in Vista</h3>
              <p>
                For families, Vista offers a blend of suburban comfort and community spirit. Ruben's family-first approach focuses on helping clients find homes that fit their goals and lifestyle, not just their budget.
              </p>
              <p>
                He provides hands-on support throughout the buying process, helping families explore neighborhoods, compare schools, and understand market conditions. With clear communication and honest advice, Ruben ensures families feel confident from the first showing to closing day.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Property Management Services in Vista</h3>
              <p>
                Managing rental properties in Vista requires experience and organization. Ruben Real Estate San Diego offers comprehensive property management services to help owners protect and grow their investments.
              </p>
              <p>
                His team handles marketing, tenant placement, maintenance, rent collection, and inspections—so clients can enjoy passive income without the daily stress. As a NARPM member, Ruben upholds strict professional and ethical standards, ensuring every property is well-maintained and compliant with California regulations.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Local Vista Expertise and Community Insight</h3>
              <p>
                As a North County local, Ruben understands Vista's evolving real estate landscape. From the revitalized Downtown Vista Village to newer developments near Shadowridge, he offers clients up-to-date insight on property values, neighborhood trends, and community growth.
              </p>
              <p>
                Ruben's local focus allows him to guide buyers, sellers, and investors toward opportunities that match both their financial goals and lifestyle preferences.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Buying and Selling Homes in Vista</h3>
              <p>
                Whether you're buying your first home or selling your current property, Ruben delivers full-service support every step of the way.
              </p>
              <p>
                <strong>For Buyers:</strong> personalized home searches, detailed market insight, expert negotiation, and referrals to trusted lenders and inspectors.
              </p>
              <p>
                <strong>For Sellers:</strong> strategic pricing, high-quality marketing, and transparent communication to achieve top market value quickly and efficiently.
              </p>
              <p>
                Ruben's commitment to service has earned him recognition as a Rising Star Award recipient at Team Fearless Realty, reflecting his dedication and results.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/30 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend mb-8 text-center">
              Why Work With Ruben Real Estate San Diego in Vista
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "Specialized expertise in VA loans, investment properties, and property management",
                "Healthcare and real estate background for empathy and precision",
                "Deep knowledge of Vista's neighborhoods, schools, and growth areas",
                "NARPM-certified and licensed California broker",
                "Dedicated to helping families, veterans, and investors succeed"
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
                Work With a Vista Real Estate Expert
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend text-center mb-12">
              Vista Real Estate FAQ
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
              Explore Vista, California
            </h2>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53473.71234567!2d-117.24256784843749!3d33.20004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db8d50e3ed16e5%3A0x8c3f3f5e5f5e5f5!2sVista%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vista California map"
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
                { name: "Oceanside", slug: "oceanside", image: "/images/7-web-or-mls-royal (27 of 47).JPG" },
                { name: "San Marcos", slug: "san-marcos", image: "/images/3-web-or-mls-Encenitas blvd (2 of 28).JPG" },
                { name: "Carlsbad", slug: "carlsbad", image: "/images/40-web-or-mls-Venice (38 of 53).JPG" },
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
              Ready to Get Started in Vista?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              If you're buying, selling, or investing in Vista, Ruben Banuelos is ready to help you make the right move. His experience, professionalism, and community focus ensure a smooth and rewarding real estate journey.
            </p>
            <p className="text-lg text-muted-foreground">
              Reach out to Ruben Real Estate San Diego or simply contact the team today to schedule your free consultation.
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
