'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import useLanguageStore from "@/hooks/useLanguageStore"
import useScrollAnimation from "@/hooks/useScrollAnimation"

export default function ContactSection() {
  const { t } = useLanguageStore()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <Badge className={`bg-coastal-cream/20 text-coastal-slate border-coastal-cream transition-all duration-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                <Phone className="w-4 h-4 mr-2" />
                {t('contact.badge')}
              </Badge>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-lexend transition-all duration-800 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                {t('contact.title')}
              </h2>
              <p className={`text-lg sm:text-xl text-muted-foreground transition-all duration-800 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                {t('contact.subtitle')}
              </p>
            </div>
            
            <div className={`space-y-4 sm:space-y-6 transition-all duration-800 delay-600 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'}`}>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-coastal-gradient rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-coastal-cream" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-foreground text-sm sm:text-base">{t('contact.phone')}</div>
                  <div className="text-muted-foreground text-sm sm:text-base">(541) 602-1026</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-coastal-steel rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-coastal-cream" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-foreground text-sm sm:text-base">{t('contact.email')}</div>
                  <div className="text-muted-foreground text-sm sm:text-base break-all">ruben.o.banuelos@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-coastal-sage rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-coastal-cream" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-foreground text-sm sm:text-base">{t('contact.areas')}</div>
                  <div className="text-muted-foreground text-sm sm:text-base">{t('contact.areas.description')}</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-coastal-gradient hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {t('contact.schedule_button')}
              </Button>
            </div>
          </div>
          
          <div className={`bg-white rounded-2xl p-6 sm:p-8 border shadow-lg transition-all duration-800 delay-600 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">{t('contact.form.title')}</h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm sm:text-base">{t('contact.form.first_name')}</Label>
                  <Input id="firstName" placeholder={t('contact.form.first_name_placeholder')} className="text-sm sm:text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm sm:text-base">{t('contact.form.last_name')}</Label>
                  <Input id="lastName" placeholder={t('contact.form.last_name_placeholder')} className="text-sm sm:text-base" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">{t('contact.form.email')}</Label>
                <Input id="email" type="email" placeholder={t('contact.form.email_placeholder')} className="text-sm sm:text-base" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm sm:text-base">{t('contact.form.phone')}</Label>
                <Input id="phone" type="tel" placeholder={t('contact.form.phone_placeholder')} className="text-sm sm:text-base" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="clientType" className="text-sm sm:text-base">{t('contact.form.client_type')}</Label>
                <select id="clientType" className="w-full px-3 py-2 border border-input rounded-md bg-white text-foreground text-sm sm:text-base">
                  <option>{t('contact.form.option1')}</option>
                  <option>{t('contact.form.option2')}</option>
                  <option>{t('contact.form.option3')}</option>
                  <option>{t('contact.form.option4')}</option>
                  <option>{t('contact.form.option5')}</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base">{t('contact.form.message')}</Label>
                <Textarea id="message" placeholder={t('contact.form.message_placeholder')} rows={4} className="text-sm sm:text-base" />
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <input id="marketingConsent" name="marketingConsent" type="checkbox" required className="mt-1 h-4 w-4 border-input rounded" />
                  <label htmlFor="marketingConsent" className="text-xs sm:text-sm text-muted-foreground">
                    {t('contact.form.opt_in')} <Link href="/privacy" className="underline">{t('legal.link.privacy')}</Link> {" "}
                    {t('legal.and')} <Link href="/terms" className="underline">{t('legal.link.terms')}</Link>.
                  </label>
                </div>
                <p className="text-[11px] sm:text-xs text-muted-foreground">
                  {t('legal.no_sale_share')}
                </p>
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full bg-coastal-gradient hover:bg-[#5F7D6D] hover:text-white text-coastal-cream text-sm sm:text-base py-3 transition-all duration-300">
                  {t('contact.form.submit')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
