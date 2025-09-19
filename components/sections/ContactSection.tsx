'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguageStore } from "@/hooks/useLanguageStore"

export default function ContactSection() {
  const { t } = useLanguageStore()

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-coastal-cream/20 text-coastal-slate border-coastal-cream">
                <Phone className="w-4 h-4 mr-2" />
                {t('contact.badge')}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-lexend">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('contact.subtitle')}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-coastal-gradient rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-coastal-cream" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t('contact.phone')}</div>
                  <div className="text-muted-foreground">(541) 602-1026</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-coastal-steel rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-coastal-cream" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t('contact.email')}</div>
                  <div className="text-muted-foreground">ruben.o.banuelos@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-coastal-sage rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-coastal-cream" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t('contact.areas')}</div>
                  <div className="text-muted-foreground">{t('contact.areas.description')}</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-coastal-gradient hover:opacity-90 text-coastal-cream text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                {t('contact.schedule_button')}
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('contact.form.title')}</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">{t('contact.form.first_name')}</Label>
                  <Input id="firstName" placeholder={t('contact.form.first_name_placeholder')} />
                </div>
                <div>
                  <Label htmlFor="lastName">{t('contact.form.last_name')}</Label>
                  <Input id="lastName" placeholder={t('contact.form.last_name_placeholder')} />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">{t('contact.form.email')}</Label>
                <Input id="email" type="email" placeholder={t('contact.form.email_placeholder')} />
              </div>
              
              <div>
                <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                <Input id="phone" type="tel" placeholder={t('contact.form.phone_placeholder')} />
              </div>
              
              <div>
                <Label htmlFor="clientType">{t('contact.form.client_type')}</Label>
                <select id="clientType" className="w-full px-3 py-2 border border-input rounded-md bg-background">
                  <option>{t('contact.form.option1')}</option>
                  <option>{t('contact.form.option2')}</option>
                  <option>{t('contact.form.option3')}</option>
                  <option>{t('contact.form.option4')}</option>
                  <option>{t('contact.form.option5')}</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="message">{t('contact.form.message')}</Label>
                <Textarea id="message" placeholder={t('contact.form.message_placeholder')} rows={4} />
              </div>
              
              <Button type="submit" className="w-full bg-coastal-gradient hover:opacity-90 text-coastal-cream">
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
