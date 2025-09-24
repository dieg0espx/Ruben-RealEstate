import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import ContactSection from "@/components/sections/ContactSection"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"
import { useLanguageStore } from "@/hooks/useLanguageStore"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function ContactPage() {
  const { t } = useLanguageStore()
  const { ref, isVisible } = useScrollAnimation()

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-coastal-teal" />,
      title: "Phone",
      details: "(619) 555-0123",
      description: "Call anytime for immediate assistance",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-8 h-8 text-coastal-sage" />,
      title: "Email",
      details: "ruben@rubenrealestate.com",
      description: "Send detailed questions or documents",
      action: "Send Email"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-coastal-steel" />,
      title: "Text Message",
      details: "(619) 555-0123",
      description: "Quick questions and updates",
      action: "Text Now"
    },
    {
      icon: <Calendar className="w-8 h-8 text-coastal-teal" />,
      title: "Schedule Meeting",
      details: "Online or In-Person",
      description: "Book a consultation at your convenience",
      action: "Schedule"
    }
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" }
  ]

  return (
    <main className="flex-1 bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-coastal-teal/10 via-white to-coastal-sage/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-6">
            <Badge className="bg-coastal-teal/20 text-coastal-slate border-coastal-teal px-6 py-3 text-lg font-medium">
              Get In Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-lexend">
              Let's Start Your Journey
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to buy, sell, or invest? I'm here to help you achieve your real estate goals 
              with personalized service and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
              How Would You Like to Connect?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-coastal-cream/40 to-white hover:from-coastal-teal/5 hover:to-coastal-sage/5">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    {method.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-coastal-teal transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-lg font-semibold text-coastal-teal">
                      {method.details}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                  <Button className="w-full bg-coastal-teal hover:bg-coastal-teal/90 text-white font-semibold">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/40 via-white to-coastal-sage/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
              Tell Me About Your Goals
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fill out this form and I'll get back to you within 24 hours with a personalized response
            </p>
          </div>
          
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-foreground">
                Get Your Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Your last name" required />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(619) 555-0123" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clientType">I am a... *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your situation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="veteran">Veteran looking to buy/sell</SelectItem>
                      <SelectItem value="investor">Real Estate Investor</SelectItem>
                      <SelectItem value="family">Growing Family</SelectItem>
                      <SelectItem value="first-time">First-Time Buyer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">When are you looking to buy/sell? *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediately">Immediately (0-30 days)</SelectItem>
                      <SelectItem value="soon">Soon (1-3 months)</SelectItem>
                      <SelectItem value="planning">Planning ahead (3-6 months)</SelectItem>
                      <SelectItem value="exploring">Just exploring (6+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell me about your goals and needs</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe what you're looking for, your budget range, preferred areas, or any specific requirements..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-coastal-teal hover:bg-coastal-teal/90 text-white font-semibold">
                  Send My Information
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Hours & Location */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-lexend">
                Office Hours & Location
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm available to meet with you at your convenience, whether in-person or virtually.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-coastal-teal" />
                  <div>
                    <h3 className="font-semibold text-foreground">Office Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span>{schedule.day}</span>
                          <span>{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-coastal-sage" />
                  <div>
                    <h3 className="font-semibold text-foreground">Service Area</h3>
                    <p className="text-muted-foreground">
                      San Diego County and surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Why Choose Me?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-coastal-teal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-coastal-teal rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Healthcare Background</h4>
                    <p className="text-muted-foreground">Brings empathy and attention to detail to every transaction</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-coastal-sage/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-coastal-sage rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">VA Loan Expertise</h4>
                    <p className="text-muted-foreground">Specialized knowledge to help veterans maximize their benefits</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-coastal-steel/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-coastal-steel rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">NARPM Certified</h4>
                    <p className="text-muted-foreground">Professional property management for investors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </main>
  )
}
