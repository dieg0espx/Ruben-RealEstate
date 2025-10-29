"use client"

import PageNavbar from "@/components/sections/PageNavbar"
import Footer from "@/components/sections/Footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import useLanguageStore from "@/hooks/useLanguageStore"
import type { contactTranslations } from "@/translations/contact/en"

export default function ContactPage() {
  const { getPage } = useLanguageStore()
  const pageT = getPage('contact') as typeof contactTranslations
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    clientType: '',
    message: '',
    marketingConsent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      clientType: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          clientType: '',
          message: '',
          marketingConsent: false
        })
      } else {
        console.error('API Error:', result)
        setErrorMessage(result.error || 'Failed to send message')
        setSubmitStatus('error')
        return
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle smooth scroll from other pages
  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = sessionStorage.getItem('scrollToHash')
      if (hash) {
        console.log('Contact page: Scrolling to hash:', hash)
        sessionStorage.removeItem('scrollToHash')
        
        // Wait for page to fully load
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            console.log('Contact page: Found element, scrolling to:', hash)
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            
            // Scroll directly to the target section
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          } else {
            console.log('Contact page: Element not found:', hash)
          }
        }, 500) // Wait for page to load
      }
    }

    handleScrollToSection()
  }, [])

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-coastal-teal" />,
      title: pageT.contactMethods.phone.title,
      details: pageT.contactMethods.phone.details,
      description: pageT.contactMethods.phone.description,
      action: pageT.contactMethods.phone.action,
      href: "tel:+15416021026"
    },
    {
      icon: <Mail className="w-8 h-8 text-coastal-sage" />,
      title: pageT.contactMethods.email.title,
      details: pageT.contactMethods.email.details,
      description: pageT.contactMethods.email.description,
      action: pageT.contactMethods.email.action,
      href: "mailto:ruben.o.banuelos@gmail.com"
    },
    {
      icon: <Calendar className="w-8 h-8 text-coastal-teal" />,
      title: pageT.contactMethods.schedule.title,
      details: pageT.contactMethods.schedule.details,
      description: pageT.contactMethods.schedule.description,
      action: pageT.contactMethods.schedule.action,
      href: "#consultation-form"
    }
  ]

  const officeHours = pageT.officeHours.schedule

  return (
    <>
      <PageNavbar />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
      <section 
        className="hero-section relative py-32 sm:py-40 md:py-48 lg:py-56 xl:py-64 overflow-hidden -mt-20 pt-64 sm:pt-80 md:pt-88 lg:pt-96 xl:pt-104"
        style={{
          backgroundImage: "url('/images/60-web-or-mls-Riviera_drone (6 of 12).JPG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark gradient overlay for text contrast - matching home page */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-lexend drop-shadow-lg">
              {pageT.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              {pageT.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" variant="green" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4" onClick={() => window.open('tel:+15416021026', '_self')}>
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call Now
              </Button>
              <Button size="lg" variant="whiteOnDark" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4" onClick={() => { const el = document.getElementById('consultation-form'); if (el) { const offset = 80; const top = el.getBoundingClientRect().top + window.scrollY - offset; window.scrollTo({ top, behavior: 'smooth' }); } else { window.location.href = '/contact#consultation-form'; } }}>
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-lexend leading-tight">
              {pageT.contactMethods.title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              {pageT.contactMethods.subtitle}
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-coastal-cream/40 to-white hover:from-coastal-teal/5 hover:to-coastal-sage/5 transform hover:-translate-y-1">
                  <CardContent className="p-3 sm:p-6 lg:p-8 text-center space-y-3 sm:space-y-6">
                    <div className="flex justify-center">
                      <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-coastal-teal/10 to-coastal-sage/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-3">
                      <h3 className="text-base sm:text-xl font-bold text-foreground group-hover:text-coastal-teal transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-sm sm:text-lg font-semibold text-coastal-teal break-words">
                        {method.details}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {method.description}
                      </p>
                    </div>
                    <Button asChild className="w-full text-white font-semibold hover:bg-white hover:text-coastal-sage transition-all duration-300 text-xs sm:text-base h-8 sm:h-10" style={{ backgroundColor: '#5F7D6D' }}>
                      <a href={method.href}>
                        {method.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Contact Element Image - Bottom Left Corner */}
            <div className="absolute -bottom-16 -left-8 sm:-bottom-20 sm:-left-16 lg:-bottom-32 lg:-left-80">
              <img 
                src="/icons/contact/contact elements-01.png" 
                alt="Contact Element" 
                className="w-32 h-auto sm:w-48 lg:w-80 opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section 
        id="consultation-form" 
        className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/65-web-or-mls-Riviera_drone (12 of 12).JPG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-lexend drop-shadow-lg leading-tight">
              {pageT.form.title}
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md px-4">
              {pageT.form.subtitle}
            </p>
          </div>
          
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">{pageT.form.successMessage}</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">
                      {errorMessage || pageT.form.errorMessage}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">{pageT.form.firstName}</Label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder={pageT.form.firstNamePlaceholder} 
                      required 
                      className="h-10" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">{pageT.form.lastName}</Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder={pageT.form.lastNamePlaceholder} 
                      required 
                      className="h-10" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">{pageT.form.email}</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={pageT.form.emailPlaceholder} 
                      required 
                      className="h-10" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">{pageT.form.phone}</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={pageT.form.phonePlaceholder} 
                      className="h-10" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clientType" className="text-sm font-medium">{pageT.form.clientType}</Label>
                  <Select value={formData.clientType} onValueChange={handleSelectChange}>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder={pageT.form.clientTypePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="veteran">{pageT.form.veteran}</SelectItem>
                      <SelectItem value="investor">{pageT.form.investor}</SelectItem>
                      <SelectItem value="family">{pageT.form.family}</SelectItem>
                      <SelectItem value="first-time">{pageT.form.firstTime}</SelectItem>
                      <SelectItem value="other">{pageT.form.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">{pageT.form.message}</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={pageT.form.messagePlaceholder}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input 
                      id="marketingConsent" 
                      name="marketingConsent" 
                      type="checkbox" 
                      checked={formData.marketingConsent}
                      onChange={handleInputChange}
                      required 
                      className="mt-1 h-4 w-4 border-input rounded flex-shrink-0" 
                    />
                    <label htmlFor="marketingConsent" className="text-xs text-muted-foreground leading-relaxed">
                      {pageT.form.marketingConsent} <a href="/privacy" className="underline">{pageT.form.privacyPolicy}</a> and <a href="/terms" className="underline">{pageT.form.termsOfUse}</a>.
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {pageT.form.dataProtection}
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full text-white font-semibold hover:bg-white hover:text-coastal-sage transition-all duration-300 h-12 text-base disabled:opacity-50" 
                  style={{ backgroundColor: '#5F7D6D' }}
                >
                  {isSubmitting ? pageT.form.submitting : pageT.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Hours & Location */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-lexend leading-tight">
                  {pageT.officeHours.title}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {pageT.officeHours.subtitle}
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-coastal-teal flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-base sm:text-lg">{pageT.officeHours.hoursTitle}</h3>
                      <div className="space-y-1 text-muted-foreground text-sm sm:text-base">
                        {officeHours.map((schedule, index) => (
                          <div key={index} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                            <span className="font-medium">{schedule.day}</span>
                            <span>{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-coastal-sage flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-base sm:text-lg">{pageT.officeHours.serviceAreaTitle}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {pageT.officeHours.serviceAreaDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {pageT.whyChoose.title}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-coastal-teal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-coastal-teal rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">{pageT.whyChoose.healthcare.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">{pageT.whyChoose.healthcare.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-coastal-sage/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-coastal-sage rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">{pageT.whyChoose.vaExpert.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">{pageT.whyChoose.vaExpert.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-coastal-steel/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-coastal-steel rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">{pageT.whyChoose.narpm.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">{pageT.whyChoose.narpm.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Element Image - Bottom Right */}
        <div className="absolute -bottom-8 -right-4 sm:-bottom-12 sm:-right-8 lg:-bottom-8 lg:-right-8">
          <img 
            src="/icons/contact/contact elements-02.png" 
            alt="Contact Element" 
            className="w-32 h-auto sm:w-48 lg:w-80 opacity-70"
          />
        </div>
      </section>


        <Footer />
      </main>
    </>
  )
}
