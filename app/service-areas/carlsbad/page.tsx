'use client'

import PageNavbar from "@/components/sections/PageNavbar"
import Footer from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"

export default function CarlsbadPage() {
  const faqs = [
    {
      question: "Is Carlsbad a good place for luxury real estate investment?",
      answer: "Absolutely! Carlsbad is one of North County's strongest real estate markets, offering excellent opportunities for both long-term and short-term investors. Limited coastal inventory and strong demand ensure consistent appreciation and investment security."
    },
    {
      question: "Can military families use VA loans in Carlsbad?",
      answer: "Yes! Carlsbad is home to many veterans and military families seeking homeownership near Camp Pendleton. Ruben specializes in VA loan assistance, working with trusted VA-approved lenders to streamline pre-approvals and secure zero-down financing."
    },
    {
      question: "What are the best family neighborhoods in Carlsbad?",
      answer: "Bressi Ranch, Calavera Hills, and La Costa are among the most popular family-friendly neighborhoods. These areas offer top-rated schools, parks, safe streets, resort-style amenities, and strong community atmosphere."
    },
    {
      question: "Does Ruben offer property management for Carlsbad rentals?",
      answer: "Yes! Ruben Real Estate San Diego offers full-service property management tailored to Carlsbad's coastal market. Services include tenant placement, rent collection, repairs, compliance, and NARPM-certified standards for both long-term and vacation rentals."
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
              backgroundImage: "url('/images/40-web-or-mls-Venice (38 of 53).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-lexend leading-tight">
                Real Estate Services Carlsbad
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Your Carlsbad real estate partner helping families, veterans, and investors buy, sell, and invest with confidence and precision.
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
              Helping Families, Veterans, and Investors in Carlsbad
            </h2>
            
            {/* Featured Image */}
            <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden mb-8 shadow-xl">
              <Image
                src="/images/4-web-or-mls-Encenitas blvd (3 of 28).JPG"
                alt="Carlsbad California luxury coastal real estate and beach properties"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Ruben Real Estate San Diego, we proudly serve Carlsbad, one of North County's most desirable coastal cities. Known for its beaches, top-rated schools, and vibrant neighborhoods, Carlsbad offers an ideal mix of lifestyle and investment opportunity. Whether you're buying, selling, or investing, Ruben Banuelos provides expert guidance rooted in integrity, precision, and personal care.
              </p>
              <p>
                With a background as a Doctor of Physical Therapy turned licensed broker, Ruben applies the same attention to detail and communication skills that defined his medical career—ensuring every client feels informed and supported throughout the process.
              </p>

              <div className="my-8">
                <Button 
                  className="bg-coastal-teal hover:bg-[#5F7D6D] text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  Explore Carlsbad Luxury Homes Today
                </Button>
              </div>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">VA Loan Expertise in Carlsbad, CA</h3>
              <p>
                Carlsbad is home to many veterans and military families seeking stability and homeownership near Camp Pendleton and the coast. Ruben specializes in VA loan assistance, helping service members leverage their benefits with ease and confidence.
              </p>
              <p>
                He works closely with trusted VA-approved lenders to streamline pre-approvals, secure zero-down financing, and eliminate PMI. With insight into neighborhoods like La Costa, Calavera Hills, and Bressi Ranch, Ruben helps veterans find homes that fit their lifestyle and budget while ensuring a stress-free transaction from start to finish.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Investment Property Guidance in Carlsbad</h3>
              <p>
                As one of North County's strongest real estate markets, Carlsbad offers excellent opportunities for both long-term and short-term investors. Ruben provides clients with clear strategies to identify high-value properties, forecast returns, and manage rentals efficiently.
              </p>
              <p>
                As a NARPM-certified property manager, he guides investors through acquisition, tenant management, and ongoing maintenance. Whether it's a luxury condo near the beach or a family rental in Aviara, Ruben's data-driven approach helps clients make profitable and sustainable investments.
              </p>

              <div className="my-8 bg-coastal-cream/20 p-6 rounded-lg border-l-4 border-[#5F7D6D]">
                <p className="font-semibold text-[#5F7D6D] mb-2">Interested in Carlsbad luxury investment properties?</p>
                <Button 
                  variant="outline"
                  className="border-[#5F7D6D] text-[#5F7D6D] hover:bg-[#5F7D6D] hover:text-white"
                  onClick={() => window.open('tel:+15416021026', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule Investment Consultation
                </Button>
              </div>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Family-First Homebuying in Carlsbad</h3>
              <p>
                For families, Carlsbad offers a perfect blend of community and convenience—great schools, safe neighborhoods, and easy access to parks, beaches, and dining. Ruben's family-first philosophy ensures every client finds a home that fits both their lifestyle and long-term financial goals.
              </p>
              <p>
                He takes the time to understand each family's priorities, provides honest advice, and keeps communication clear from offer to closing. With Ruben, families can navigate the competitive Carlsbad market confidently and efficiently.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Property Management in Carlsbad, California</h3>
              <p>
                Owning rental property in Carlsbad can be highly rewarding—but it requires the right management. Ruben Real Estate San Diego offers full-service property management tailored to the coastal market.
              </p>
              <p>
                From tenant placement and rent collection to repairs and compliance, Ruben's team handles all aspects of ownership with professionalism and transparency. His NARPM certification ensures every property meets high operational and ethical standards while maximizing owner returns and maintaining property value.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Local Carlsbad Expertise and Community Insight</h3>
              <p>
                As a North County local, Ruben understands the unique dynamics that make Carlsbad one of Southern California's most sought-after markets. He tracks local developments, school district trends, and neighborhood values to help clients make informed decisions.
              </p>
              <p>
                Whether buying near Carlsbad Village, investing in La Costa Greens, or selling in Rancho Carrillo, Ruben's community insight ensures clients have every advantage in this competitive market.
              </p>

              <h3 className="text-2xl font-bold text-coastal-sage mt-8 mb-4">Buying and Selling Homes in Carlsbad</h3>
              <p>
                Whether you're moving into your dream home or preparing to sell, Ruben delivers personalized, start-to-finish service.
              </p>
              <p>
                <strong>For Buyers:</strong> customized home searches, in-depth market data, skilled negotiation, and reliable lending and inspection referrals.
              </p>
              <p>
                <strong>For Sellers:</strong> strategic pricing, professional marketing, and organized communication for a smooth, successful closing.
              </p>
              <p>
                As a Rising Star Award recipient at Team Fearless Realty, Ruben has built a reputation for results and trust among clients across North County.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/30 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend mb-8 text-center">
              Why Work With Ruben Real Estate San Diego in Carlsbad
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "Expertise in VA loans, investment properties, and property management",
                "Healthcare and real estate background providing empathy and precision",
                "Deep understanding of Carlsbad's coastal communities and market trends",
                "NARPM-certified and licensed California broker",
                "Dedicated to serving families, veterans, and investors with professionalism and care"
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
                Work With a Carlsbad Real Estate Expert
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-coastal-sage font-lexend text-center mb-12">
              Carlsbad Real Estate FAQ
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
              Explore Carlsbad, California
            </h2>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107025.44267634892!2d-117.35076784843749!3d33.15841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc73453f3bee5b%3A0xa42b32c807a0db0a!2sCarlsbad%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carlsbad California map"
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
              Ready to Get Started in Carlsbad?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              If you're planning to buy, sell, or invest in Carlsbad, Ruben Banuelos is ready to help you achieve your real estate goals. His disciplined, client-first approach and local expertise ensure a smooth and rewarding experience.
            </p>
            <p className="text-lg text-muted-foreground">
              Reach out to Ruben Real Estate San Diego today or contact the team to schedule your free consultation.
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
