import { Button } from "@/components/ui/button"
import { Phone, TrendingUp, Home } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/HeroPageVideo.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <Image
            src="/images/61-web-or-mls-Riviera_drone (7 of 12).JPG"
            alt="San Diego Real Estate"
            fill
            className="object-cover"
            priority
          />
        </video>
        {/* Dark gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight font-lexend text-white">
            Your North County Home Starts Here
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-pretty">
            Guiding veterans families and investors to their next chapter
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
              <TrendingUp className="w-5 h-5 mr-2" />
              See Investment Options
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
