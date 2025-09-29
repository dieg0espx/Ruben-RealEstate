import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import PortfolioSection from "@/components/sections/PortfolioSection"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Home, Shield, Star, ArrowRight, CheckCircle } from "lucide-react"
import { useLanguageStore } from "@/hooks/useLanguageStore"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function ResultsPage() {
  const { t } = useLanguageStore()
  const { ref, isVisible } = useScrollAnimation()

  const successMetrics = [
    {
      icon: <Home className="w-8 h-8 text-coastal-teal" />,
      title: "Homes Sold",
      value: "50+",
      description: "Successful transactions across San Diego County"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-coastal-sage" />,
      title: "Average Sale Price",
      value: "$850K+",
      description: "Above market average with premium service"
    },
    {
      icon: <Shield className="w-8 h-8 text-coastal-steel" />,
      title: "Veteran Clients",
      value: "25+",
      description: "VA loan expertise and military family support"
    },
    {
      icon: <Star className="w-8 h-8 text-coastal-teal" />,
      title: "Client Rating",
      value: "5.0",
      description: "Perfect rating across all platforms"
    }
  ]

  const projectTypes = [
    {
      title: "Veteran Home Purchases",
      description: "Successfully guided 25+ veterans through VA loan process",
      image: "/images/veteran-home.jpg",
      stats: "100% VA loan approval rate"
    },
    {
      title: "Investment Properties",
      description: "Helped investors build portfolios with strategic acquisitions",
      image: "/images/investment-property.jpg", 
      stats: "Average 15% ROI for clients"
    },
    {
      title: "Family Home Sales",
      description: "Assisted growing families in finding their dream homes",
      image: "/images/family-home.jpg",
      stats: "Average 3 weeks to sell"
    },
    {
      title: "ADU Development",
      description: "Guided clients through ADU development for additional income",
      image: "/images/adu-development.jpg",
      stats: "Average $2,500/month rental income"
    }
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
              Proven Results
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-lexend">
              Success Stories & Results
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Real results from real clients. See how I've helped Veterans, Investors, 
              and Growing Families achieve their real estate goals.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
              By the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable results that speak to my commitment to client success
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-coastal-cream/40 to-white hover:from-coastal-teal/5 hover:to-coastal-sage/5">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-bold text-foreground group-hover:text-coastal-teal transition-colors">
                      {metric.value}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {metric.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {metric.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/40 via-white to-coastal-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
              Project Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of successful transactions and satisfied clients across different property types
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-coastal-teal/10 to-coastal-sage/10 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-coastal-teal/20 rounded-full flex items-center justify-center mx-auto">
                      <Home className="w-8 h-8 text-coastal-teal" />
                    </div>
                    <p className="text-sm text-muted-foreground">Project Image</p>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-coastal-teal transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-coastal-sage" />
                    <span className="text-sm font-semibold text-coastal-sage">
                      {project.stats}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-coastal-teal to-coastal-sage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-lexend">
            Ready to Be My Next Success Story?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Join the growing number of satisfied clients who have achieved their real estate goals with my help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-coastal-teal hover:bg-white/90 font-semibold">
              Start Your Success Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-coastal-teal font-semibold">
              View More Results
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
