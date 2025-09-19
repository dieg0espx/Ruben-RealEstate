import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Heart, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-coastal-teal/20 text-coastal-slate border-coastal-teal">
            <Shield className="w-4 h-4 mr-2" />
            Specialized Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-lexend">
            Who I Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I focus on three key client types, bringing specialized expertise to each relationship.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Veterans */}
          <Card className="group hover:shadow-xl transition-all duration-300  overflow-hidden p-0 flex flex-col">
            <div className="relative h-48">
              <Image
                src="/images/1-web-or-mls-royal (6 of 47).JPG"
                alt="Veteran Services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-coastal-gradient/20"></div>
            </div>
            <CardHeader className="text-center pb-4 px-6 pt-6">
              <CardTitle className="text-3xl text-foreground font-lexend">Veterans</CardTitle>
              <CardDescription className="text-lg">
                Maximizing VA loan benefits and housing allowances
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6 flex flex-col flex-1">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">VA Loan Expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Military Housing Knowledge</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Camp Pendleton, Miramar & Coronado Focus</span>
                </li>
              </ul>
              <Button className="w-full bg-coastal-gradient hover:opacity-90 text-coastal-cream mt-auto">
                Get Veteran Guide
              </Button>
            </CardContent>
          </Card>

          {/* Investors */}
          <Card className="group hover:shadow-xl transition-all duration-300  overflow-hidden p-0 flex flex-col">
            <div className="relative h-48">
              <Image
                src="/images/1-web-or-mls-Riviera_drone (9 of 12).JPG"
                alt="Investment Services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-coastal-steel/20"></div>
            </div>
            <CardHeader className="text-center pb-4 px-6 pt-6">
              <CardTitle className="text-3xl text-foreground font-lexend">Investors</CardTitle>
              <CardDescription className="text-lg">
                House hacking, ADUs, and portfolio building
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6 flex flex-col flex-1">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">ADU Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Cap Rate Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Property Management</span>
                </li>
              </ul>
              <Button className="w-full bg-coastal-steel hover:opacity-90 text-coastal-cream mt-auto">
                Request Analysis
              </Button>
            </CardContent>
          </Card>

          {/* Families */}
          <Card className="group hover:shadow-xl transition-all duration-300  overflow-hidden p-0 flex flex-col">
            <div className="relative h-48">
              <Image
                src="/images/1-web-or-mls-Venice (20 of 53).JPG"
                alt="Family Services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-coastal-sage/20"></div>
            </div>
            <CardHeader className="text-center pb-4 px-6 pt-6">
              <CardTitle className="text-3xl text-foreground font-lexend">Growing Families</CardTitle>
              <CardDescription className="text-lg">
                First-time buyers and move-up opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6 flex flex-col flex-1">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">First-Time Buyer Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Move-Up Strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Community Knowledge</span>
                </li>
              </ul>
              <Button className="w-full bg-coastal-sage hover:opacity-90 text-coastal-cream mt-auto">
                Start Your Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
