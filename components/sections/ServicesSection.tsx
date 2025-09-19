'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Heart, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useLanguageStore } from "@/hooks/useLanguageStore"

export default function ServicesSection() {
  const { t } = useLanguageStore()

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-coastal-teal/20 text-coastal-slate border-coastal-teal">
            <Shield className="w-4 h-4 mr-2" />
            {t('services.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-lexend">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
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
              <CardTitle className="text-3xl text-foreground font-lexend">{t('services.veterans.title')}</CardTitle>
              <CardDescription className="text-lg">
                {t('services.veterans.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6 flex flex-col flex-1">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('services.veterans.feature1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('services.veterans.feature2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('services.veterans.feature3')}</span>
                </li>
              </ul>
              <Button className="w-full bg-coastal-gradient hover:opacity-90 text-coastal-cream mt-auto">
                {t('services.veterans.button')}
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
              <CardTitle className="text-3xl text-foreground font-lexend">{t('services.investors.title')}</CardTitle>
              <CardDescription className="text-lg">
                {t('services.investors.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6 flex flex-col flex-1">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('services.investors.feature1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('services.investors.feature2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('services.investors.feature3')}</span>
                </li>
              </ul>
              <Button className="w-full bg-coastal-steel hover:opacity-90 text-coastal-cream mt-auto">
                {t('services.investors.button')}
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
              <CardTitle className="text-3xl text-foreground font-lexend">{t('services.families.title')}</CardTitle>
              <CardDescription className="text-lg">
                {t('services.families.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6 flex flex-col flex-1">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('services.families.feature1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('services.families.feature2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coastal-teal mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t('services.families.feature3')}</span>
                </li>
              </ul>
              <Button className="w-full bg-coastal-sage hover:opacity-90 text-coastal-cream mt-auto">
                {t('services.families.button')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
