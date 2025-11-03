import type { Metadata } from 'next'
import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import ServicesSection from "@/components/sections/ServicesSection"
import ServiceAreasMapSection from "@/components/sections/ServiceAreasMapSection"
import AboutSection from "@/components/sections/AboutSection"
import PortfolioSection from "@/components/sections/PortfolioSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: 'Buy, Sell & Invest in North County Real Estate | Ruben Real Estate',
  description: 'Trusted North County experts helping families, veterans, and investors with local insight and proven results.',
  alternates: {
    canonical: '/landing',
  },
}

export default function LandingPage() {
  return (
    <main className="flex-1 bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <ServiceAreasMapSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

