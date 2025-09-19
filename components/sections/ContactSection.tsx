import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-coastal-cream/20 text-coastal-slate border-coastal-cream">
                <Phone className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-lexend">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss your real estate goals and create a strategy that works for you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-coastal-gradient rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-coastal-cream" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground">(541) 602-1026</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-coastal-steel rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-coastal-cream" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">ruben.o.banuelos@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-coastal-sage rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-coastal-cream" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Service Areas</div>
                  <div className="text-muted-foreground">North County San Diego</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-coastal-gradient hover:opacity-90 text-coastal-cream text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Strategy Call
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <Label htmlFor="clientType">I'm interested in:</Label>
                <select id="clientType" className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option>Veteran Services (Camp Pendleton, Miramar, Coronado)</option>
                  <option>Investment Opportunities</option>
                  <option>First-Time Home Buying</option>
                  <option>Property Management</option>
                  <option>General Consultation</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell me about your real estate goals..." rows={4} />
              </div>
              
              <Button type="submit" className="w-full bg-coastal-gradient hover:opacity-90 text-coastal-cream">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
