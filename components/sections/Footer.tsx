'use client'

import Image from "next/image"
import { useLanguageStore } from "@/hooks/useLanguageStore"

export default function Footer() {
  const { t } = useLanguageStore()

  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo/ruben real estate_Horizontal.png"
                alt="Ruben Real Estate Logo"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.services_title')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>{t('footer.service1')}</li>
              <li>{t('footer.service2')}</li>
              <li>{t('footer.service3')}</li>
              <li>{t('footer.service4')}</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.areas_title')}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>San Marcos</li>
              <li>Escondido</li>
              <li>Vista</li>
              <li>Carlsbad</li>
              <li>Oceanside</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.contact_title')}</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>(541) 602-1026</div>
              <div>ruben.o.banuelos@gmail.com</div>
              <div>DRE# 02153497</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
