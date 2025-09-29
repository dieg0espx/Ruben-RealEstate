import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Video, BookOpen, CheckCircle, ArrowRight, ExternalLink } from "lucide-react"
import { useLanguageStore } from "@/hooks/useLanguageStore"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function ResourcesPage() {
  const { t } = useLanguageStore()
  const { ref, isVisible } = useScrollAnimation()

  const resourceCategories = [
    {
      icon: <FileText className="w-8 h-8 text-coastal-teal" />,
      title: "Free Guides",
      description: "Comprehensive guides to help you navigate the real estate process",
      resources: [
        {
          title: "First-Time Home Buyer's Guide",
          description: "Everything you need to know about buying your first home",
          type: "PDF Guide",
          pages: "24 pages",
          downloadCount: "500+ downloads"
        },
        {
          title: "VA Loan Benefits Guide",
          description: "Complete guide to maximizing your VA loan benefits",
          type: "PDF Guide", 
          pages: "18 pages",
          downloadCount: "300+ downloads"
        },
        {
          title: "Investment Property Checklist",
          description: "Step-by-step checklist for evaluating investment properties",
          type: "PDF Checklist",
          pages: "12 pages",
          downloadCount: "250+ downloads"
        }
      ]
    },
    {
      icon: <Video className="w-8 h-8 text-coastal-sage" />,
      title: "Educational Videos",
      description: "Short, informative videos covering key real estate topics",
      resources: [
        {
          title: "Understanding VA Loans",
          description: "5-minute overview of VA loan benefits and process",
          type: "Video",
          duration: "5:30",
          views: "2.5K views"
        },
        {
          title: "ADU Development Basics",
          description: "Introduction to Accessory Dwelling Units for additional income",
          type: "Video",
          duration: "7:15",
          views: "1.8K views"
        },
        {
          title: "Market Trends in San Diego",
          description: "Current market analysis and future predictions",
          type: "Video",
          duration: "6:45",
          views: "3.2K views"
        }
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-coastal-steel" />,
      title: "Articles & Insights",
      description: "Thought leadership content and market insights",
      resources: [
        {
          title: "The Healthcare Professional's Guide to Real Estate",
          description: "How my healthcare background influences my real estate approach",
          type: "Article",
          readTime: "8 min read",
          publishDate: "2 weeks ago"
        },
        {
          title: "Veteran Home Buying: Common Mistakes to Avoid",
          description: "Learn from common pitfalls in the veteran home buying process",
          type: "Article",
          readTime: "6 min read",
          publishDate: "1 month ago"
        },
        {
          title: "Building Wealth Through Real Estate Investment",
          description: "Strategic approaches to building long-term wealth",
          type: "Article",
          readTime: "10 min read",
          publishDate: "3 weeks ago"
        }
      ]
    }
  ]

  const upcomingContent = [
    "San Diego Neighborhood Guide",
    "Property Management Best Practices",
    "Tax Benefits for Real Estate Investors",
    "Home Staging for Maximum Value",
    "Understanding Market Cycles"
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
              Free Resources
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-lexend">
              Educational Resources
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Free guides, videos, and articles to help you make informed real estate decisions. 
              Position yourself as a knowledgeable buyer, seller, or investor.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-lexend">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {category.resources.map((resource, resourceIndex) => (
                    <Card key={resourceIndex} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-coastal-cream/40 to-white hover:from-coastal-teal/5 hover:to-coastal-sage/5">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-coastal-teal/20 text-coastal-slate border-coastal-teal">
                            {resource.type}
                          </Badge>
                          <div className="text-sm text-muted-foreground">
                            {resource.pages || resource.duration || resource.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-coastal-teal transition-colors">
                          {resource.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{resource.downloadCount || resource.views || resource.publishDate}</span>
                          <div className="flex items-center space-x-2">
                            {categoryIndex === 0 ? (
                              <Download className="w-4 h-4" />
                            ) : categoryIndex === 1 ? (
                              <Video className="w-4 h-4" />
                            ) : (
                              <BookOpen className="w-4 h-4" />
                            )}
                          </div>
                        </div>
                        
                        <Button className="w-full bg-coastal-teal hover:bg-coastal-teal/90 text-white font-semibold">
                          {categoryIndex === 0 ? 'Download Free' : categoryIndex === 1 ? 'Watch Now' : 'Read Article'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Content Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coastal-cream/40 via-white to-coastal-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
              Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              New educational content is added regularly. Stay updated with the latest insights and guides.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingContent.map((content, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-10 h-10 bg-coastal-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-coastal-teal" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-coastal-teal transition-colors">
                      {content}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      In development
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-coastal-teal to-coastal-sage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-lexend">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Get notified when new guides, videos, and articles are published. 
            Be the first to access valuable real estate insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground placeholder:text-muted-foreground"
            />
            <Button size="lg" className="bg-white text-coastal-teal hover:bg-white/90 font-semibold">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/80">
            No spam, just valuable content. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
            Need Personalized Guidance?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            While these resources provide great general information, every real estate situation is unique. 
            Let's discuss your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-coastal-teal hover:bg-coastal-teal/90 text-white font-semibold">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-coastal-teal text-coastal-teal hover:bg-coastal-teal hover:text-white font-semibold">
              Call (619) 555-0123
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
