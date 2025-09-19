import { Home, Shield, TrendingUp } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Broker + Property Manager */}
          <div className="space-y-4">
            <div className="w-20 h-20 bg-coastal-sage rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Home className="w-10 h-10 text-coastal-charcoal" />
            </div>
            <h3 className="text-xl font-semibold text-coastal-charcoal">
              Broker + Property Manager
            </h3>
          </div>

          {/* Veteran Focused */}
          <div className="space-y-4">
            <div className="w-20 h-20 bg-coastal-slate rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Shield className="w-10 h-10 text-coastal-charcoal" />
            </div>
            <h3 className="text-xl font-semibold text-coastal-charcoal">
              Veteran Focused
            </h3>
          </div>

          {/* Investor Ready */}
          <div className="space-y-4">
            <div className="w-20 h-20 bg-coastal-steel rounded-full flex items-center justify-center mx-auto shadow-lg">
              <TrendingUp className="w-10 h-10 text-coastal-charcoal" />
            </div>
            <h3 className="text-xl font-semibold text-coastal-charcoal">
              Investor Ready
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
