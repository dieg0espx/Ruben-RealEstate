'use client'

import Image from "next/image"
import useScrollAnimation from "@/hooks/useScrollAnimation"

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <section ref={ref} className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-items-center">
          {/* BiggerPockets Logo */}
          <div className={`flex items-center justify-center p-2 sm:p-4 transition-all duration-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <Image
              src="/biggerPockets_logo.png"
              alt="BiggerPockets"
              width={120}
              height={60}
              className="max-w-full h-auto object-contain w-12 sm:w-20 md:w-24 lg:w-28 xl:w-32"
            />
          </div>

          {/* NARPM Logo */}
          <div className={`flex items-center justify-center p-2 sm:p-4 transition-all duration-800 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <Image
              src="/narpm_logo - Editado.png"
              alt="NARPM"
              width={120}
              height={60}
              className="max-w-full h-auto object-contain w-12 sm:w-20 md:w-24 lg:w-28 xl:w-32"
            />
          </div>

          {/* Rising Star Logo */}
          <div className={`flex items-center justify-center p-2 sm:p-4 transition-all duration-800 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <Image
              src="/risingStar_logo.png"
              alt="Rising Star"
              width={120}
              height={60}
              className="max-w-full h-auto object-contain w-12 sm:w-20 md:w-24 lg:w-28 xl:w-32"
            />
          </div>

          {/* ROA Logo */}
          <div className={`flex items-center justify-center p-2 sm:p-4 transition-all duration-800 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <Image
              src="/roa_logo.png"
              alt="ROA"
              width={120}
              height={60}
              className="max-w-full h-auto object-contain w-12 sm:w-20 md:w-24 lg:w-28 xl:w-32"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
