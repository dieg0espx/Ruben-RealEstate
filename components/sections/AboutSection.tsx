import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, Heart, Home, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image with Badges */}
            <div className="relative h-full">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/Fearless Headshot.jpg"
                  alt="Ruben Banuelos - Real Estate Expert"
                  fill
                  className="object-cover"
                />
                
                {/* Badges overlay on image */}
                <div className="absolute top-4 left-4 space-y-3">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-sm font-bold text-coastal-charcoal">DRE# 02153497</div>
                    <div className="text-xs text-coastal-sage">Licensed Broker</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-sm font-bold text-coastal-teal">NARPM</div>
                    <div className="text-xs text-coastal-sage">Member</div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-sm font-bold text-coastal-charcoal">"Rising Star"</div>
                    <div className="text-xs text-coastal-sage">1st Year at Team Fearless 2024</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Timeline */}
            <div className="space-y-6">
              {/* Timeline Title and Subtitle */}
              <div className="space-y-4">
                <Badge className="bg-coastal-cream/20 text-coastal-slate border-coastal-cream">
                  <Users className="w-4 h-4 mr-2" />
                  About Ruben
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground font-lexend">
                  My Journey: Healthcare to Real Estate
                </h2>
                <p className="text-lg text-muted-foreground">
                  A story of discipline, empathy, and commitment to helping families build their future
                </p>
              </div>
              
              {/* Timeline Steps */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-8 bottom-8 w-0.5 opacity-60 z-10" style={{
                  background: 'linear-gradient(to bottom, #5F7D6D 0%, #5F7D6D 70%, transparent 100%)'
                }}></div>
                
                <div className="space-y-8">
              {/* Step 1: Healthcare Foundation */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative z-20" style={{backgroundColor: '#5F7D6D'}}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6  shadow-lg">
                    <h4 className="text-xl font-bold text-foreground mb-3">Doctor of Physical Therapy</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Built a foundation in healthcare, learning the value of discipline, empathy, and service. 
                      Developed skills in patient care, problem-solving, and building trust with families during 
                      challenging times.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2: Family Motivation */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative z-20" style={{backgroundColor: '#5F7D6D'}}>
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6  shadow-lg">
                    <h4 className="text-xl font-bold text-foreground mb-3">Building for Family & Community</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Driven by the desire to help families achieve financial independence and create lasting 
                      legacies. Committed to serving the community that raised him, with a special focus on 
                      veterans, first-time buyers, and long-term investors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Real Estate Transition */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative z-20" style={{backgroundColor: '#5F7D6D'}}>
                    <Home className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6  shadow-lg">
                    <h4 className="text-xl font-bold text-foreground mb-3">Real Estate Transition</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Leveraged healthcare expertise to become a licensed real estate broker and property manager. 
                      Applied the same principles of patient care to client relationships: listening, understanding 
                      needs, and providing expert guidance through complex processes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4: Rising Star */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative z-20" style={{backgroundColor: '#5F7D6D'}}>
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6  shadow-lg">
                    <h4 className="text-xl font-bold text-foreground mb-3">Rising Star Recognition</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Recognized as a 2024 "Rising Star" at Team Fearless, with expertise in VA loans, 
                      house hacking, and investment properties. NARPM certified and deeply connected to 
                      the North County community, serving veterans, families, and investors with integrity.
                    </p>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}
