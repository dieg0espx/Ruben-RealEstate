'use client'

import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Video, BookOpen, CheckCircle, ArrowRight, ExternalLink } from "lucide-react"
import useLanguageStore from "@/hooks/useLanguageStore"
import useScrollAnimation from "@/hooks/useScrollAnimation"
import type { resourcesTranslations } from "@/translations/resources/en"

export default function ResourcesPage() {
  const { t, getPage } = useLanguageStore()
  const { ref, isVisible } = useScrollAnimation()
  const pageT = getPage('resources') as typeof resourcesTranslations

  // Defensive check to ensure pageT exists and has required properties
  if (!pageT || !pageT.upcoming || !pageT.newsletter || !pageT.cta) {
    return (
      <main className="flex-1 bg-background">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Loading...</h1>
          </div>
        </div>
      </main>
    )
  }

  const resourceCategories = [
    {
      icon: <FileText className="w-8 h-8 text-coastal-teal" />,
      title: pageT.categories.freeGuides.title,
      description: pageT.categories.freeGuides.description,
      resources: [
        {
          title: pageT.categories.freeGuides.resources.firstTimeBuyer.title,
          description: pageT.categories.freeGuides.resources.firstTimeBuyer.description,
          type: pageT.categories.freeGuides.resources.firstTimeBuyer.type,
          pages: pageT.categories.freeGuides.resources.firstTimeBuyer.pages,
          downloadCount: pageT.categories.freeGuides.resources.firstTimeBuyer.downloadCount
        },
        {
          title: pageT.categories.freeGuides.resources.vaLoan.title,
          description: pageT.categories.freeGuides.resources.vaLoan.description,
          type: pageT.categories.freeGuides.resources.vaLoan.type,
          pages: pageT.categories.freeGuides.resources.vaLoan.pages,
          downloadCount: pageT.categories.freeGuides.resources.vaLoan.downloadCount
        },
        {
          title: pageT.categories.freeGuides.resources.investmentChecklist.title,
          description: pageT.categories.freeGuides.resources.investmentChecklist.description,
          type: pageT.categories.freeGuides.resources.investmentChecklist.type,
          pages: pageT.categories.freeGuides.resources.investmentChecklist.pages,
          downloadCount: pageT.categories.freeGuides.resources.investmentChecklist.downloadCount
        }
      ]
    },
    {
      icon: <Video className="w-8 h-8 text-coastal-sage" />,
      title: pageT.categories.videos.title,
      description: pageT.categories.videos.description,
      resources: [
        {
          title: pageT.categories.videos.resources.vaLoans.title,
          description: pageT.categories.videos.resources.vaLoans.description,
          type: pageT.categories.videos.resources.vaLoans.type,
          duration: pageT.categories.videos.resources.vaLoans.duration,
          views: pageT.categories.videos.resources.vaLoans.views
        },
        {
          title: pageT.categories.videos.resources.aduBasics.title,
          description: pageT.categories.videos.resources.aduBasics.description,
          type: pageT.categories.videos.resources.aduBasics.type,
          duration: pageT.categories.videos.resources.aduBasics.duration,
          views: pageT.categories.videos.resources.aduBasics.views
        },
        {
          title: pageT.categories.videos.resources.marketTrends.title,
          description: pageT.categories.videos.resources.marketTrends.description,
          type: pageT.categories.videos.resources.marketTrends.type,
          duration: pageT.categories.videos.resources.marketTrends.duration,
          views: pageT.categories.videos.resources.marketTrends.views
        }
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-coastal-steel" />,
      title: pageT.categories.articles.title,
      description: pageT.categories.articles.description,
      resources: [
        {
          title: pageT.categories.articles.resources.healthcareGuide.title,
          description: pageT.categories.articles.resources.healthcareGuide.description,
          type: pageT.categories.articles.resources.healthcareGuide.type,
          readTime: pageT.categories.articles.resources.healthcareGuide.readTime,
          publishDate: pageT.categories.articles.resources.healthcareGuide.publishDate
        },
        {
          title: pageT.categories.articles.resources.veteranMistakes.title,
          description: pageT.categories.articles.resources.veteranMistakes.description,
          type: pageT.categories.articles.resources.veteranMistakes.type,
          readTime: pageT.categories.articles.resources.veteranMistakes.readTime,
          publishDate: pageT.categories.articles.resources.veteranMistakes.publishDate
        },
        {
          title: pageT.categories.articles.resources.wealthBuilding.title,
          description: pageT.categories.articles.resources.wealthBuilding.description,
          type: pageT.categories.articles.resources.wealthBuilding.type,
          readTime: pageT.categories.articles.resources.wealthBuilding.readTime,
          publishDate: pageT.categories.articles.resources.wealthBuilding.publishDate
        }
      ]
    }
  ]

  const upcomingContent = [
    pageT.upcoming.content1,
    pageT.upcoming.content2,
    pageT.upcoming.content3,
    pageT.upcoming.content4,
    pageT.upcoming.content5
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
              {pageT.hero.badge}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-lexend">
              {pageT.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {pageT.hero.subtitle}
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
              {pageT.upcoming.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {pageT.upcoming.subtitle}
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
            {pageT.newsletter.title}
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            {pageT.newsletter.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder={pageT.newsletter.emailPlaceholder}
              className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground placeholder:text-muted-foreground"
            />
            <Button size="lg" className="bg-white text-coastal-teal hover:bg-white/90 font-semibold">
              {pageT.newsletter.subscribeButton}
            </Button>
          </div>
          <p className="text-sm text-white/80">
            {pageT.newsletter.disclaimer}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-lexend">
            {pageT.cta.title}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {pageT.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-coastal-teal hover:bg-coastal-teal/90 text-white font-semibold">
              {pageT.cta.scheduleButton}
            </Button>
            <Button size="lg" variant="outline" className="border-coastal-teal text-coastal-teal hover:bg-coastal-teal hover:text-white font-semibold">
              {pageT.cta.callButton}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
