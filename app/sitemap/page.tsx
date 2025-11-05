"use client"

import PageNavbar from "@/components/sections/PageNavbar"
import Footer from "@/components/sections/Footer"
import Breadcrumbs from "@/components/sections/Breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, Info, Briefcase, MapPin, FileText, Phone, BookOpen, Award, Shield, FileCheck } from "lucide-react"

export default function SitemapPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://rubenrealestate.com' },
    { name: 'Site Map', url: 'https://rubenrealestate.com/sitemap' }
  ]

  const mainPages = [
    { name: 'Home', url: '/', icon: Home, description: 'Main homepage with video hero section' },
    { name: 'Landing Page', url: '/landing', icon: Home, description: 'Alternative homepage layout' },
    { name: 'About', url: '/about', icon: Info, description: 'Learn about Ruben and his journey' },
    { name: 'Services', url: '/services', icon: Briefcase, description: 'Real estate services offered' },
    { name: 'Results', url: '/results', icon: Award, description: 'Success stories and testimonials' },
    { name: 'Resources', url: '/resources', icon: BookOpen, description: 'Helpful resources and guides' },
    { name: 'Contact', url: '/contact', icon: Phone, description: 'Get in touch with Ruben' },
  ]

  const serviceAreas = [
    { name: 'Service Areas Hub', url: '/service-areas', icon: MapPin, description: 'Overview of all service areas' },
    { name: 'San Marcos', url: '/service-areas/san-marcos', icon: MapPin, description: 'Real estate services in San Marcos' },
    { name: 'Carlsbad', url: '/service-areas/carlsbad', icon: MapPin, description: 'Real estate services in Carlsbad' },
    { name: 'Oceanside', url: '/service-areas/oceanside', icon: MapPin, description: 'Real estate services in Oceanside' },
    { name: 'Escondido', url: '/service-areas/escondido', icon: MapPin, description: 'Real estate services in Escondido' },
    { name: 'Vista', url: '/service-areas/vista', icon: MapPin, description: 'Real estate services in Vista' },
  ]

  const legalPages = [
    { name: 'Privacy Policy', url: '/privacy', icon: Shield, description: 'Privacy policy and data protection' },
    { name: 'Terms of Service', url: '/terms', icon: FileCheck, description: 'Terms and conditions of use' },
  ]

  return (
    <>
      <PageNavbar />
      <Breadcrumbs items={breadcrumbItems} />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="hero-section relative py-32 sm:py-40 md:py-48 lg:py-56 xl:py-64 overflow-hidden -mt-20 pt-64 sm:pt-80 md:pt-88 lg:pt-96 xl:pt-104">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/images/5-web-or-mls-royal (25 of 47).JPG')",
              backgroundAttachment: "fixed"
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            <div className="text-center space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-lexend leading-tight">
                Site Map
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed px-4">
                Explore all pages and sections of our website
              </p>
            </div>
          </div>
        </section>

        {/* Main Pages Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-4 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-coastal-charcoal font-lexend leading-tight">
                Main Pages
              </h2>
              <p className="text-base sm:text-lg text-coastal-slate max-w-3xl mx-auto">
                Navigate through our main sections and learn about our services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {mainPages.map((page, index) => {
                const Icon = page.icon
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-coastal-teal">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <Icon className="w-6 h-6 text-coastal-teal" />
                        <CardTitle className="text-xl font-bold text-coastal-charcoal group-hover:text-coastal-teal transition-colors">
                          {page.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-coastal-slate leading-relaxed">
                        {page.description}
                      </p>
                      <Link href={page.url}>
                        <Button variant="outline" className="w-full group-hover:bg-coastal-teal group-hover:text-white group-hover:border-coastal-teal transition-colors">
                          Visit Page
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-4 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-coastal-charcoal font-lexend leading-tight">
                Service Areas
              </h2>
              <p className="text-base sm:text-lg text-coastal-slate max-w-3xl mx-auto">
                Explore real estate services in North County communities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {serviceAreas.map((area, index) => {
                const Icon = area.icon
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-coastal-teal">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <Icon className="w-6 h-6 text-coastal-teal" />
                        <CardTitle className="text-xl font-bold text-coastal-charcoal group-hover:text-coastal-teal transition-colors">
                          {area.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-coastal-slate leading-relaxed">
                        {area.description}
                      </p>
                      <Link href={area.url}>
                        <Button variant="outline" className="w-full group-hover:bg-coastal-teal group-hover:text-white group-hover:border-coastal-teal transition-colors">
                          Visit Page
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Legal Pages Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-4 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-coastal-charcoal font-lexend leading-tight">
                Legal & Policy Pages
              </h2>
              <p className="text-base sm:text-lg text-coastal-slate max-w-3xl mx-auto">
                Important legal information and policies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {legalPages.map((page, index) => {
                const Icon = page.icon
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-coastal-teal">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <Icon className="w-6 h-6 text-coastal-teal" />
                        <CardTitle className="text-xl font-bold text-coastal-charcoal group-hover:text-coastal-teal transition-colors">
                          {page.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-coastal-slate leading-relaxed">
                        {page.description}
                      </p>
                      <Link href={page.url}>
                        <Button variant="outline" className="w-full group-hover:bg-coastal-teal group-hover:text-white group-hover:border-coastal-teal transition-colors">
                          Visit Page
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-coastal-charcoal font-lexend leading-tight">
              Quick Links
            </h2>
            <p className="text-base sm:text-lg text-coastal-slate leading-relaxed">
              Need help finding something? Contact us directly or use these quick links.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="green" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Our Services
                </Button>
              </Link>
              <Link href="/results">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Award className="w-5 h-5 mr-2" />
                  View Results
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

