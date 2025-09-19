'use client'

import Image from "next/image"
import { useLanguageStore } from "@/hooks/useLanguageStore"

export default function Footer() {
  const { t } = useLanguageStore()

  return (
    <footer className="border-t border-border bg-[#5F7D6D] backdrop-blur supports-[backdrop-filter]:bg-[#5F7D6D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 animate-fade-in-up">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo/ruben real estate_Texto.png"
                alt="Ruben Real Estate Logo"
                width={240}
                height={60}
                className="h-12 sm:h-16 w-auto brightness-0 invert"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm sm:text-base">{t('footer.services_title')}</h3>
            <ul className="space-y-2 text-white/80 text-sm sm:text-base">
              <li>{t('footer.service1')}</li>
              <li>{t('footer.service2')}</li>
              <li>{t('footer.service3')}</li>
              <li>{t('footer.service4')}</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm sm:text-base">{t('footer.areas_title')}</h3>
            <ul className="space-y-2 text-white/80 text-sm sm:text-base">
              <li>San Marcos</li>
              <li>Escondido</li>
              <li>Vista</li>
              <li>Carlsbad</li>
              <li>Oceanside</li>
            </ul>
          </div>
          
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-white text-sm sm:text-base">{t('footer.contact_title')}</h3>
            <div className="space-y-2 text-white/80 text-sm sm:text-base">
              <div>(541) 602-1026</div>
              <div className="break-all">ruben.o.banuelos@gmail.com</div>
              <div>DRE# 02153497</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-white/80 animate-fade-in-up animation-delay-200">
          <p className="text-sm sm:text-base">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
