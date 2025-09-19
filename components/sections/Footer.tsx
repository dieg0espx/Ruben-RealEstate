'use client'

import Image from "next/image"
import { useLanguageStore } from "@/hooks/useLanguageStore"

export default function Footer() {
  const { t } = useLanguageStore()

  return (
    <footer className="border-t border-border bg-[#5F7D6D] backdrop-blur supports-[backdrop-filter]:bg-[#5F7D6D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-fade-in-up">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-start -ml-2">
              <Image
                src="/logo/ruben real estate_Texto.png"
                alt="Ruben Real Estate Logo"
                width={240}
                height={60}
                className="h-12 sm:h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/90 text-sm sm:text-base font-medium max-w-xs">
              {t('footer.slogan')}
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook text-xl"></i>
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin text-xl"></i>
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 text-white/80 text-sm sm:text-base">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">Properties</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
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
