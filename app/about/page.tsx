"use client"

import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import TimelineSection from "@/components/sections/TimelineSection"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, GraduationCap, Heart, Users, MapPin, Star, CheckCircle, Shield, Phone, Mail } from "lucide-react"
import { useLanguageStore } from "@/hooks/useLanguageStore"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function AboutPage() {
  const { t } = useLanguageStore()
  const { ref, isVisible } = useScrollAnimation()

  const credentials = [
    {
      icon: <GraduationCap className="w-8 h-8 text-coastal-teal" />,
      title: "Doctor of Physical\nTherapy",
      description: "Advanced healthcare background with deep understanding of human needs and service excellence"
    },
    {
      icon: <Award className="w-8 h-8 text-coastal-teal" />,
      title: "Rising Star\nAward",
      description: "Recognized for exceptional performance and rapid growth in real estate"
    },
    {
      icon: <Users className="w-8 h-8 text-coastal-teal" />,
      title: "NARPM\nCertified",
      description: "National Association of Residential Property Managers certification"
    },
    {
      icon: <Shield className="w-8 h-8 text-coastal-teal" />,
      title: "DRE# 02153497\nLicensed Broker",
      description: "Licensed Broker with California Department of Real Estate"
    }
  ]

  const values = [
    "Family-first approach to real estate",
    "Healthcare background brings empathy and attention to detail",
    "Dual expertise in healthcare and real estate",
    "Community-focused service philosophy",
    "Veteran-friendly with VA loan expertise"
  ]

  return (
    <main className="flex-1 bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-48 lg:py-72 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/41-web-or-mls-Venice (39 of 53).JPG')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-lexend">
              From Healthcare to Real Estate
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              A Doctor of Physical Therapy who found his true calling in helping families find their perfect homes and investors build their portfolios.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Credentials Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/6-web-or-mls-royal (26 of 47).JPG')"
            }}
          ></div>
        </div>
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-lexend">
              Credentials & Recognition
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              My unique background combines healthcare expertise with real estate excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((credential, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm hover:bg-white/95">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    {credential.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-coastal-teal transition-colors whitespace-pre-line">
                    {credential.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {credential.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-coastal-charcoal font-lexend">
                What Drives Me
              </h2>
              <p className="text-lg text-coastal-slate leading-relaxed">
                My approach to real estate is shaped by my healthcare background and family values. 
                I believe in treating every client with the same care and attention I would give my own family.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-coastal-slate">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-coastal-teal/10 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-8 h-8 text-secondary" />
                    <h3 className="text-2xl font-bold text-coastal-charcoal">Family First</h3>
                  </div>
                  <p className="text-coastal-slate leading-relaxed">
                    As a family man, I understand the importance of finding the right home. 
                    Every decision I make is guided by what's best for your family's future.
                  </p>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-coastal-teal/10 to-coastal-sage/10 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-8 h-8 text-secondary" />
                    <h3 className="text-2xl font-bold text-coastal-charcoal">Community Focus</h3>
                  </div>
                  <p className="text-coastal-slate leading-relaxed">
                    I'm deeply connected to San Diego County and understand the unique needs 
                    of our diverse communities, from military families to growing neighborhoods.
                  </p>
                </div>
              </Card>
            </div>
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
            Let's discuss how my unique background and expertise can help you achieve your real estate goals.
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
